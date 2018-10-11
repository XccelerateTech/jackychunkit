$('#form2').submit(function (event) {
    event.preventDefault();
    $('#comparison1').html('Loading....')
    $('#comparison2').html('Loading....')
    $('.time2').html('Loading....')
    const country1Name = $('#country1').val()
    const country2Name = $('#country2').val()
    compareCountries(country1Name, country2Name);


});

const compareCountries = function (country1, country2) {
    const get1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`)
    const get2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`)

    $.when(get1, get2).done(function (data1, data2) {
        const latlng1 = data1[0][0].latlng
        const latlng2 = data2[0][0].latlng

        const sunInfo1Formatted = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng1[0]}&lng=${latlng1[1]}&date=today&formatted=0`)
        const sunInfo2Formatted = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng2[0]}&lng=${latlng2[1]}&date=today&formatted=0`)
        const sunInfo1Unformatted = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng1[0]}&lng=${latlng1[1]}&date=today`)
        const sunInfo2Unformatted = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng2[0]}&lng=${latlng2[1]}&date=today`)

        $.when(sunInfo1Formatted, sunInfo2Formatted, sunInfo1Unformatted, sunInfo2Unformatted).done(function (data1Form, data2Form, data1Unform, data2Unform) {
            $('.country1').html(country1);
            $('.country2').html(country2);
            $('#sunrise-time1').html(data1Unform[0].results.sunrise);
            $('#sunset-time1').html(data1Unform[0].results.sunset);
            $('#sunrise-time2').html(data2Unform[0].results.sunrise);
            $('#sunset-time2').html(data2Unform[0].results.sunset);
            $('#comparison1').html(Difference(data1Form, data2Form, 'sunrise'))
            $('#comparison2').html(Difference(data1Form, data2Form, 'sunset'))

            function Difference(country1data, country2data, sunriseOrSunset) {
                if (sunriseOrSunset == 'sunrise') {
                    var Num1 = new Date(country1data[0].results.sunrise)
                    var Num2 = new Date(country2data[0].results.sunrise)
                } else {
                    var Num1 = new Date(country1data[0].results.sunset)
                    var Num2 = new Date(country2data[0].results.sunset)
                }
                if (Num1 < Num2) {
                    var diff = Num2 - Num1;
                    var earlier = true;
                } else {
                    var diff = Num1 - Num2;
                    var earlier = false;
                }
                diff /= 1000;
                var hh = Math.floor(diff / 3600).toString().padStart(2, '0')
                var mm = Math.floor((diff / 60) - hh * 60).toString().padStart(2, '0');
                var ss = Math.floor(diff - hh * 3600 - mm * 60).toString().padStart(2, '0');
                return (earlier) ? `${country1} is ${hh}:${mm}:${ss} earlier than ${country2}` : `${country1} is ${hh}:${mm}:${ss} later than ${country2}`;

            }
        })
    }).fail(function (data) {
        alert('error:' + data.status);
        $('.comparison2').html('<span style="color:red"><strong>unable to retrieve time information from server</strong></span>');
        $('.time2').html('<span style="color:red"><strong>unable to retrieve time information from server</strong></span>');
    })
}