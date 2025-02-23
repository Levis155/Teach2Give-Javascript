# Arrays

An array is simply a special variable which can hold more than one value. These values can be accessed by referring to their index number.

## Creating an array

An array can be created in the following ways:

- An array literal
- The _new Array()_ constructor

**Using an array literal**

**Syntax:**

```js
const arrayName = [item1, item2, item3,....];
```

**Example:**
```js
const todos = ['Wake up', 'Eat breakfast', 'Go to work']
```

You can also nest an array within an array. This is referred to as a multidimensional array.

```js
const animals = ['cats','dogs','cows', ['lions', 'leopards', 'cheetahs', ['deer', 'wilderbeest']], 'goats']
```

**Using the _new array()_ constructor**

**Syntax:**
```js
const arrayName = new Array(item1, item2, item3, ...)
```

**Example:**
```js
const todos = new Array('Wake up', 'Eat breakfast', 'Go to work')
```

The _new Array() constructor_ can also be nested.

```js
const animals = new Array('cats','dogs','cows', new Array('lions', 'leopards', 'cheetahs', new Array('deer', 'wilderbeest')), 'goats')
```

## Accessing array elements

An array item can be accessed by referring to the **index number.**

**Example:**

```js
const cities = ['New York', 'Nairobi', 'Paris', 'Tokyo'];

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
```

**Output:**

```js
New York
Nairobi
Paris
Tokyo
```

## Basic Array Methods

- **_.length_** property - Determines the length of the array(number of items in the array).

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.length);
```

**Output:**
```js
4
```

- **_pop()_** - This method removes the last item of an array. It returns the element that was removed

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.pop());//displays the element that was removed

console.log(pets);
```

**Output:**
```js
cobras
[ 'cats', 'dogs', 'hamsters' ]
```

- **_push()_** - This method adds a new element at the end of an array. It returns the new length of the array.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.push('tarantulas'));//displays the new length of the array

console.log(pets);
```

**Output:**
```js
5
[ 'cats', 'dogs', 'hamsters', 'cobras', 'tarantulas' ]
```

- **_shift()_** - This method removes the first element of an array. It returns the element that was removed.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.shift());//displays the item that was removed

console.log(pets);
```

**Output:**
```js
cats
[ 'dogs', 'hamsters', 'cobras' ]
```

- **_unshift()_** - This method adds an element to the start of an array. You can add multiple elements using this method. It returns the new length of the array.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.unshift('tarantulas', 'chimps'));//displays the new length of the array

console.log(pets);
```

**Output:**
```js
6
[ 'tarantulas', 'chimps', 'cats', 'dogs', 'hamsters', 'cobras' ]
```

- **_at()_** - This method returns an element at the specified index.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.at(2));//displays the element at index 2
```

**Output:**
```js
hamsters
```

- **_join()_** - This method joins all array elements into a string. You can specify the separator within the parenthesis.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.join(' and '));//displays all elements in one string with ' and ' as the separator.
```

**Output:**
```js
cats and dogs and hamsters and cobras
```

- **_concat()_** - This method creates a new array by merging existing arrays.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];
const pets2 = ['tarantulas', 'chimps', 'parrots', 'wolves'];

console.log(pets.concat(pets2));//displays pets and pets2 merged into one array.
```

**Output:**
```js
[
  'cats',
  'dogs',
  'hamsters',
  'cobras',
  'tarantulas',
  'chimps',
  'parrots',
  'wolves'
]
```

- **_flat()_** - This method converts a multidimensional array to a one-dimension array.

**Example:**

```js
const nums = [1, 2, 3, [4, 5, 6], 7, 8];

console.log(nums.flat());//displays the new one-dimensioanal array
```

**Output:**
```js
[
  1, 2, 3, 4,
  5, 6, 7, 8 
]
```

- **_indexOf()_** - This method finds the index of an element in an array.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.indexOf('hamsters'));//displays the index of hamsters in pets
```

**Output:**
```js
2
```

- **_includes()_** - This method checks if an element exists in an array. If the element exists it returns true otherwise it returns false.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.inludes('parrots'));//displays false because parrots is not in pets
```

**Output:**
```js
false
```

- **_reverse()_** - This method reverses the elements of an array.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters', 'cobras'];

console.log(pets.reverse());//displays pets reversed
```

**Output:**
```js
[ 'cobras', 'hamsters', 'dogs', 'cats' ]
```