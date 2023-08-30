var slider;

var sliderBg = function(root) {
  var me = this;
  me.root = $(root);

  var _init = function(element) {

    var items   = element.find(".js-bg"),
    itemsLen  = items.length,
    itemCount   = 0;

    items.eq(0).siblings(".js-bg").css({display: 'none'});
    function anim() {
      itemCount++;
      if(itemCount == itemsLen ) {
        itemCount = 0;
      }
      items.eq(itemCount).stop(true,true).fadeIn(300).siblings(".js-bg").fadeOut(0);
    }

    setInterval(anim, 5000);

  }

  me.root.each(function(){
    new _init( $(this) );
  });
}

$(document).ready(function(){
  new sliderBg(".js-bg-slider");

  $('.toform').on('touchend, click', function(e){
    e.preventDefault();
    var a = $('.js_submit'),b=a.closest('form');
    if(b.length&&a.is(':visible')){
      $("html,body").animate({scrollTop: b.offset().top}, 1000);
    }else{
      $('.body').remove();
      $('.hidden-window').fadeIn();
      $('html, body').animate({scrollTop: 0 }, 300);
      slider = $('.bx-bx').bxSlider({               
        pagerCustom: '#bx-pager',             
        adaptiveHeight: true,
        touchEnabled: true,                                   
        onSlideBefore : function($slideElement, oldIndex, newIndex){
          var ValOptionChg = $slideElement.attr('data-value');
          if(typeof set_package_prices == 'function'){
            set_package_prices(ValOptionChg);
          }
          $("select[name='count_select'] option[value='"+ValOptionChg+"']").prop("selected", true);
        }
      });
      slider.goToSlide(1);
    }
    return false;
  });
  $('.corbselect, .change-package-selector').on('change', function(){
    slider.goToSlide($(this).find('option:selected').attr('data-slide-index'));
  });
});
