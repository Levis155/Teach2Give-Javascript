# Accessing Dom elements

To access any element in a HTML page, we first start by accessing the _document_ object. This is because the document object is the owner of all other objects on the page.

## Methods of accessing DOM elements

- **_document.getElementById(elementId)_** - Finds an element with id equivalent to  _elementId_.

**Example:**

```html
<p id="text">some text</p>
```

```js
const paragraphElement = document.getElementById('text'); //finds an element with id as text

console.log(paragraphElement);
```

**output:**

```js
<p id="text">some text</p>
```

- **_document.getElementByTagname(name)_** - Finds all elements that match the tag name passed. For example all buttons.

It returns a NodeList of all elements that match the tag name passed.

You can select a specific element by targeting its index the same way as in an array.

**Example:**

```html
    <button>click me1</button>
    <button>click me2</button>
    <button>click me3</button>
```

```js
const buttons = document.getElementsByTagName('button');
console.log(buttons);
```

**output:**

```js
HTMLCollection(3) [button, button, button]
```

- **_document.getElementsByClassName(classname)_** - Finds all elements that match the class name passed.

It returns a NodeList of all elements that match the class name passed.

You can select a specific element by targeting its index the same way as in an array.

**Example:**

```html
    <button class="js-btn">click me1</button>
    <button class="js-btn">click me2</button>
    <button class="js-btn">click me3</button>
```

```js
const jsBtns = document.getElementsByClassName('js-btn');
console.log(jsBtns);
```

**output:**

```js
HTMLCollection(3) [button.js-btn, button.js-btn, button.js-btn]
```

- **_document.querySelector(selector)_** - Selects the first element in the document that matches a specified css selector, id or tagname.


**Example:**

```html
    <button class="js-btn" id="js-button">click me1</button>
    <button class="js-btn" id="js-button">click me2</button>
    <button class="js-btn" id="js-button">click me3</button>
```

```js
const jsBtn = document.querySelector('.js-btn'); //selects the first element with the js-btn class
const jsButton = document.querySelector('#js-button'); //selects the first element with the js-button id
const btn = document.querySelector('button'); //selects the first element with the button tag

console.log(jsBtn);
console.log(jsButton);
console.log(btn);
```

**output:**

```js
button#js-button.js-btn
button#js-button.js-btn
button#js-button.js-btn
```

- **_document.querySelectorAll(selector)_** - Selects all elements in the document that matche a specified css selector, id or tagname and returns a node list of them.


**Example:**

```html
    <button class="js-btn" id="js-button">click me1</button>
    <button class="js-btn" id="js-button">click me2</button>
    <button class="js-btn" id="js-button">click me3</button>
```

```js
const jsBtns = document.querySelectorAll('.js-btn'); //selects all elements with the js-btn class
const jsButtons = document.querySelectorAll('#js-button'); //selects all elements with the js-button id
const btns = document.querySelectorAll('button'); //selects all elements with the button tag

console.log(jsBtns);
console.log(jsButtons);
console.log(btns);
```

**output:**

```js
NodeList(3) [button#js-button.js-btn, button#js-button.js-btn, button#js-button.js-btn]
 
NodeList(3) [button#js-button.js-btn, button#js-button.js-btn, button#js-button.js-btn]

NodeList(3) [button#js-button.js-btn, button#js-button.js-btn, button#js-button.js-btn]
```
