$(document).ready(function() {

  unstack({
    objectClass: ".card", // these are the objects you want to unstack. You could use the class of an object already on your page.
    reStackObject: '.js-unstack-restack', // set an object to take you back to the top when clicked
    layout: 'body' // this is the parent of the stacked objects
  });

  addOpenGraph({
    ogTitle: 'Title',                                // The title of your website
    ogDescription: 'This is the description',        // A one to two sentence description of your website
    ogType: 'website',                               // The type of website, e.g. article, blog (default set to 'website')
    ogURL: 'http://www.yourwebsiteurl.com',                             // The URL for your website (where all your shares will be directed)
    ogImage: '/path/to/images.jpg'                   // The image you want to be featured in social posts
  });

});
