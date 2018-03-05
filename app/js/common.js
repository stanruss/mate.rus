$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy({
		scrollOffset: 20,

	});
	$('.modal').modal({
		dismissible: false,
	});
	
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
$(" .video-promo h2, .video-promo p").animated("zoomIn");
$(" .video-promo a").animated("fadeInUp");

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
$(document).ready(function() {
	var show = true;
	var countbox = ".benefits__inner";
	$(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        	$('.benefits__number').css('opacity', '1');
        	$('.benefits__number').spincrement({
        		thousandSeparator: "",
        		duration: 1200
        	});

        	show = false;
        }
      });
});