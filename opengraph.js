addOpenGraph = function(options) {

  var settings = $.extend({
        ogTitle: ' ',
        ogDescription: ' ',
        ogType: ' ',
        ogURL: ' ',
        ogImage: ' '
    }, options );

  console.log('og tags');

  var ogTitle = settings.ogTitle;
  var ogDescription = settings.ogDescription;
  var ogType = settings.ogType;
  var ogURL = settings.ogURL;
  var ogImage = settings.ogImage;

  $('head').append('<meta property="og:title" content="' + ogTitle + '" />');
  $('head').append('<meta property="og:description" content="' + ogDescription + '" />');
  $('head').append('<meta property="og:type" content="' + ogType + '" />');
  $('head').append('<meta property="og:url" content="' + ogURL + '" />');
  $('head').append('<meta property="og:image" content="' + ogImage + '" />');

};
