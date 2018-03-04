$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
});
$(window).scroll(function () {

	if ($(this).scrollTop() > 130) {
		$('#top-menu').addClass('navbar-fixed');
	} else {
		$('#top-menu').removeClass('navbar-fixed');
	}

});

$(window).scroll(function () {
if ($(this).scrollTop() > 130) {
	$('nav').addClass('animated fadeInDown');
	} else {
$('nav').removeClass('animated fadeInDown');
}

});
$(window).load(function() {

$(" .services-boxes .one ").animated("fadeInUp ");
$(" .services-boxes .two ").animated("fadeInUp ");
$(" .services-boxes .three ").animated("fadeInUp ");

});

$(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    onMixEnd: filterList.hoverEffect()
                });             
            },
            hoverEffect: function () {
                $('#portfoliolist .portfolio').hover(
                    function () {
                        $(this).find('.label-bg').stop().animate({opacity: 0.7}, 200, 'easeOutQuad');
                        // $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                    },
                    function () {
                        $(this).find('.label-bg').stop().animate({opacity: 0}, 200, 'easeInQuad');
                        // $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                    }       
                );              
            
            }

        };
        filterList.init();  
    }); 
baguetteBox.run('.gallery');
$(window).on('resize', function(event) {
  $('.portfolio').jQueryEqualHeight();
});
$(window).on('load', function(event) {
  $('.portfolio').jQueryEqualHeight();
});
