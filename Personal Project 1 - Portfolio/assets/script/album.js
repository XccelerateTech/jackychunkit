//determine which album is being clicked on and add active class to the album for slideshow
$('.to-US-album').on('click', function () {
	$('#us-slider img:first-child').addClass('active-album-img first-album-img')
	$('#us-slider img:last-child').addClass('last-album-img')
})

$('.to-EU-album').on('click', function () {
	$('#eu-slider img:first-child').addClass('active-album-img first-album-img')
	$('#eu-slider img:last-child').addClass('last-album-img')
})

$('.to-PET-album').on('click', function () {
	$('#pet-slider img:first-child').addClass('active-album-img first-album-img')
	$('#pet-slider img:last-child').addClass('last-album-img')
})

$('.to-STAR-album').on('click', function () {
	$('#star-slider img:first-child').addClass('active-album-img first-album-img')
	$('#star-slider img:last-child').addClass('last-album-img')
})

//remove all 'active' classes from albums when returning
$('#return-to-album, .toabout, .tohobbies, .tophotos, .toproject, .tocontact').on('click', function () {
	$("#album_container").hide();
	$('.slider-inner').children().removeClass('first-album-img active-album-img last-album-img')
})

//album slideshow
$('.next').on('click', function () {
	var currentImg = $('.active-album-img');
	var nextImg = currentImg.next();

	if (!nextImg.length) {
		nextImg = $(".first-album-img")
	}
	nextImg.addClass('active-album-img')
	currentImg.css({
		"zIndex": "2"
	}).fadeOut({
		queue: false, duration: 1000
	}).animate({
		'padding-top': "520px"
	}, 1000, function () {
		currentImg.css({
			"padding-top": "0",
			"zIndex": "0"
		}).removeClass('active-album-img')
	})
});

$('.prev').on('click', function () {
	var currentImg = $('.active-album-img');
	var prevImg = currentImg.prev();

	if (!prevImg.length) {
		prevImg = $(".last-album-img")
	}
	prevImg.addClass('active-album-img').css({
		"zIndex": "2",
		"padding-top": "520px"
	}).fadeIn({
		queue: false, duration: 1000
	}).animate({
		'padding-top': "0",
		"zIndex": "0"
	}, 1000, function () {
		currentImg.removeClass('active-album-img')
	})
});