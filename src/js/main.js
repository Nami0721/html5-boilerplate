
var headerHeight = null;
var documentHeight = null;
var windowWidth = null;
var windowHeight= null;
var isMobileMenu = false;

var toggleSlide = function(){
  $(".product .left img.active").removeClass()
   .next().add(".product .left img:first").last().addClass("active");
}
setInterval(toggleSlide, 2500);

$("#buttonTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

headerHeight = $('header').height();

$(window).scroll(function() {

	console.log('scroll')

	/*Fixed/Static Navigation*/
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > headerHeight) {
		$('nav').css({
			'position': 'fixed'
		});
	} else {
		$('nav').css({
			'position': 'absolute'
		});
	}

});