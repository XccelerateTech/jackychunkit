## A Readme for Jacky's Page 
### Version 1.0

---
Table of contents

* Introduction
* Features
* Installation
* Reference & Credit
* Support

---

#### Introduction
This is a webpage created by Jacky, contents mainly include personal informations and some photos.

---

#### Features

- a sidebar is included using the following code.

```
function openNav() {
document.getElementById().style.width = "250px";
}
fuction closeNav() {
document.getElementById().style.width = "0";
}
```

- photo album slideshow includes the following jqeury code to operate.
- elements id or class has _us__ , _eu__ , _pet__ and _star__ before their name for depicting 4 different albums

```
$(document).ready(function(){
    $('button').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
    if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
        } else {
        currentImg.removeClass('active').css('z-index', -10);
        $("firstimage").addClass('active').css('z-index', 10);
        }
});
``` 

- navigation within the webpage mainly uses the **fadeIn** and and **hide** fuctions to keep everything in a single webpage

```
$("trigger").click(function(){
    $("element-to-show").fadeIn( 1000 , function() {
    });
});
$("trigger").click(function(){
    $("element-to-hide").hide();
});
```

---

#### Installation

Installation is not required. The pre-installed jquery document has already been situated at _assets/script_.

---

#### Reference & Credit

The welcome page **Enter Button** was a work from [Code My UI](codemyui.com)

The album slideshow script was inspired by [Taversy Media on YouTube](https://www.youtube.com/user/TechGuyWeb)

---

#### Support

For any glitches encountered or implementation should be added, please contact Jacky via email on <jackykit19970402@gmail.com>.