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
