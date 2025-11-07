<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
    <!-- 
        ✅ this inside DOM event handlers (inline HTML)

        In an inline event handler like:
            onClick="alert(this.tagName)"

        → `this` ALWAYS refers to the DOM element 
        on which the event occurred.

        In this example, the event occurs on the <button> element,
        so `this` = the button element.

        `this.tagName` gives the name of the HTML tag → "BUTTON".
    -->
          
    <button onClick="alert(this.tagName)">click me</button>
    <script src="this/this-inside-arrow-function.js"></script>
</body>
</html>
