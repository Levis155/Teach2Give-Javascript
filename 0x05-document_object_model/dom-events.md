# DOM Events

An event in the DOM is an action that happens in the browser that the browser can listen for.

These events are triggered by user interactions such as clicks, key presses or mouse movements.

## Some popular DOM events

- **_onclick_** - It is triggered when an element is clicked.

**Example:**

```html
<button id="js-btn">click me</button>
```

```js
const buttonElement = document.querySelector('#js-btn');
buttonElement.onclick = function() {
    console.log('button clicked!');
};// on clicking this button a message is logged to the console
```

**Output:**

```js
button clicked!
```

- **_onmouseover_** - It is triggered when the mouse pointer moves over an element.

- **_onmouseout_** - It is triggered when the mouse pointer moves out of an element.

- **_onkeydown_** - It is triggered when a key is pressed down. It is usually called on the document. i.e.: _document.onkeydown = function() {}_

- **_onkeyup_** - It is triggered when a key is released. This event too is called on the document. i.e.: _document.onkeyup = function() {}_

- **onload** - Triggered when the entire page has finished loading. This event is called on the window. i.e.: _window.onload = function () {}_

- **_onfocus_** - It is triggered when an element gains focus.

## DOM Event Listener Method

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