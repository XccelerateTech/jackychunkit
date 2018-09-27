
		//PET album slideshow
	  $('.next').click(function(){
			var currentImg = $('.active');
			var nextImg = currentImg.next();
	
			if(nextImg.length){
				currentImg.removeClass('active').css('z-index', -10);
				nextImg.addClass('active').css('z-index', 10);
			}	else {
				currentImg.removeClass('active').css('z-index', -10);
				$("#firstimage").addClass('active').css('z-index', 10);
			}
		})
