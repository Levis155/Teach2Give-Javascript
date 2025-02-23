# Including Javascript code to your project

## Types of javascript code

- Internal Javascript - Written inside the script tag in the HTML file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script>
        console.log('This is internaljavascript code')
    </script>
</body>
</html>
```
- External javascript - Stored in a separate .js file file and linked using a script tag with the src attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script src="test.js"></script>
</body>
</html>
```

test.js:
```js
console.log('This is external javascript code')
```

## Optimizing script loading

Some best practices to help your code load faster when working with javascript include the following:

- Using the defer keyword in your script tag

```html
<script src="test.js" defer></script>
```

- using the async keyword

```html
<script src="test.js" async></script>
```

- Placing the script tag at the end of your page rather than inside the head element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script src="test.js"></script>
</body>
</html>
```