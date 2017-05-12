var toggleSlide = function(){
  $(".product .left img.active").removeClass()
   .next().add(".product .left img:first").last().addClass("active");
}
setInterval(toggleSlide, 2500);


$("#buttonTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});