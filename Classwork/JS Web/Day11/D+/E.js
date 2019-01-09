$( "#submit" ).click(function() {
    $('#form1').submit(function(event) {
        $('.time').html('Loading....')
        event.preventDefault();
        informMe(event.target.longtitude.value, event.target.latitude.value);
        informMeAgain(event.target.longtitude.value, event.target.latitude.value);
    })});

const informMe = function (lat, lng) {
    $.ajax({
        url: `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`,
        beforeSend: function (xhr) {
            // This function will be run before sending ajax.
        },
        dataType: 'JSON',
        type: "GET"
    }).done(function (data) {
        $('#sunrise-time').html(data.results.sunrise);
        $('#sunset-time').html(data.results.sunset);
    }).fail(function (data) {
        alert('error:' + data.status);
        $('#sunrise-time').html('<span style="color:red"><strong>unable to get time</strong></span>');
        $('#sunset-time').html('<span style="color:red"><strong>unable to get time</strong></span>');
    })
};
const informMeAgain = function (lat, lng) {
    $.ajax({
        url: `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=yesterday&formatted=0 `,
        beforeSend: function (xhr) {
            // This function will be run before sending ajax.
        },
        dataType: 'JSON',
        type: "GET"
    }).done(function (data) {
        const lastSunrise = new Date(data.results.sunrise)
        const lastSunset = new Date(data.results.sunset)
        $('#sunrise-since-yesterday').html(timeDifference(lastSunrise))
        console.log(lastSunrise);
        $('#sunret-since-yesterday').html(timeDifference(lastSunset));
        console.log(lastSunset);
    }).fail(function (data) {
        alert('error:' + data.status);
        $('.time').html('<span style="color:red"><strong>unable to retrieve time information from server</strong></span>');
    })
};

function timeDifference(when) {
    const now = new Date();
    var diff = now - when;
    diff /= 1000;
    var hh = Math.floor(diff / 3600).toString().padStart(2, '0');
    var mm = Math.floor((diff / 60) - hh * 60).toString().padStart(2, '0');
    var ss = Math.floor(diff - hh * 3600 - mm * 60).toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`
}