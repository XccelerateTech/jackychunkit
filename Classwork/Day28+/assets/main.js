$(function () {
    let edited = false;
    $('textarea').change(() => {
        edited = true;
    })
    $(window).bind('beforeunload', function () {
        if (edited)
        return 'You are leaving the page without saving'
    });
    
    $('#create').submit(evt => {
        evt.preventDefault();
        const title = $('input[name=title]').val();
        if (title.includes('@' || '#' || '$' || '%' || '^' || '&')) {
            alert(`characters including '@','#','$','%','^','&' should not be included in the name`);
            return;
        }
        //send a get request to the api to recieve notes info from the server
        axios.get('/api/notes')
            .then(res => {
                //check if title matches any current note title, if match, prompt the user for overwriting
                if (res.data.some(element => {
                    return title == element.title;
                })) {
                    if (!confirm(`A note with the name "${title}" already exists, Save it with override the previous note your had, proceed?`)) return;
                }
                //post request to update the notes
                axios.post('/api/notes/', {
                    title: title,
                    note: $('textarea[name=note]').val()
                }).then(res => {
                    alert('Uploaded, you will be redirected back');
                    edited = false;
                    window.location = '/'
                })
            })
            .catch(err => alert(`Unable to establish a connection with server, ${err.message}`));
    });

    $('#edit').submit(evt => {
        evt.preventDefault();
        axios.put('/api/notes/', {
            title: $('#note_title')[0].innerHTML,
            note: $('textarea[name=note]').val()
        })
            .then(res => {
                alert('Edited, you will be redirected back');
                edited = false;
                window.location = '/notes'
            })
            .catch(err => alert(`Unable to establish a connection with server, ${err.message}`));
    });

    $('.remove').on('click', evt => {
        axios.delete('/api/notes/' + $(evt.target)[0].className.replace(/^(fa fa-trash title_)|(remove title_)/g, ''))
            .then(res => {
                alert('Removed');
                window.location = '/notes'
            })
            .catch(err => alert(`Unable to establish a connection with server, ${err.message}`));
    })
});