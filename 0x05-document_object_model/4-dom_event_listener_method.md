# DOM Event Listener Method

The _addEventListener()_ method attaches an event handler to a specified element.

This method attaches an event handler without ovewriting existing handlers.

It takes in three parameters (but we'll focus on the first two).

The first parameter is the type of event passed as a string, and the second parameter is a function to call when the event occurs.

**Example:**
```html
<button id="js-btn">click me</button>
```

```js
const buttonElement = document.querySelector('#js-btn');

buttonElement.addEventListener('click', function() {
    console.log('button clicked!');
});//A listens for the click event and logs a message to the console
```

**Output:**
```js
button clicked!
```