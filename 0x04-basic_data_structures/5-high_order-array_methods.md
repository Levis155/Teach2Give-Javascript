# High Order Array Methods

JavaScript provides a range of powerful tools for working with arrays such as higher order methods.

These methods simplify operations on arrays by allowing us to apply functions to elements directly, improving both readability and maintainability.

They include:

## forEach()

Executes a function on each array element but **does not return anything.**

**It does not create a new array.**

**Example:**

```js
const nums = [1,2,3];
let numsDoubled = []; //create a new array since forEach does not return an array so we can push the execution of nums to this array

nums.forEach((num) => {
    numsDoubled.push(num * 2);
});

console.log(numsDoubled);
```

**Output:**

```
[ 2, 4, 6 ]
```

## map()

This method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
// for map() we don't create a new array to push the result of the execution because it returns an array with the execution applied

const numsDoubled = [1,2,3].map(num => num * 2);

console.log(numsDoubled);
```

**Output:**

```
[ 2, 4, 6 ]
```

## filter()

This method creates a new array with all elements that pass the test implemented by the provided function

```js
// To filter even numbers from an array

const evenNums = [1,2,3,4,5,6,7,8,9,10].filter((num) => num % 2 === 0);

console.log(evenNums);
```

**Output:**

```
[ 2, 4, 6, 8, 10 ]
```

## reduce()

This method executes a reducer function (that you provide) on each element in an array resulting in a single output value.

Best for calculating totals, aggregations, or combining values.

Does not return a new array, but it returns the value that the original array has been reduced to.

```js
// To find the sum of elements in an array

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((acc, num) => acc + num, 0);

console.log(sum);
```

**Output:**

```
55
```

## find()

This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise it returns undefined.


```js
// To find the first element in in an array that is divisble by 3

const nums = [1,2,3,4,5,6,7,8,9,10];

const found = nums.find((num) => num % 3 === 0);

console.log(found);
```

**Output:**

```
3
```

## findIndex()

This method returns the index of the first element that mathces a condition.


```js
// To find the first the index of the first element that is divisible by 3

const nums = [1,2,3,4,5,6,7,8,9,10];

const index = nums.findIndex((num) => num % 3 === 0);

console.log(index);
```

**Output:**

```
2
```

## some()

checks if atleast one element passes a condition. Returns true if so and false otherwise.


```js
// To find if atleast one element in nums is divisible by 11

const nums = [1,2,3,4,5,6,7,8,9,10];

const divisibleByEleven = nums.some((num) => num % 11 === 0);

console.log(divisibleByEleven);
```

**Output:**

```
false
```

## every()

Opposite of some(). Checks if atleast all elements in an array pass a condition. Return true if so and false otherwise.


```js
// To find out if all elements in nums are greater than 0

const nums = [1,2,3,4,5,6,7,8,9,10];

const allGreaterThanZero = nums.every((num) => num > 0);

console.log(allGreaterThanZero);
```

**Output:**

```
true
```

