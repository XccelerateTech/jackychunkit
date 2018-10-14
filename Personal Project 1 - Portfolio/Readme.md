# A Readme for Jacky's Page 
## Version 1.1.0

---
Table of contents

* Introduction
* What's New
* Change Log
* ToDo
* Reference & Credit
* Support

---

### Introduction
This is a webpage created by Jacky, contents mainly include personal informations and some photos.

---

### What's New

- Edited site to be mobile friendly
- repeated code is minimized, length of most original code has been reduced twice even threefold
- seperated multiple .js and .css for better file and code structure organizing
- The code for the sidebar has changed in order to cope with mobile user so that sidebar appears from top if in a mobile device
- overlay is added to cover the content when the sidebar opens

```
if ($(window).width() > 700) {
    //left sidebar opens
} else {
    //top sidebar opens
}
```

- particle.js library is used to add stars effect within in page
- background image changed
- code for navigation is now more compact

```
$("trigger").click(function(){
    $("element-to-show").fadeIn( 1000 , function() {
    $("element-to-hide").hide();
    });
});
```
- mouse trail is added
- typewrite is added to the welcoming page for better effect
- buttons now show animate when hover using library by git user code-fx

---

### Change Log

----
#### first version

##### v1.0.0

sidebar uses code of
```
function openNav() {
document.getElementById().style.width = "250px";
}
fuction closeNav() {
document.getElementById().style.width = "0";
}
```

- elements used _us__ , _eu__ , _pet__ and _star__ ID instead of classes


---

### Todo

[x] Enhance the album slideshow to be animated

[x] Edit the album making it resize according to window size

[ ] To be added

---

### Reference & Credit

The welcome page **Enter Button** was a work from [Code My UI](codemyui.com)

Library for the animated button borders is from [code-fx on github](https://github.com/code-fx/Pure-CSS3-Animated-Border)

Library for particle js https://vincentgarreau.com/particles.js/

The album slideshow script was inspired by [Taversy Media on YouTube](https://www.youtube.com/user/TechGuyWeb)

---

### Support

For any glitches encountered or implementation should be added, please contact Jacky via email on <jackykit19970402@gmail.com>.