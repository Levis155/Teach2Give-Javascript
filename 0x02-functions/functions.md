# Functions

A function is a block of code that performs a specific task.

Functions help in writing modular, maintainable and reusable code.

**Functions are first class citizens in javascript meaning they can be assigned to variables, passed as arguments, returned from other functions, stored in data structures, and even created dynamically.**

**Syntax:**
```js
function functionName() {
    // function body
}
```

**Example:**

```js
function greet() {
    console.log('Hello world!')
}

//to run the code in the function you have to call the function as shown below:

greet();
```

**Output:**

```js
Hello world!
```

## Parameters vs Arguments

A **parameter** is a variable which acts as a placeholder which is assigned a value when the function is called.

An **argument** on the other hand is the value that is passed to the function for a given parameter when the function is called.

**Example:**
```js
function greet(name) {
    console.log(`Hello ${name}`)
} //function greet has a parameter name

greet('Levis'); //The string Levis is passed to the function for parameter name
```

**Output:**
```js
Hello Levis
```

## Function return values

A function can be given a value using the **return** keyword.

**Example:**
 ```js
 // A function that multiplies two numbers and returns the result

function multiply (num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3)); //When we call the function and view it in the console, we see that it has the value of the product of the two arguments
```

**Output:**
```js
6
```
## Categories of functions

Functions can be grouped in the following categories:

- Functions that don't take parameter(s) and don't return a value
- Functions that don't take parameter(s) but return a value
- Functions that take parameter(s) but don't return a value.
- Functions that take parameter(s) and return a value.

### Functions that don't take parameter(s) and don't return a value

**Example:**
```js
function multiply() {
    let num1 = 2;
    let num2 = 3;
    
    console.log(num1 * num2)
} //this function does not have parameters and does not return a value as seen

multiply();
```

**Output:**

```js
6
```

### Functions that don't take parameter(s) but return a value

**Example:**
```js
function multiply() {
    let num1 = 2;
    let num2 = 3;
    
    return(num1 * num2) //this function does not have parameters but returns this product
} 

console.log(multiply());
```

**Output:**

```js
6
```

### Functions that take parameter(s) but don't return a value.
**Example:**
```js
function multiply(num1, num2) {
    
    console.log(num1 * num2) 
} //this function has parameters num1 and num2 but does not return a value as seen

multiply(5,3);
```

**Output:**

```js
15
```

### Functions that take parameter(s) and return a value.
```js
function multiply(num1, num2) {
    
    return(num1 * num2) 
} //this function has parameters num1 and num2 and returns the product of the two parameters 

console.log(multiply(4,3));
```

**Output:**

```js
12
```

## Types of functions (Different ways of writing functions in JavaScript)

The different types of functions or different ways of writing functions in JavaScrip include the following:

- Function declaration
- Function expression/anonymous function
- Arrow functions
- Immediately Invoked Function Expression (IIFE)
- Callback functions

### Function Declaration

**Example:**

```js
function subtract(a, b) {
    console.log(a - b);
}

subtract(5, 3);
```

**Output:**
```js
2
```

### Function Expression or Anonymous Function

This involves saving a function inside a variable.

**Example:**

```js
let subtract = function(a, b) {
    console.log(a - b);
}// function has no name but is saved inside the variable subtract

subtract(5, 3);
```

**Output:**
```js
2
```

### Arrow Functions

Arrow functions were introduced to simplify how we write functions.


**Example:**

```js
let subtract = (a, b) => {
    console.log(a - b);
}

subtract(10, 5);
```

**Output:**
```js
5
```

Some simplifications when using arrow functions include:

- **If an arrow function has only one line in the body, we can get rid of the curly braces**

meaning instead of:

```js
let multiply = (a, b) => {
    console.log(a * b);
}

multiply (3, 2);
```

we can write:

```js
let multiply = (a, b) => console.log(a * b); //get rid of the curly brackets because this function has only one line of code.

multiply (3, 2);
```

- **If an arrow function has only one line of code in the body and that line happens to be a return statement, we can get rid of the return keyword:**

meaning instead of:

```js
let multiply = (a, b) => {
    return(a * b);
}

console.log(multiply(3, 2));
```

we can write:

```js
let multiply = (a, b) => (a * b); //get rid of the curly brackets and the return statement because this function has only one line of code

console.log(multiply(3, 2));
```

- **If an arrow function has only one parameter, we can get rid of the parenthesis:**

meaning instead of:

```js
let addNum = (num) => {
    return(3 + num);
}

console.log(addNum(2));
```

we can write:

```js
let addNum = num => (a * b); //get rid of the curly brackets and the return statement because this function has only one line of code. Also get rid of the parenthesis because there is only one parameter

console.log(addNum(2));
```

### Immediately invoked function expressions

These functions are called or executed immediately after being defined.

**Example:**
```js
function (num1, num2) {
    console.log(num1 / num2)
}(50, 10) //have parenthesis after the block to immediately call the function. Arguments can be passed within these parentheses
```

**Output:**
```js
5
```

### Callback Functions

These are functions which are passed as arguments to other functions

**Example:**
```js
function sayFavSubject(subject, callback) {
    console.log(`I love ${subject}.`);
    callback();
}

sayFavSubject('Math', function() {
    console.log('It is the best!');
}) // A function is passed as an argument
```

**Output:**
```js
I love Math.
It is the best!
```



