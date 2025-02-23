# Changing DOM Elements

We can change the content, attributes and styling of DOM elements.

## Changing the content of HTML elements 

- **innerHTML**- Sets or gets the HTML content of an element

**Example:**
```html
    <div id="container">
        <p>Hello</p>
        <p>How are you?</p>
    </div>
```

```js
const divElement = document.getElementById('container');

console.log(divElement.innerHTML); //To get the HTML content of the divElement

divElement.innerHTML = `<button>New content</>` //changes the HTML content of the divElement

console.log(divElement.innerHTML);
```

**Output:**

```js
<p>Hello</p>
<p>How are you?</p>

<button>New content</button>
```

- **innerText**- Sets or gets the text content of an element and does not preserve the HTML tags.

**Example:**
```html
    <div id="container">
        <p>Hello</p>
        <p>How are you?</p>
    </div>
```

```js
const divElement = document.getElementById('container');

console.log(divElement.innerText); //To get the text content of the divElement

divElement.innerText = 'New content' //changes the text content of the divElement

console.log(divElement.innerText);
```

**Output:**

```js
Hello

How are you?

New content
```

- **textContent**- Does the exact same thing as _innerText_ but is more consistent across browsers.

## Changing the attribute of HTML elements

To do this we use _element.attribute = value_

**Example:**
```html
<button>click me</button>
```

```js
const buttonElement = document.getElementByTagName('button');
console.log(buttonElement);

buttonElement.class = 'js-btn';
console.log(buttonElement);
```

**Output:**

```js
HTMLCollection [button]

HTMLCollection [button, class: 'js-btn']
```

We can also use _element.setAttribute('attribute', 'value')_

**Example:**
```html
<button>click me</button>
```

```js
const buttonElement = document.getElementByTagName('button');
console.log(buttonElement);

buttonElement.setAttribute('class', 'js-btn');
console.log(buttonElement);
```

**Output:**

```js
HTMLCollection [button]

HTMLCollection [button, class: 'js-btn']
```

## Changing the styling of HTML elements

We can also use _element.style.property = 'value'_

**Example:**
```html
<button class="js-button">click me</button>
```

```js
const btnElement = document.querySelector(".js-btn");

btnElement.style.border = "3px solid red";
btnElement.style.fontSize = "48px";
btnElement.style.borderRadius = "5px";
```

**Changing the styling of HTML elements:**

- _element.classList.add()_: adds one or more class names to an element without removing the existing classes.
- _element.classList.remove()_: removes one or more classes from an element.
- _element.classList.toggle()_: If a class is present, it is removed, if it is absent, it is added.
- _element.classList.contains()_: returns true if an element contains the specified class(es) and false otherwise.
- _element.classList.replace()_: replaces an existing class with a new class.
- _element.style.setProperty()_: sets a CSS property on an element (first parameter) and its value (second parameter).