# Maps

Maps are like objects in that they are data structures that allow storage of key-value pairs but unlike objects, keys in a map can be of any data type.

## Creating a map

You can create a map using _new Map()_

**Example:**

```js
const myMap = new Map();
```

## Map Methods

- **_set(key, value)_** - Adds a key value pair to the map or updates if the key-value pair already exists.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

console.log(myMap);
```

**Output:**
```js
Map(4) {
  'name' => 'socks',
  5 => 'rating',
  'price' => 50,
  true => 'isInStock'
}
```

- **_get(key)_** - Returns the value associated with the specific key or undefined if it doesn't exist.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

console.log(myMap.get('name'));
console.log(myMap.get(5));
```

**Output:**
```js
socks
rating
```

- **_has(key)_** - Returns true if the map **has** the specified key and false otherwise.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

console.log(myMap.has('name'));
console.log(myMap.has(3));
```

**Output:**
```js
true
false
```

- **_delete(key)_** - Removes the specified key-value pair from the map.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

myMap.delete('price');
console.log(myMap);
```

**Output:**
```js
Map(3) { 'name' => 'socks', 5 => 'rating', true => 'isInStock' }
```

- **_clear()_** - Removes all key-value pairs from the map.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

myMap.clear();
console.log(myMap);
```

**Output:**
```js
Map(0) {}
```

- **_size_** - Returns the number of key-value pairs in the map.

**Example:**
```js

const myMap = new Map();
myMap.set('name', 'socks');
myMap.set(5, 'rating');
myMap.set('price', 50);
myMap.set(true, 'isInStock');

console.log(myMap.size);
```

**Output:**
```js
4
```