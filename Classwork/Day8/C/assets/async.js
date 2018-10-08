var http = new XMLHttpRequest();
function whoIsInSpace(callback){
    
http.open('GET', `http://api.open-notify.org/astros.json`, true);

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        var inSpace = JSON.parse(http.response);
        callback(inSpace.people.map(function(element) {
            return element.name}));
    } else {
        console.log('error occurred' + http.status);
    }
}

// onreadystatechange should be before http.send()
http.send();

}

whoIsInSpace(function(callback){
    console.log(callback)
})
