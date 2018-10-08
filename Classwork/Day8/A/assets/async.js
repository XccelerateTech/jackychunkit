// window.onload = function() {

//     var http = new XMLHttpRequest();

//     http.onreadystatechange = function() {
//         if(http.readyState == 4 && http.status == 200){
//             console.log(JSON.parse(http.response));
//         }
//     }
//     http.open("GET","../server/data.json", true);
//     http.send();
// };

var http = new XMLHttpRequest();

http.open('GET', '../server/data.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(JSON.parse(http.response));
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();