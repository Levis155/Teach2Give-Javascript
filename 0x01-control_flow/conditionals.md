# Control Flow in Javascript

Control flow refers to the order in which statements and lines of code are executed.

In javascript the order of execution by default is top to bottom.

However this flow can be altered using the following techniques:

- conditionals
- Loops

## conditionals

Conditionals rely on some condition to alter the natural flow of execution.

They include the following:

- if-statements
- if-else statements
- if-else ladder
- switch statements

### if-statements

If-statements execute a block of code if the condition within the parentheses is true

**syntax:**

```js
if (condition) {
    // block of code to be executed if condition is true
}
```

**Example:**
```js
// if statement to check if a person is old enough to drive

let age = 23;

if(age >= 18) {
    console.log('You can drive!') //javascript checks if age is above or equal to 18 and since it is this block is executed
}
```

**output**
```js
You can drive!
```

### if-else statement

If-else statements execute the if block if condition is true otherwise, the else block is executed.

**syntax:**

```js
if(condition) {
    //block of code to be executed if condition is true
} else{
    //block of code to be executed if condition is false
}
```

**Example**
```js
// if statement to check if a person is old enough to drive

let age = 16;

if(age >= 18) {
    console.log('You can drive!');
} else {
    console.log('You cannot drive yet.') // javascript checks if age is above or equal to 18 and since this is false this block is executed
}
```

**output:**

```js
You cannot drive yet.
```


### if-else ladder

Used when multiple conditions need to be checked sequentially.

**syntax:**
```js
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    //block of code to be executed if condition1 is false but condition2 is true
} else{
    // block of code to be executed if both condition1 and condition2 is false
}
```

**Example:**
```js
// code to check if a person is old enough to drive
let age = 17;

if (age >= 18) {
  console.log("You can drive!");
} else if (age < 18 && age >= 16) {
  console.log("You cannot drive but you are close!"); // condition1 is false but condition2 is true so this block is executed
} else {
  console.log("You cannot drive yet.");
}

```
**output:**
```js
You cannot drive but you are close!
```

### switch statement

Used when a variable has multiple possible values and is cleaner than if statements.

**syntax:**
```js
switch (expression) {
  case value1:
    // block of code to be executed if expression === value1
    break;
  case value2:
    // block of code to be executed if expression === value2
    break;
  default:
  // block of code to be executed if expression doesn't match any case
}
```

**Example:**

```js
//switch statement to issue comments on different grades

let grade = "C";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Average");//grade === 'C' so this block is executed
    break;

  case "D":
    console.log("Below average");
    break;

  case "E":
    console.log("Poor");
    break;

  default:
    console.log("Not a valid grade");
}

```

**Output:**

```js
Average
```

### Ternary operator

This is a shorter way to write an if-else statement

**syntax:**

```js
condition ? expression if condition is true : expression if condition is false
```

**Example:**

```js
// Ternary operator to check if a person is old enough to drive

let age = 16;

age >= 18 ? console.log('You can drive!') : console.log('You cannot drive yet.')
```

**Output**

```js
You cannot drive yet.
```


