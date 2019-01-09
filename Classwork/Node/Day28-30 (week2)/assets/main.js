$(function () {
    let edited = false;
    //Propmt User if leaving page without saving
    $(window).bind('beforeunload', function () {
        if (edited)
            return 'You are leaving the page without saving'
    });
    //Ctrl + S would trigger save
    let ctrlPressed = false;
    $('html').on('keydown', evt => {
        if (evt.keyCode == 17)
            ctrlPressed = true;
        if (evt.keyCode == 83 && ctrlPressed) {
            if (window.location.pathname !== '/' && window.location.pathname !== '/notes') {
                evt.preventDefault();
                if (window.location.pathname == '/create') {
                    $('#create').trigger('submit');
                } else {
                    $('#edit').trigger('submit');
                }
            }
        }
    });
    $('html').on('keyup', evt => {
        if (evt.keyCode == 17) {
            ctrlPressed = false;
        }
    })

    $('textarea').on('keypress, click', () => {
        edited = true;
    })

    $('#create').submit(async evt => {
        evt.preventDefault();
        const title = $('input[name=title]').val();
        //Forbid special characters
        if (title.match(/.*(!|@|#|\$|%|\^|&|\*|~|`|\/|\\)+.*/g)) {
            alert(`Special characters should not be included in the name`);
            return;
        }
        try {
            //send a get request to the api to recieve notes info from the server
            const res = await axios.get('/api/notes')
            //check if title matches any current note title, if match, prompt the user for overwriting
            if (res.data.some(element => {
                return title == element.title;
            })) {
                if (confirm(`A note with the name "${title}" already exists, Save it with override the previous note your had, proceed?`)) {
                    //put request to override the note
                    await axios.put('/api/notes/', {
                        title: title,
                        note: $('textarea[name=note]').val()
                    })
                    edited = false;
                    window.location = '/';
                    alert('Uploaded, you will be redirected back');
                } else {
                    return;
                }
            } else {
                //post request to add the note
                await axios.post('/api/notes/', {
                    title: title,
                    note: $('textarea[name=note]').val()
                })
                edited = false;
                window.location = '/';
                alert('Uploaded, you will be redirected back')
            }
        } catch (err) {
            alert(`Unable to establish a connection with server, ${err.message}`)
        }
    });

    $('#edit').submit(async evt => {
        evt.preventDefault();
        try {
            await axios.put('/api/notes/', {
                title: $('#note_title')[0].innerHTML,
                note: $('textarea[name=note]').val()
            })
            edited = false;
            window.location = '/notes'
            alert('Edited, you will be redirected back')
        } catch (err) {
            alert(`Unable to establish a connection with server, ${err.message}`)
        }
    });

    $('.remove').on('click',async evt => {
        if (confirm('Your are removing your note, this action cannot be undone, proceed?'))
            try {
                await axios.delete('/api/notes/' + $(evt.target)[0].className.replace(/^(fa fa-trash title_)|(remove title_)/g, ''));
                ($(evt.target)[0].tagName == "I") ?
                    $(evt.target).parent().parent().remove() :
                    $(evt.target).parent().remove()
            } catch (err) {
                alert(`Unable to establish a connection with server, ${err.message}`)
            }
    })
});