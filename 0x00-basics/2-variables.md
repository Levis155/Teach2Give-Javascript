# Variables

In simple terms a **variable** is like a labeled container holding some piece of information called a value.

A **value** is the piece of data stored inside a variable.

**constants** are varibles that don't change their value.

## Declaring variables in javascript

You can do this using the following keywords:

1. **var** (old and not recommended)
1. **let**
1. **const**

this is illustrated below:

```js
var name = 'Levis'; // a variable named name holding the value Levis
let age = 23; // a variable named age holding the value 23
const occupation = 'Freelancer'; // a variable named occupation holding the value Freelancer which cannot change
```

## Updating variables

Variables declared using the **let** or **var** keywords can be updated or reassigned.

variables declared using **const** keyword cannot be updated or reassigned.

```js
let profession = 'Enginner';
var age = 23;
const name = 'Levis'


profession = 'software dev';
age = 25;
name = 'Derrick' // This will result in an error
```

## Declaring vs initializing a variable

**Declaring** a variable means creating it without giving it a value. This return a value of undefined as the output.

```js
let name;
console.log(name) //displays undefined in the console
```

**initializing** a variable involves giving it a value as you declare it.

```js
let name = 'Levis' //initializing a variable
console.log(name) //displays Levis in the console
```

**NOTE:** const varibles **MUST** be initialized immediately.

## Rules for naming variables

- **variable names can only start with a letter, underscore, or dollar sign**

```js
//valid examples:
let name = 'Levis';
let _score = 100;
let $price = 50;

//invalid examples:
let 1st place = 'Gold'; //a variable name cannot start with a number
```

- **Variable names cannot be javascript reserved keywords**

```js
//invalid example:

let const = 'Levis';
```

- **variable names can only contain letters, numbers, underscore and dollar sign, no special characters or spaces in between**

```js
//valid examples:
let userName = 'Levis';
let _userPassword = 123;
let $currency = 'Dollar';

//invalid examples:
let user-name ='Levis';
let user password = 123;
```

- **Variable names are case-sensitive**

```js
let password = 123;
let Password = 'abc';

console.log(password); //123
console.log(Password); //abc
```

- **Use meaningful and descriptive names**

```js
// Good practice:
let userName = 'Levis';
let age = 23;

//bad practice:
let x = 'John';
let y = 30;
```

- **If the variable name is made up of multiple words, use the camel case convention**

```js
let userName = 'Levis';
let totalScore = 1000;
```
