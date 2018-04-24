$(document).ready(function() {

  unstack({
    objectClass: ".js-unstack", // these are the objects you want to unstack. You could use the class of an object already on your page.
    reStackObject: '.js-unstack-restack', // set an object to take you back to the top when clicked
    layout: 'body' // this is the parent of the stacked objects
  });

});
