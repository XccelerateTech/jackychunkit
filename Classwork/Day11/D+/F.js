$( "#compare" ).click(function() {
    $('#form1').submit(function(event) {
        $('#comparison').html('Loading....')
        event.preventDefault();
        Compare(event.target.longtitude.value, event.target.latitude.value);
    })});
   
    
const Compare = function (lat, lng) {
    let targetDayLength = new Number;
    let hkDayLength = new Number;
    $.ajax({
        url: `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today&formatted=0 `,
        beforeSend: function (xhr) {
            // This function will be run before sending ajax.
        },
        dataType: 'JSON',
        type: "GET"
    }).done(function (data) {
        const Sunrise = new Date(data.results.sunrise)
        const Sunset = new Date(data.results.sunset)
        targetDayLength = Sunset - Sunrise;
    }).fail(function (data) {
        alert('error:' + data.status);
        $('.time').html('<span style="color:red"><strong>unable to retrieve time information from server</strong></span>');
    }).then(
            $.ajax({
        url: `https://api.sunrise-sunset.org/json?lat=22.28552&lng=114.15769&date=today&formatted=0 `,
        beforeSend: function (xhr) {
            // This function will be run before sending ajax.
        },
        dataType: 'JSON',
        type: "GET"
    }).done(function (data) {
        const Sunrise = new Date(data.results.sunrise)
        const Sunset = new Date(data.results.sunset)
        hkDayLength = Sunset - Sunrise;
        console.log(hkDayLength);
        console.log(targetDayLength)
        $('#comparison').html(Daylight(targetDayLength,hkDayLength));
    }).fail(function (data) {
        alert('error:' + data.status);
        $('.time').html('<span style="color:red"><strong>unable to retrieve time information from server</strong></span>');
    }))
};

function DaylightDifference(target, hk) {
    console.log(target)
    console.log(hk)
    var diff = target - hk;
    diff /= 1000;
    var hh = Math.floor(diff / 3600).toString().padStart(2, '0')
    var mm = Math.floor((diff / 60) - hh * 60).toString().padStart(2, '0');
    var ss = Math.floor(diff - hh * 3600 - mm * 60).toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`
}