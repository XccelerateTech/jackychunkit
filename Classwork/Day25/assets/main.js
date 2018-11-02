$(document).ready(() => {
    //append the current files that are already in the directly to the list when document loads
    let currentFiles = [];
    $.get('/storage').done(data => {
        data.forEach(e => {
            $('#filesList').append(`<li>${e}</li>`)
            //logs what file is currently in the remote storage
            currentFiles.push(e);
        })
    }).fail(() => {
        $('#filesList').append(`<p style='color:red'><strong>Unable to retrieve file list from the server, please refresh the page and try again</strong></p>`);
    })

    $("#upload").submit(function (event) {
        event.preventDefault();
        //terminate the function if empty user ipnut
        if (!$("input[name='upload']")[0].files[0]) {
            alert('Please select your file before submitting')
            return;
        }
        //let user know the the file is being uploaded
        $('#error').show()
        $('#loading').show()
        const filename = $("input[name='upload']")[0].files[0].name;
        const formData = new FormData(this);
        const confirmation = `A file named "${filename}" already exists, uploading a new one will override ride it, continue away?`;
        const ajaxProperties = {
            url: '/storage',
            type: 'POST',
            data: formData,
            success: data => {
                console.log(data)
                if (currentFiles.every(e => {
                    console.log(e !== filename)
                    return e !== filename;
                })) {
                    $('#filesList').append(`<li>${data}</li>`);
                }
                $('#loading').hide()
                $('#uploaded').show()
                $('#uploaded').fadeOut(1000)
            },
            error: (request, status, error) => {
                alert(request.responseText);
                $('.error').show()
                $('#loading').hide();
            },
            cache: false,
            contentType: false,
            processData: false
        };
        //check if there is any duplicated names, if not, proceed the post request
        if (currentFiles.every(e => {
            return e !== filename;
        })) {
            $.ajax(ajaxProperties);
            //if we actually encounters a duplicated name, ask if the user would overrides it anyway
        } else if (confirm(confirmation)) {
            $.ajax(ajaxProperties);
        } else {
            $('#cancelled').show(() => {
                $('#loading').hide();
                $('#uploaded').show();
                $('#cancelled').fadeOut(1000);
            })
        }
    });

    //download file on click
    $('#filesList').on('click', e => {
        const path = '/storage/' + e.target.textContent;
        //make a get request and then redirect to the download path
        $.get(path);
        window.location = path;
    })
});