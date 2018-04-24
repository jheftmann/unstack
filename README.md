# UNSTACK.js
A plugin for showing content by unstacking it as a user scrolls. Based on the [Small Victories](http://www.smallvictori.es) homepage.

## As a Small Victories Theme
To use it as a Small Victories theme, go to https://github.com/smallvictories/developers.

1. Download the Unstack theme files
2. Create a new Small Victories site using the Feed Theme
3. Replace the default `_sv_custom.js` and `_sv_custom.css` with the files from the Unstack Theme
4. Add your own images (and other files) to your site folder.
5. Optional: Add your own styles to `_sv_custom.css` if you want

#### File types
You can add images (.jpg, .png, .gif, .svg, etc.), .html, .md files. They will all follow the unstacking behavior.

## As a plugin
1. Include `unstack.js` in your project. (You’ll also need jQuery.)
```
<script src="unstack.js"></script>
```

2. Include `unstack.css` in your project
```
<link href="unstack.css" rel="stylesheet">
```

You may need to change `.js-unstack` to a different object depending on your layout. This is the object you’re unstacking; it should match what you set in #4 (below).

3. Call the `unstack` function in your JS:
```
unstack();
```

4. By default, `unstack` will look for sibling objects with the class `.js-unstack`. You can use the `.js-unstack` class in your HTML or change this to match different objects depending on the structure of your page.
```
unstack({
  objectClass: '.js-unstack',              // these are the objects you want to unstack
  reStackObject: '.js-unstack-restack',    // set an object to take you back to the top when clicked
  layout: 'body'                           // this is the parent of the stacked objects
});
```
```
<div class="js-unstack"></div> <!-- I'm showing -->
<div class="js-unstack"></div> <!-- then show me -->
<div class="js-unstack"></div> <!-- then show me -->
```

5. By default, the `unstack` object has a position of fixed. Otherwise you can adapt its styles to your specific layout. See `/demo` for example.
