# Sets

A set is a data structure that represents a collection of unique values.

## Properties of a set

- **unique elements:** Sets cannot contain duplicate elements.

- **No indexing:** Elements in a set cannot be accessed by their index.

- **No order:** Elements in a set don't maintain their order.

## Creating a set

To create a set the _new Set()_ method is used.

**Example:**
```js 
const firstSet = new Set([12, 13, 'cat']);
const SecondSet = new Set([12, 13, 'cat', 12]);

console.log(firstSet);
console.log(secondSet);// 12 appears more than once hence the only the first 12 is displayed
```

**Output:**

```js
Set(3) { 12, 13, 'cat' }
Set(3) { 12, 13, 'cat' }
```

## Set methods

- **_add(value)_** - Adds a new element with the specified value to the set.

**Example:**

```js
const mySet = new Set();

mySet.add(12);
mySet.add(13);
mySet.add('cat');

console.log(mySet);
```

**Output:**

```js
Set(3) { 12, 13, 'cat' }
```

- **_delete(value)_** - Removes a specific element from the set.

**Example:**

```js
const mySet = new Set([12, 13, 'cat']);

mySet.delete('cat');

console.log(mySet);
```

**Output:**

```js
Set(2) { 12, 13 }
```

- **_has(value)_** - Returns true if a specified value exists in a set and false otherwise.

**Example:**

```js
const mySet = new Set([12, 13, 'cat']);

console.log(mySet.has('cat'));
console.log(mySet.has('dog'));
```

**Output:**

```js
true
false
```

- **_size_** - Returns the number of elements in a set.

**Example:**

```js
const mySet = new Set([12, 13, 'cat']);

console.log(mySet.size);
```

**Output:**

```js
3
```