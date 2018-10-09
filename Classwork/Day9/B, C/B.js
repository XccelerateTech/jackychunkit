// Adding a contact to the contact list
// Name: Peter
// telephone: 123456789
// email: peter@gmail.com
var peter = "<tr class=\"row\"><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>"
$('tbody').append(peter)
// Adding an extra button to the form called Clear
var clear ="<div id=\"row-clear\"><input type=\"submit\" value=\"clear\"></div>"
$('#form1').append(clear)
// Change the title of the page to <Your name>'s contact list application
$('h1:even').html(`&ltYour name&gt's contact list application`)
// Change the color of the text in the contact list.
$('tbody').css("color","white")