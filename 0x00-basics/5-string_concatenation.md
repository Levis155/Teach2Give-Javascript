# String Concatenation

It is the process of joining two or more strings together.

It can be done through the following ways:

## 1. Using the _+_ operator

You can use the _+_ operator to join strings together.

```js
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + lastName;

console.log('My full name is ' + fullName);//displays: My full name is JohnDoe
```

## 2. Using the _+=_ operator to append to an existing string

This allows adding a string to an existing string

```js
let greeting = 'Good Morning ';
greeting += 'Levis.';

console.log(greeting); //displays: Good Morning Levis
```

## 3. Using template literals

Template literals use backticks and _${}_ placeholders for variables.

```js
let firstName = 'Levis';
let lastName = 'Mbui';

console.log(`My name is ${firstName} ${lastName} `)
```