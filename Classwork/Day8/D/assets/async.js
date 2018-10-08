class User {
    constructor(input) {
        this.firstName = input.name.first;
        this.lastName = input.name.last;
        this.email = input.email;
        this.DoB = input.dob;
    }
}


function randomUser() {

    var http = new XMLHttpRequest();

    http.open('GET', `https://randomuser.me/api/?results=5`, true);

http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        var parsed = JSON.parse(http.response);
        var person = parsed.results.map(function(user){
            return new User(user);
        })
        console.log(person)
    } else {
        console.log('error occurred' + http.status);
    }
}

// onreadystatechange should be before http.send()
http.send();
}

randomUser()


