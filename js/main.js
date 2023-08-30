$(document).ready(function(){
  $('.bxslider').bxSlider({
  	adaptiveHeight: false,
  	auto: true,
  	pager: false,
  	infiniteLoop: true,
  	controls: false,
  	mode: "fade"
  });
  
  $('.toform').click(function () {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 300
        }, 2000);
        return false;
    });
});