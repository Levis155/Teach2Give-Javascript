# Object Literal Enhancements

These enhancements make it easier and more concise to create and work with objects.

They include:

## Shorthand Property Names

If a variable name matches the property name, you can omit the value assignment:

```js
const name = 'Levis';
const balance = 2500;
const age = 23;
const sex = 'Male';
const country = 'Kenya';

//before ES6 :

const user = {name: name, balance: balance, age: age, sex: sex, country: country};

// after ES6:
const user = {name, balance, sex, country};
```

## Method shorthand

You can define methods in an object without using the **function** keyword.

```js
// before ES6:
const user = {
name: 'Levis',
balance:2500,
age: 23,
sex: 'Male',
country: 'Kenya',
greet: function() {
    console.log(`Hello. My name is ${this.name} and I am from ${this.country}.`);
}
};

//after ES6:

const user = {
name: 'Levis',
balance:2500,
age: 23,
sex: 'Male',
country: 'Kenya',
greet() {
    console.log(`Hello. My name is ${this.name} and I am from ${this.country}.`);
}
};
```

## Computed Property names

You can use expressions as property names by wrapping them in square brackets []:

```js
// before ES6:
const user = {
firstName: 'Levis',
currentBalance:2500,
age: 23,
sex: 'Male',
country: 'Kenya',
};

//after ES6:

const user = {
['first' + 'Name']: 'Levis',
['current' + 'Balance']:2500,
age: 23,
sex: 'Male',
country: 'Kenya',
};
```
