$(document).scroll(function() {
	$(".project-image").css({"height": $(window).scrollTop() + 400});
    $(".project-bg-text").css({"opacity": 1 - $(window).scrollTop() / 500});
});