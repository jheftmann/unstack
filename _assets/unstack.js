(function ( $ ) {

    unstack = function(options) {

      var settings = $.extend({
            objectClass: '.js-unstack',
            reStackObject: '.js-unstack-restack',
            layout: 'body'
        }, options );

      if ($('body').length) {
        $('html, body').scrollTop(0);

        var objs = $(settings.objectClass);

        // set min height of layout based on number of moduleOffset
        var layoutHeight = function() {
          var moduleCount = objs.length;
          // console.log("moduleCount: " + moduleCount);
          var layoutHeight = ((objs.length + 1) * 100) + "vh";
          // console.log("layoutHeight: " + layoutHeight);
          $('body').css('min-height', layoutHeight);
        }
        layoutHeight();

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
        $(objs).first().addClass('js-unstack-first');

        // scroll out content modules
        var obj = undefined;

        var calc = function(newObj) {
          obj = newObj;
          $(obj).addClass('is-released');
          var id = $(obj).attr('id');
        }

        obj = $('.js-unstack-first');
        calc(obj);

        var positionModules = function() {
          var objTop = $(obj).offset().top;
          var objHeight = $(obj).outerHeight(false);
          var objBtm = objTop + objHeight;
          var windowHeight = window.innerHeight || $(window).height();
          var top = $(window).scrollTop();
          var windowBtm = top + windowHeight;
          var windowTop = 0;

          if (top > objBtm) {
            var nextObj = $(obj).next(settings.objectClass);
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

        }

        $(settings.reStackObject).click(function() {
          event.preventDefault();
          $('body, html').animate({
            scrollTop : 0
          }, 500);
        });

        $(window).scroll( function(){
          positionModules();
        });

      }
    };

}( jQuery ));
