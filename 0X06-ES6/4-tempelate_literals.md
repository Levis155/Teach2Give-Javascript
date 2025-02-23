# Template literals

Tempelate literals were introduced in ES6 to make working with strings more flexible and readable.

Tempelate literals allow the following features:

- Multi-line strings without _\n_.
- string interpolation 
- embedded expressions etc.

## String interpolation

Before ES6 inserting variables into a string required concatenation which was tedious.

**Before tempelate literals:**

```js
const name = 'Levis';
const profession = 'Software Engineer';

console.log("My name is " + name + " and I am a " + profession);
// My name is Levis and I am a Software Engineer
```

**With tempelate literals:**
```js
const name = 'Levis';
const profession = 'Software Engineer';

console.log(`My name is ${name} and I am a ${profession}`) // My name is Levis and I am a Software Engineer
```

## Multi-line strings (No need for \n)

Before ES6, multi-line strings required \n or joining with  _+_ ie.:

```js
const multiLine = "This is the first line\n" + "This is the second line\n" + "This is the third line";

console.log(multiLine);
```

**Output:**
```js
This is the first line
This is the second line
This is the third line
```

ES6 removed the need for the _\n_ escape character. ie.:

```js
const multiLine = `This is the firs line
This is the second line
This is the third line`;

console.log(multiLine);
```

**Output:**
```js
This is the first line
This is the second line
This is the third line
```

## Expression inside tempelate literals

Tempelate literals can evaluate expressions directly e.g.:

```js
let x = 5;
let y = 10;

function multiply(num1, num2) {
    return num1 * num2;
};

console.log(`The product of ${x} and ${y} is ${multiply(x, y)}`);
```

**Output:**

```
The product of 5 and 10 is 50
```