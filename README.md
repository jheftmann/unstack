# UNSTACK.js
A plugin for showing content by unstacking it as a user scrolls. Based on the [Small Victories](http://www.smallvictori.es) homepage.

## As a Small Victories Theme
To use it as a Small Victories theme, go the developers.smallvictories Github.

## As a plugin
1. Include `unstack.js` in your project. (You’ll also need jQuery.)
```
<script src="unstack.js"></script>
```
2. Call the `unstack` function in your JS:
```
unstack();
```

3. Include `unstack.css` in your project
```
<link href="unstack.css" rel="stylesheet">
```

4. By default, `unstack` will look for sibling objects with the class `.js-unstack`. You can change this to match different objects depending on the structure of your page.
```
  unstack({
    objectClass: ".js-unstack", // these are the objects you want to unstack. You could use the class of an object already on your page.
    reStackObject: 'js-unstack-restack', // set an object to take you back to the top when clicked
    layout: 'body' // this is the parent of the stacked objects
    });
```
