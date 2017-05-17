
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


$('section.reason .grid-item').click(function() {
	var clickedClass = $(this).attr('class');
	var number = clickedClass.replace( /^\D+/g, '');
	var reasonClass = 'section.reason-'+number;
	$(reasonClass).show();
	$(reasonClass).css({
		'background': 'rgba(255, 255, 255, 0.9)',
		'position': 'fixed',
		'top': 0,
		'right': 0,
		'bottom': 0,
		'left': 0,
		'margin': 0,
		'height': '100vh',
		'padding-top': '8%'
	});
	$(reasonClass).addClass('active');
});


$('.closebutton').click(function() {
	$('section.active').hide();
	$('section.active').removeClass('active');
});