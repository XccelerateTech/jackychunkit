
//appear About Me and vanishing the welcome page
$('.cta').click(function () {
	$('#splashscreen').fadeOut(500);
	$('#about, #sidebartitle').fadeIn(1000);
});

//appear the about page
$(".toabout").click(function () {
	$(".content").hide();
	$("#about").fadeIn(1000);
});

//appear the hobbies page
$(".tohobbies").click(function () {
	$(".content").hide();
	$("#hobbies").fadeIn(1000);
});

//appear the albums page
$(".tophotos").click(function () {
	$(".content").hide();
	$("#albums, #albumsp").fadeIn(1000);
});

//appear the project page
$(".toprojects").click(function () {
	$(".content").hide();
	$("#project").fadeIn(1000);
});

//appear the contact page
$(".tocontact").click(function () {
	$(".content").hide();
	$("#contact").fadeIn(1000);
});

//nav to US album 
$(".to-US-album").click(function () {
	$(".content, .slider-inner, .slider-title").hide();
	$("#albums, #album_container, #us-slider, #us-title").fadeIn(1000, function () {
	});
	$("#albumsp").hide()
});

//nav to EU album
$(".to-EU-album").click(function () {
	$(".content, .slider-inner, .slider-title").hide();
	$("#albums, #album_container, #eu-slider, #eu-title").fadeIn(1000, function () {
	});
	$("#albumsp").hide()
});

//nav to PET album
$(".to-PET-album").click(function () {
	$(".content, .slider-inner, .slider-title").hide();
	$("#albums, #album_container, #pet-slider, #pet-title").fadeIn(1000, function () {
	});
	$("#albumsp").hide()
});

//nav to Star album
$(".to-STAR-album").click(function () {
	$(".content, .slider-inner, .slider-title").hide();
	$("#albums, #album_container, #star-slider, #star-title").fadeIn(1000, function () {
	});
	$("#albumsp").hide()
});

//return to the album inside slideshow
$("#return-to-album").click(function () {
	$(".content").hide();
	$("#albums, #albumsp").fadeIn(1000);
});

