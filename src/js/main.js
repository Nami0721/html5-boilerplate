var toggleSlide = function(){
  $(".product .left img.active").removeClass()
   .next().add(".product .left img:first").last().addClass("active");
}
setInterval(toggleSlide, 5000);