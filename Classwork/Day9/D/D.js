// Adding a contact to the contact list
// Name: Peter
// telephone: 123456789
// email: peter@gmail.com
var peter = "<tr class=\"row\"><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>"
$('tbody').append(peter)
// Adding an extra button to the form called Clear
var clear = "<div id=\"row-clear\"><input id=\"clear\" type=\"reset\" value=\"clear\"></div>"
$('#form1').append(clear)
// Change the title of the page to <Your name>'s contact list application
$('h1:eq(0)').html(`&ltYour name&gt's contact list application`)
// Change the color of the text in the contact list.
$('tbody').css("color", "blue")

$('#form1').submit(function (event) {
    event.preventDefault();
    var invalid = false;
    // Validate using JQuery the name should be less than 50 characters
    if (event.target.name.value.length > 50) {
        // When the input field is invalid, the border of the corresponding input should be changed to red
        $(`input[name$='name']`).css("border-color", "red");
        alert('Name should has maximum of 50 characters.');
        invalid = true;
    } else {
        $(`input[name$='phone']`).css("border-color", "initial")
    }
    // Validate phone number should be between 6 numbers to 16 numbers
    if (!(event.target.phone.value.length >= 6 && event.target.phone.value.length <= 16)) {
        // When the input field is invalid, the border of the corresponding input should be changed to red
        $(`input[name$='phone']`).css("border-color", "red");
        alert('Phone number should be between 6 and 16 numbers long.');
        invalid = true;
    } else {
        $(`input[name$='phone']`).css("border-color", "initial")
    }
    if (!invalid) {
        var a = event.target.name.value;
        var b = event.target.phone.value;
        var c = event.target.email.value;
        $('tbody').append(`
            <tr class="row">
                <td>${a}</td>
                <td>${b}</td>
                <td>${c}</td>
            </tr>
        `)};
});

var who = new Number;
// Add a Update Contacts list section for the page which has the same validation as the create contact list.
$('tbody').on('click','tr',(function () {
    $(`input[name$='name2']`).val($(this).children(':eq(0)').text());
    $(`input[name$='phone2']`).val($(this).children(':eq(1)').text());
    $(`input[name$='email2']`).val($(this).children(':eq(2)').text());
    who = $(this).index() + 1;
}));

$('#form2').submit(function (event) {
    event.preventDefault();
    var invalid = false;
    // Validate using JQuery the name should be less than 50 characters
    if (event.target.name2.value.length > 50) {
        // When the input field is invalid, the border of the corresponding input should be changed to red
        $(`input[name$='name2']`).css("border-color", "red");
        alert('Name should has maximum of 50 characters.');
        invalid = true;
    } else {
        $(`input[name$='phone2']`).css("border-color", "initial")
    }
    // Validate phone number should be between 6 numbers to 16 numbers
    if (!(event.target.phone2.value.length >= 6 && event.target.phone2.value.length <= 16)) {
        // When the input field is invalid, the border of the corresponding input should be changed to red
        $(`input[name$='phone2']`).css("border-color", "red");
        alert('Phone number should be between 6 and 16 numbers long.');
        invalid = true;
    } else {
        $(`input[name$='phone2']`).css("border-color", "initial")
    }
    if (!invalid) {
        var a = event.target.name2.value;
        var b = event.target.phone2.value;
        var c = event.target.email2.value;
        alert(`Contact updated! The name is ${a}, phone numer is ${b}, email is ${c}`);
        $("tr:eq(" + who + ")").replaceWith(`
            <tr class="row">
                <td>${a}</td>
                <td>${b}</td>
                <td>${c}</td>
            </tr>
        `);
    }
});

