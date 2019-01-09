//Once the user hovers over the 4 icons, they should increase in size by 40%, 
//once the users mouse leaves the icons their size should decrease to normal again
const flower = document.getElementById('flower')
const payment = document.getElementById('payment')
const phone = document.getElementById('phone')
const truck = document.getElementById('truck')

flower.addEventListener('mouseover', function() {
    flower.style.width = "200px";
});
flower.addEventListener('mouseout', function() {
    flower.style.width = "initial";
});

payment.addEventListener('mouseover', function() {
    payment.style.width = "200px";
});
payment.addEventListener('mouseout', function() {
    payment.style.width = "initial";
});

phone.addEventListener('mouseover', function() {
    phone.style.width = "200px";
});
phone.addEventListener('mouseout', function() {
    phone.style.width = "initial";
});

truck.addEventListener('mouseover', function() {
    truck.style.width = "200px";
});
truck.addEventListener('mouseout', function() {
    truck.style.width = "initial";
});


const more = document.getElementById('more');
const title_container = document.getElementById('title_container');
const title = document.getElementById('title');


more.addEventListener('click', function() {
    //Remove the black overlay so that we can see the flowers clearly.
    title_container.style.backgroundColor = "transparent";
    //Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, give the text a background and change the color to blue.
    title.style.background = "white";
    title.style.color = "CornflowerBlue";
    title.textContent = "Welcome to my flower shop";
    //Change the text of the button from ‘learn more’ to ‘buy flowers’, change the background color to red.
    more.style.backgroundColor = "red";
    more.textContent = "buy flowers"
});
