# Scope

Scope in JavaScript refers to the accessibility of variables.

In JavaScript the following types of scopes exist:

- **Global Scope**
- **Function Scope (local scope)**
- **Block Scope (introduced in ES6)**
- **Lexical scope**

## Global Scope

A variable declared outside a function or block is considered to have a global scope.

This means it is accessible anywhere in the code.

**Example:**

```js
let num = 2;

function printNum() {
    console.log(num);
}

printNum();
console.log(num + 2); 

//num is accessible both inside and outside functions or blocks hence no error
```

**Output:**

```js
2
4
```

## Function scope or local scope

A variable declared within a function or block is considered to have a local or function scope.

This means it is accessible only within that block or function.

**Example:**

```js

function printNum() {
    let num = 2;
    
    console.log(num);
}

printNum();
console.log(num + 2); 

//num is accessible only within function printNum hence an error when you try to access it outside the function.
```

**Output:**

```js
2
ReferenceError: num is not defined
```

## Block Scope (_let_ and _const_)

Originally JavaScript only had global scope and function scope since the var keyword could not support block scope.

However, ES6 introduced **let** and **const**, which support block scope. Meaning variables declared within a block with the let and const keywords can only be accessed within that block.

If you want the variable to be accessed outside the block you can use the var keyword.

A block is any code inside curly brackets

**Example:**
```js
if (true) {
  let age = 25;
  console.log(age);
}
console.log(age);

//age can only be accessed within the block hence we get an error
```

**Output:**
```js
ReferenceError: age is not defined
```

## Lexical scope

Lexical scope refers to the ability of functions to access variables declared within their parent function.

However parent functions cannot access variables declared within their child function.

**Example:**
```js
function parentFunction() {
    let parentVariable = 5;

    function childFunction() {
        console.log(parentVariable);
    };
    childFunction();
};

parentFunction();

```

**Output:**
```js
5
```