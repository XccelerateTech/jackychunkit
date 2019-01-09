function GetWeather() {
    var http = new XMLHttpRequest();
    const apiKey = '4ea9b446e3d4d6357ec215a218627ad5';
    const cityId = 1819730;
    http.open('GET', `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`, true);

http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        var parsed = JSON.parse(http.response);
        var temp = Math.floor((parsed.main.temp - 273)*10)/10;
        var humidity = parsed.main.humidity;
        document.getElementById('weather').innerHTML = `
        <div id = 'current'>
            Current Weather: 
        </div>
        <div>
            Temperature:${temp}&#x2103
            <br>Humidity:${humidity}%
        </div>`
    } else {
        console.log('error occurred' + http.status);
    }
}

// onreadystatechange should be before http.send()
http.send();
}

GetWeather()

