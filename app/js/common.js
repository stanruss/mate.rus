$(document).ready(function() {
	 $(".button-collapse").sideNav();
     $('.parallax').parallax();
});
 $(window).scroll(function () {

        if ($(this).scrollTop() > 90) {
            $('#top-menu').addClass('navbar-fixed');
        } else {
            $('#top-menu').removeClass('navbar-fixed');
        }

        });