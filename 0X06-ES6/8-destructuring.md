# Destructuring

Destructuring is a convinient way to extract values from arrays or objects and assign them to variables in a single line.

## Destructuring arrays

**Example:**

```js
const myArray = ['Levis', 'software engineer', 23];

const [name, profession, age] = myArray;

console.log(name);
console.log(profession);
console.log(age);
```

```js
Levis
software engineer
23
```

**We can skip values when destructuring:**

```js
const myArray = ['Levis', 'software engineer', 23];

const [ , , age] = myArray;

console.log(age);
```

**Output:**

```js
23
```

**We can use the rest operator to collect remaining elements into an array during destructuring:**

```js
const myArray = ['Levis', 'software engineer', 23];

const [ , ...others] = myArray; //collects software engineer and 23 into an array called others

console.log(others);
```

**Output:**

```js
[ 'software engineer', 23 ]
```
**We can also use destructuring to swap variables:**

```js
let a = 1, b = 2;

[a, b] = [b, a]; //swaps a and b

console.log(a); 
console.log(b); 
```

**output:**

```js
2
1
```

## Destructuring objects

```js
const user = {
    name: 'Levis',
    balance:2500
    };

const{name, balance} = user; //sets name to Levis and balance to 2500

console.log(name);
console.log(balance);
```

**Output:**

```js
Levis
2500
```

**You can also rename variables when destructuring objects:**
```js
const user = {
    name: 'Levis',
    balance:2500
    };

const{name: userName, balance: remainingBalance} = user; //renames name to userName and balance to remainingBalance

console.log(userName);
console.log(remainingBalance);
```

**Output:**

```js
Levis
2500
```

**You can assign a default value if the variable doesn't exist in an object:**
```js
const user = {
    name: 'Levis',
    balance:2500
    };

const{name, balance, points = 100} = user;

console.log(name);
console.log(balance);
console.log(points);
```

**Output:**

```js
Levis
2500
100
```

**You can use the rest operator to gather the remaining properties of an object during destructuring:**
```js
const user = {
name: 'Levis',
balance:2500,
age: 23,
sex: 'Male',
country: 'Kenya'
};

const{name, balance, ...otherDetails} = user; //gathers remaining properties in an object called otherDetails


console.log(otherDetails);
```

**Output:**

```js
{ age: 23, sex: 'Male', country: 'Kenya' }
```