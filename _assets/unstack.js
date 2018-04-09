// /* v0
//  *
//  * Include vendor and third party scripts
//  *= require _lib/console/console
//  *= require _lib/bootstrap/bootstrap
//  *= require _lib/lazysizes/lazysizes
//  *= require _lib/stencil/stencil
//  *= require _lib/v0.screensizeCheck
//  *= require _lib/freezeframe/freezeframe.pkgd
//  *= require _lib/easing/jquery.easing.1.3
//  *= require _lib/easing/jquery.easing.compatibility
//  *= require _lib/masonry/masonry.min
//  *  - - - - - - - - - - - - - - - - */
//
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
//
// /* Page Ready
//  *  - - - - - - - - - - - - - - - - */
// $(document).ready(function() {
//   setupMasonry();
//
//   // Set active nav element
//   $('.nav-menu a').each(function() {
//     var href = $(this).attr('href');
//     if (href == window.location.pathname) {
//       $(this).addClass('is-active');
//     }
//   });
//
//   if ($('#index').length) {
//     $('html, body').scrollTop(0);
//
//     screensizeCheck(480, 768, 1200, 1400, 1600);
//
//     var objs = $('.content-module-index');
//     //offset position of modules
//     var moduleOffset = function() {
//       var cmTotalHeight = 0;
//       var windowHeight = window.innerHeight || $(window).height();
//       var navWidth = $('.side-nav').width();
//
//       // horiztonal
//       $('.content-module-index').each(function(){
//
//         //console.log("leftOffset" + leftOffset);
//         //console.log("leftRand" + leftRand);
//
//         var leftOffset = 0;
//
//         if ($(window).width() < 1024) {
//           leftMax = 100 - 70;
//           if ($(window).width() < 500) {
//             var leftMax = 100 - 90;
//           } else if ($(window).width() < 600) {
//             var leftMax = 100 - 80;
//           }
//           leftOffset = Math.floor(Math.random() * leftMax) + '%';
//         } else {
//           var leftMax = navWidth;
//           var leftRand = Math.ceil(Math.random() * leftMax);
//           leftOffset = -($(this).width() / 2) + leftRand;
//         }
//
//         $(this).css({
//           marginLeft: leftOffset
//         });
//
//         var topMin = 100;
//         var topMax = windowHeight * 0.2;
//         var topRange = Math.floor(Math.random() * topMax) + topMin;
//
//         $(this).css({
//           paddingTop: topRange
//         });
//
//         $(this).attr('data-offset', cmTotalHeight + parseInt($(this).css('padding-top')));
//
//         var height = $(this).outerHeight(false);
//         $(this).attr('data-height', height);
//         cmTotalHeight = cmTotalHeight + height;
//
//         var bodyHeight = cmTotalHeight;
//         $('body').css('min-height', bodyHeight);
//       });
//     }
//
//     var windowWidth = $(window).width();
//     $(window).resize(function() {
//       var currentWindowWidth = $(window).width();
//       if (windowWidth != currentWindowWidth) {
//         windowWidth = currentWindowWidth;
//         moduleOffset();
//       }
//     });
//
//     // auto-add z-index
//     var zIndex = function(){
//       $(objs).each(function(i){
//         var z = 100 + (-i);
//         $(this).css('z-index', z);
//
//         //console.log('z' + z);
//       });
//     }
//
//     zIndex();
//
//     // scroll out content modules
//     var obj = undefined;
//
//     var calc = function(newObj) {
//       obj = newObj;
//       $(obj).addClass('is-released');
//       var id = $(obj).attr('id');
//       $link = $('.side-nav a[href=#' + id + ']');
//       if ($link.length) {
//         $('.side-nav a').removeClass('is-active');
//         $link.addClass('is-active');
//       }
//     }
//
//     obj = $('#what');
//     calc(obj);
//
//     var signup = undefined;
//
//     var positionModules = function() {
//       var objTop = $(obj).offset().top;
//       var objHeight = $(obj).outerHeight(false);
//       var objBtm = objTop + objHeight;
//       var windowHeight = window.innerHeight || $(window).height();
//       var top = $(window).scrollTop();
//       var windowBtm = top + windowHeight;
//       var windowTop = 0;
//
//
//       if (top > objBtm) {
//         var nextObj = $(obj).next('.content-module-index');
//         if (nextObj.length) {
//           calc(nextObj);
//         }
//       }
//
//       if (top < objTop) {
//         var prevObj = $(obj).prev();
//         if (prevObj.length) {
//           $(obj).removeClass('is-released');
//           calc(prevObj);
//         }
//       }
//
//       if(top + windowHeight >= $(document).height() - 10) {
//         signup.trigger();
//         $('body').addClass('reached-bottom');
//       } else {
//         $('body').removeClass('reached-bottom');
//       }
//     }
//
//     $(window).scroll( function(){
//       positionModules();
//     });
//
//     $('.side-nav a').click(function(event) {
//       event.preventDefault();
//       event.stopPropagation();
//       var target = $(this).attr('href');
//       var offset = parseInt($(target).attr('data-offset')) - $('.nav').height();
//       console.log(offset);
//       $('html, body').animate({
//         scrollTop: offset
//       }, 600, 'easeOutQuad');
//     });
//
//     $(window).on("load", function() {
//       moduleOffset();
//       signup = new freezeframe('#signup-image').capture().setup();
//       window.setTimeout(function() {
//         $('html, body').scrollTop(0);
//       }, 100);
//     });
//   }
// });
