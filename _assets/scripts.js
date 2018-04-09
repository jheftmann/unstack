

// /* Masonry
//  *  - - - - - - - - - - - - - - - - */
// var setupMasonry = function() {
//   var $container = $('.js-masonry');
//   if ($container.length) {
//     $container.masonry({
//       itemSelector: '.js-masonry-select',
//       columnWidth: 1,
//     });
//   }
// }
//
// /* Page Load
//  *  - - - - - - - - - - - - - - - - */
// $(window).load(function() {
//   Stencil.verticalAlign();
//   $("body").removeClass("preload");
//   setupMasonry();
// });
//
// /* Page Resize
//  *  - - - - - - - - - - - - - - - - */
//
// $(window).resize(function() {
//   Stencil.verticalAlign();
//   setupMasonry();
// });

/* Page Ready
 *  - - - - - - - - - - - - - - - - */
$(document).ready(function() {
  console.log('unstack');

  if ($('body').length) {
    $('html, body').scrollTop(0);

    var objs = $('.js-unstack');

    // set min height of layout based on number of moduleOffset
    var layoutHeight = function() {
      var moduleCount = objs.length;
      // console.log("moduleCount: " + moduleCount);
      var layoutHeight = ((objs.length + 1) * 100) + "vh";
      // console.log("layoutHeight: " + layoutHeight);
      $('body').css('min-height', layoutHeight);
    }

    layoutHeight();

    // offset position of modules
    var moduleOffset = function() {
      var cmTotalHeight = 0;
      var windowHeight = window.innerHeight || $(window).height();
      var navWidth = $('.side-nav').width();

      // horizontal
      $('.js-unstack').each(function(){

        console.log("leftOffset" + leftOffset);
        console.log("leftRand" + leftRand);

        var leftOffset = 0;

        if ($(window).width() < 1024) {
          leftMax = 100 - 70;
          if ($(window).width() < 500) {
            var leftMax = 100 - 90;
          } else if ($(window).width() < 600) {
            var leftMax = 100 - 80;
          }
          leftOffset = Math.floor(Math.random() * leftMax) + '%';
        } else {
          var leftMax = navWidth;
          var leftRand = Math.ceil(Math.random() * leftMax);
          leftOffset = -($(this).width() / 2) + leftRand;
        }

        $(this).css({
          marginLeft: leftOffset
        });

        var topMin = 100;
        var topMax = windowHeight * 0.2;
        var topRange = Math.floor(Math.random() * topMax) + topMin;

        $(this).css({
          paddingTop: topRange
        });

        $(this).attr('data-offset', cmTotalHeight + parseInt($(this).css('padding-top')));

        var height = $(this).outerHeight(false);
        $(this).attr('data-height', height);
        cmTotalHeight = cmTotalHeight + height;

        var bodyHeight = cmTotalHeight;
        $('body').css('min-height', bodyHeight);
      });
    }

    var windowWidth = $(window).width();
    $(window).resize(function() {
      var currentWindowWidth = $(window).width();
      if (windowWidth != currentWindowWidth) {
        windowWidth = currentWindowWidth;
        moduleOffset();
      }
    });

    // auto-add z-index
    var zIndex = function(){
      $(objs).each(function(i){
        var z = 100 + (-i);
        $(this).css('z-index', z);

        console.log('z' + z);
      });
    }

    zIndex();

    // automatically give first in stack a class
    $(objs).first().addClass('js-unstack-top');

    // scroll out content modules
    var obj = undefined;

    var calc = function(newObj) {
      obj = newObj;
      $(obj).addClass('is-released');
      var id = $(obj).attr('id');
      // $link = $('.side-nav a[href=#' + id + ']');
      // if ($link.length) {
      //   $('.side-nav a').removeClass('is-active');
      //   $link.addClass('is-active');
      // }
    }

    obj = $('.js-unstack-top');
    calc(obj);

    var signup = undefined;

    var positionModules = function() {
      var objTop = $(obj).offset().top;
      var objHeight = $(obj).outerHeight(false);
      var objBtm = objTop + objHeight;
      var windowHeight = window.innerHeight || $(window).height();
      var top = $(window).scrollTop();
      var windowBtm = top + windowHeight;
      var windowTop = 0;


      if (top > objBtm) {
        var nextObj = $(obj).next('.js-unstack');
        if (nextObj.length) {
          calc(nextObj);
        }
      }

      if (top < objTop) {
        var prevObj = $(obj).prev();
        if (prevObj.length) {
          $(obj).removeClass('is-released');
          calc(prevObj);
        }
      }

      // if(top + windowHeight >= $(document).height() - 10) {
      //   signup.trigger();
      //   $('body').addClass('reached-bottom');
      // } else {
      //   $('body').removeClass('reached-bottom');
      // }
    }

    $(window).scroll( function(){
      positionModules();
    });

    // $('.side-nav a').click(function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   var target = $(this).attr('href');
    //   var offset = parseInt($(target).attr('data-offset')) - $('.nav').height();
    //   console.log(offset);
    //   $('html, body').animate({
    //     scrollTop: offset
    //   }, 600, 'easeOutQuad');
    // });

    // $(window).on("load", function() {
    //   moduleOffset();
    //   signup = new freezeframe('#signup-image').capture().setup();
    //   window.setTimeout(function() {
    //     $('html, body').scrollTop(0);
    //   }, 100);
    // });
  }
});
