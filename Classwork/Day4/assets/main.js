$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
            $('.navbar').stop();
            $('.header-link').stop();
            $('.navbar-brand').stop();
            $('.navbar').animate({
                backgroundColor: "rgba(255,255,255,1)",
            }, 300 );
            $('.header-link').animate({
                color: "black",
            }, 300 );
            $('.navbar-brand').animate({
                color: "#F05F40",
                fontSize: "20px"
            }, 50 );
        } else if ($(document).scrollTop() < 100)  { //if the scrollbar is less than 50 px from the top it goes back to transparency 
            $('.navbar').stop();
            $('.header-link').stop();
            $('.navbar-brand').stop();
            $('.navbar').animate({
                backgroundColor: "rgba(255,255,255,0)",
            }, 300 );
            $('.header-link').animate({
                color: "#CBC8C7",
            }, 300 );
            $('.navbar-brand').animate({
                color: "#CBC8C7",
                fontSize: "22px"
            }, 50 );
        }
    });
  });

  $(document).ready(function(){
      $( window ).on( "load", function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
        if (position < -100 && $( window ).width() < 992) {
            $('.navbar').stop();
            $('.header-link').stop();
            $('.navbar-brand').stop();
            $('.navbar').animate({
                backgroundColor: "rgba(255,255,255,1)",
            }, 300 );
            $('.header-link').animate({
                color: "black",
            }, 300 );
            $('.navbar-brand').animate({
                color: "#F05F40",
                fontSize: "20px"
            }, 50 );
      }
    });
    });  


    $(document).ready(function () {
        $(window).scroll(function () { // check if scroll event happened
            var aboutposition =  $( "#about" ).position().top - $(window).scrollTop();
            var servicesposition = $( "#services" ).position().top - $(window).scrollTop();
            var portfolioposition = $( "#portfolio" ).position().top - $(window).scrollTop();
            var contactposition = $( "#contact" ).position().top - $(window).scrollTop();
            if (aboutposition <= 50 && servicesposition > 50) {
                $('#to-about').stop();
                $('#to-about').css({
                    color: "#F05F40",
                }); 

            } else if (aboutposition <= 50 && servicesposition > 50) {
                $('#to-about').stop();
                $('#to-about').css({
                    color: "black",
                }); 
            }
            if (servicesposition <= 50 && portfolioposition > 50) {
                $('#to-services').stop();
                $('#to-services').css({
                    color: "#F05F40",
                }); 

            } else if (aboutposition <= 50 && !(servicesposition <= 50 && portfolioposition > 50)) {
                $('#to-services').stop();
                $('#to-services').css({
                    color: "black",
                }); 
            }
            var scrollHeight = $(document).height();
	        var scrollPosition = $(window).height() + $(window).scrollTop();
            if (portfolioposition <= 50 && contactposition > 50 && !(scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('#to-portfolio').stop();
                $('#to-portfolio').css({
                    color: "#F05F40",
                }); 

            } else if (aboutposition <= 50 && !(portfolioposition <= 50 && contactposition > 50 && !(scrollHeight - scrollPosition) / scrollHeight === 0)) {
                $('#to-portfolio').stop();
                $('#to-portfolio').css({
                    color: "black",
                }); 
            }
            if (contactposition <= 50 || (scrollHeight - scrollPosition) / scrollHeight === 0)  {
                $('#to-contact').stop();
                $('#to-contact').css({
                    color: "#F05F40",
                }); 

            } else if (aboutposition <= 50 && !(contactposition <= 50 || (scrollHeight - scrollPosition) / scrollHeight === 0)){
                $('#to-contact').stop();
                $('#to-contact').css({
                    color: "black",
                }); 
            }
        });
      });

      $(".navbar-toggler-icon-active").on('click', (function() { 
        $('.navbar-toggler-icon-inactive').css({
            display: "block",
        })
        $('.navbar-toggler-icon-active').css({
            display: "none",
        })
      }))


 $("#button-one").on('click', (function() { 
var position = $("#about").offset().top; 
$("html, body").animate({ scrollTop: position }, 1000); 
}));

$("#button-three").on('click', (function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
}));

$("#to-page-top").on('mouseover', (function() {
    var position = $( "#page-top" ).position().top - $(window).scrollTop();
        if (position > -100 && $( window ).width() < 992) { 
    $('#to-page-top').animate({
        color: "white",
    }, 100 ); } 
}));
$("#to-page-top").on('mouseout', (function() {
    var position = $( "#page-top" ).position().top - $(window).scrollTop();
        if (position > -100 && $( window ).width() < 992) { 
    $('#to-page-top').animate({
        color: "#CBC8C7",
    }, 100 ); } 
}));

$("#to-page-top").on('click', (function() { 
    var position = $("#page-top").offset().top; 
    $("html, body").animate({ scrollTop: position }, 1000); 
    }));


    
$("#to-about").on('click', (function() { 
    var position = $("#about").offset().top; 
    $("html, body").animate({ scrollTop: position }, 1000); 
    }));
    $("#to-about").on('mouseover', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-about').animate({
            color: "white",
        }, 100 ); } else {
            $('#to-about').animate({
                color: "#F05F40",
            }, 100 ); 
        }
    }));
    $("#to-about").on('mouseout', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-about').animate({
            color: "#CBC8C7",
        }, 100 ); } else {
            $('#to-about').animate({
                color: "black",
            }, 100 ); 
        }
    }));

$("#to-services").on('click', (function() { 
    var position = $("#services").offset().top; 
    $("html, body").animate({ scrollTop: position }, 1000); 
    }));
    $("#to-services").on('mouseover', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-services').animate({
            color: "white",
        }, 100 ); } else {
            $('#to-services').animate({
                color: "#F05F40",
            }, 100 ); 
        }
    }));
    $("#to-services").on('mouseout', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-services').animate({
            color: "#CBC8C7",
        }, 100 ); } else {
            $('#to-services').animate({
                color: "black",
            }, 100 ); 
        }
    }));

$("#to-portfolio").on('click', (function() { 
    var position = $("#portfolio").offset().top; 
    $("html, body").animate({ scrollTop: position }, 1000); 
    }));
    $("#to-portfolio").on('mouseover', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-portfolio').animate({
            color: "white",
        }, 100 ); } else {
            $('#to-portfolio').animate({
                color: "#F05F40",
            }, 100 ); 
        }
    }));
    $("#to-portfolio").on('mouseout', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-portfolio').animate({
            color: "#CBC8C7",
        }, 100 ); } else {
            $('#to-portfolio').animate({
                color: "black",
            }, 100 ); 
        }
    }));

$("#to-contact").on('click', (function() { 
    var position = $("#contact").offset().top; 
    $("html, body").animate({ scrollTop: position }, 1000); 
    }));
    $("#to-contact").on('mouseover', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-contact').animate({
            color: "white",
        }, 100 ); } else {
            $('#to-contact').animate({
                color: "#F05F40",
            }, 100 ); 
        }
    }));
    $("#to-contact").on('mouseout', (function() {
        var position = $( "#page-top" ).position().top - $(window).scrollTop();
            if (position > -100 && $( window ).width() > 992) { 
        $('#to-contact').animate({
            color: "#CBC8C7",
        }, 100 ); } else {
            $('#to-contact').animate({
                color: "black",
            }, 100 ); 
        }
    }));
