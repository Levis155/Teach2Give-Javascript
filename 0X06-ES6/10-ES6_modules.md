# ES6 Modules

ES6 introduced a modular system that allows JavaScript code to be split into multiple files making it easier to manage and reuse code.

This system is built on exporting and importing functions, variables, or classes between files.

## Important Note About ES6 Modules

When using ES6 modules in a browser you need to add the attribute _type = "module"_ in the _<script>_ 

```html
<script type="module" src="main.js"></script>
```

When using ES6 in Node.js:
- Add "type": "module" in package.json.
- Use .mjs file extensions.

## Exporting and Importing in ES6 Modules

In ES6 you can export code from a module using either **named exports** or **default exports**

### Named Exports 

You can export multiple values from a module using _export_ keyword. 

**For example to export a function from a file named mathutils.mjs to index.mjs:**

**mathUtils.mjs:**

```js
export function add(a, b) {
  return a + b;
}
```

**index.mjs:**
```js
import{add} from "./mathutils.mjs";

console.log(add(3,2));
```

**output:**

```js
5
```

### Using aliases for imports 

You can rename imports using the _as_ keyword. For instance:

**mathUtils.mjs:**

```js
export function add(a, b) {
  return a + b;
}
```

**index.mjs:**
```js
import{add as sum} from "./mathutils.mjs";

console.log(sum(3,2));
```

**output:**

```js
5
```


### Default Exports

Each module can have one default export, which can be imported with any name.

**mathUtils.mjs:**

```js
export default function log(message) {
    console.log(`${message}`);
}
```

**index.mjs:**
```js
import log from "./mathutils.mjs";
log("My name is Levis");

```

**output:**

```js
My name is Levis
```