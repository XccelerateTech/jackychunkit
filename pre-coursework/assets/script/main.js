//pops up and close the sidebar
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("about").style.marginLeft = "250px";
	document.getElementById("hobbies").style.marginLeft = "250px";
	document.getElementById("albums").style.marginLeft = "250px";
	document.getElementById("contact").style.marginLeft = "250px";
	document.getElementById("sidebartitle").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("about").style.marginLeft = "0";
	document.getElementById("hobbies").style.marginLeft = "0";
	document.getElementById("albums").style.marginLeft = "0";
	document.getElementById("contact").style.marginLeft = "0";
	document.getElementById("sidebartitle").style.marginLeft = "0";
}

/*

Normal Functions stays up top

JQuery Function goes below

*/

$(document).ready(function(){
	//appear About Me and vanishing the welcome page
	$('.cta').click(function () {
		$('#splashscreen').fadeOut(500);
	});
	$('.cta').click(function() {
		$( '#about, #sidebartitle' ).fadeIn( 3000 , function() {
	  });
	});

	//appear the about page
	$("#toabout").click(function(){
		$("#about").fadeIn( 1000 , function() {
	  });
	});
	$("#toabout").click(function(){
		$("#hobbies, #albums, #contact").hide();
	});

	//appear the hobbies page
	$("#tohobbies").click(function(){
		$("#hobbies").fadeIn( 1000 , function() {
	  });
	});
	$("#tohobbies").click(function(){
		$("#about, #albums, #contact").hide();
	});

	$("#mainpagePicToHobbies").bind('click', function(){
		 $("#hobbies").fadeIn( 1000 , function() {
	  });
	});
	$("#mainpagePicToHobbies").bind('click', function(){
		 $("#about, #albums, #contact").hide();
	});

	//appear the albums page
	$("#tophotos").click(function(){
		$("#albums, #albumsp").fadeIn( 1000 , function() {
	  });
	});
	$("#tophotos").click(function(){
		$("#about, #hobbies, #contact, #album_container").hide();
	});

	$("#mainpagePicToAlbum").bind('click', function(){
		 $("#albums").fadeIn( 1000 , function() {
	  });
	});
	$("#mainpagePicToAlbum").bind('click', function(){
		 $("#about, #hobbies, #contact").hide();
	});

	//nav to US album 
	$(".to-US-album").click(function(){
		$("#albums, #album_container, .us-slider-outer").fadeIn( 1000 , function() {
	  });
	});
	$(".to-US-album").click(function(){
		$("#hobbies, #albumsp, .pet-slider-outer, .star-slider-outer, .eu-slider-outer").hide();
	});
	
	//nav to PET album
	$(".to-EU-album").click(function(){
		$("#album_container, .eu-slider-outer").fadeIn( 1000 , function() {
	  });
	});
	$(".to-EU-album").click(function(){
		$("#albumsp, .us-slider-outer, .star-slider-outer, .pet-slider-outer").hide();
	});

	//nav to PET album
	$(".to-PET-album").click(function(){
		$("#album_container, .pet-slider-outer").fadeIn( 1000 , function() {
	  });
	});
	$(".to-PET-album").click(function(){
		$("#albumsp, .us-slider-outer, .star-slider-outer, .eu-slider-outer").hide();
	});

	//nav to Star album
	$(".to-STAR-album").click(function(){
		$("#albums, #album_container, .star-slider-outer").fadeIn( 1000 , function() {
	  });
	});
	$(".to-STAR-album").click(function(){
		$("#hobbies, #albumsp, .us-slider-outer, .pet-slider-outer, .eu-slider-outer").hide();
	});
	
	//return to album mainpage
	$(".return-to-album").click(function(){
		$("#albumsp").fadeIn( 1000 , function() {
	  });
	});
	$(".return-to-album").click(function(){
		$("#album_container").hide();
	});

	//UStrip album slideshow
	$(document).ready(function(){
	  $('#us_next').on('click', function(){
		var currentImg = $('.us_active');
		var nextImg = currentImg.next();

		if(nextImg.length){
		  currentImg.removeClass('us_active').css('z-index', -10);
		  nextImg.addClass('us_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('us_active').css('z-index', -10);
			$("#us_firstimage").addClass('us_active').css('z-index', 10);
		}
	  });

	  $('#us_prev').on('click', function(){
		var currentImg = $('.us_active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
		  currentImg.removeClass('us_active').css('z-index', -10);
		  prevImg.addClass('us_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('us_active').css('z-index', -10);
			$("#us_lastimage").addClass('us_active').css('z-index', 10);
		}
	  });
	});
	
	//EUtrip album slideshow
	$(document).ready(function(){
	  $('#eu_next').on('click', function(){
		var currentImg = $('.eu_active');
		var nextImg = currentImg.next();

		if(nextImg.length){
		  currentImg.removeClass('eu_active').css('z-index', -10);
		  nextImg.addClass('eu_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('eu_active').css('z-index', -10);
			$("#eu_firstimage").addClass('eu_active').css('z-index', 10);
		}
	  });

	  $('#eu_prev').on('click', function(){
		var currentImg = $('.eu_active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
		  currentImg.removeClass('eu_active').css('z-index', -10);
		  prevImg.addClass('eu_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('eu_active').css('z-index', -10);
			$("#eu_lastimage").addClass('eu_active').css('z-index', 10);
		}
	  });
	});

	//PET album slideshow
	$(document).ready(function(){
	  $('#pet_next').on('click', function(){
		var currentImg = $('.pet_active');
		var nextImg = currentImg.next();

		if(nextImg.length){
		  currentImg.removeClass('pet_active').css('z-index', -10);
		  nextImg.addClass('pet_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('pet_active').css('z-index', -10);
			$("#pet_firstimage").addClass('pet_active').css('z-index', 10);
		}
	  });

	  $('#pet_prev').on('click', function(){
		var currentImg = $('.pet_active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
		  currentImg.removeClass('pet_active').css('z-index', -10);
		  prevImg.addClass('pet_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('pet_active').css('z-index', -10);
			$("#pet_lastimage").addClass('pet_active').css('z-index', 10);
		}
	  });
	});

	//Star album slideshow
	$(document).ready(function(){
	  $('#star_next').on('click', function(){
		var currentImg = $('.star_active');
		var nextImg = currentImg.next();

		if(nextImg.length){
		  currentImg.removeClass('star_active').css('z-index', -10);
		  nextImg.addClass('star_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('star_active').css('z-index', -10);
			$("#star_firstimage").addClass('star_active').css('z-index', 10);
		}
	  });

	  $('#star_prev').on('click', function(){
		var currentImg = $('.star_active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
		  currentImg.removeClass('star_active').css('z-index', -10);
		  prevImg.addClass('star_active').css('z-index', 10);
		}	else {
			currentImg.removeClass('star_active').css('z-index', -10);
			$("#star_lastimage").addClass('star_active').css('z-index', 10);
		}
	  });
	});
	
	//appear the contact page
	$("#tocontact").click(function(){
		$("#contact").fadeIn( 1000 , function() {
	  });
	});
	$("#tocontact").click(function(){
		  $("#about, #albums, #hobbies").hide();
	});

	//play animation for albumicon on hover
	$(document).ready(function(){
		$("#iconimg2").hover(
			function()
			{
				$(this).attr("src", "assets/images/about page image/album icon.gif");
			},
			function()
			{
				$(this).attr("src", "assets/images/about page image/album icon_static.jpg");
			});
	});
});