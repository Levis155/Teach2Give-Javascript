# Objects

An object in JavaScript is a collection of **key-value pairs**.

A key must always be a string and a value can be any data type.

Keys are refered to as **properties** and functions inside an object are referred to as **methods**

## Creating Objects

JavaScript provides the following ways to create objects:

- **Using object literals** Curly braces are used to create functions.

**This is the preferred technique of creating objects**

**Example:**

```js
const product = {
    name: 'socks',
    color: 'gray',
    price: 50,
    rating: 5,
    isSoldOut: true,
    };
```

- **Using _new Object()_** This method is rarely used in modern day JavaScript.

**Example:**

```js
const product = new Object();
    product.name = 'socks';
    product.color = 'gray',
    prodcut.price = 50,
    product.rating = 5,
    product.isSoldOut = true,    
```

- **Using a Constructor Function** This is a regular function used with the _new_ keyword to create multiple objects with shared properties and methods.

**Example:**

```js

function product(name, color, price, rating, isSoldOut) {
    this.name =name;
    this.color = color;
    this.price = price;
    this.rating = rating;
    this.isSoldOut = isSoldOut;
}

const product = new product('socks', 'gray', 50, 5, true);
```

## Accessing object properties

There are two techniques of accessing object properties:

- **Dot notation**

Dot notation allows access to an object's properties using a dot followed by the property name.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

console.log(product.name); //this displays the name property

```

**Output:**

```js
socks
```

- **Bracket notation**

Bracket notation accesses an object's property using the square brackets with the property name as a string.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

console.log(product['color']); //this displays the color property

```

**Output:**

```js
gray
```

## Modifying objects

- **Adding new properties** - The dot or bracket notations can be used to add a property to an object.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

product .material = 'woolen';
product['manufuctureCountry'] = 'China';
console.log(product); //this shows that new properties material and manufuctureCountry have been added.
```

**Output:**
```js
{
  name: 'socks',
  color: 'gray',
  price: 50,    
  rating: 5,
  isSoldOut: true,
  material: 'woolen',
  manufuctureCountry: 'China'
}
```

- **Updating a property** - The dot or bracket notations can be used to  a property to update an object property.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

product.color = 'blue';
product['price'] = 60;
console.log(product); //this shows that color and price properties have been changed or updated
```

**Output:**
```js
{ name: 'socks', color: 'blue', price: 60, rating: 5, isSoldOut: true }
```

- **Deleting a property** - The delete keyword is used to delete a property.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

delete product.color;
console.log(product); //this shows that the color property has been deleted
```

**Output:**
```js
{ name: 'socks', price: 50, rating: 5, isSoldOut: true }
```

## Checking properties in an object

To check if a property is present within an object we employ the following techniques:

- **The _in_ keyword**

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

console.log('name' in product); 
console.log('material' in product)
```

**Output:**

```js
true
false
```

- **The _hasOwnProperty()_ keyword**

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};

console.log(product.hasOwnProperty('name')); 
console.log(product.hasOwnProperty('material'));
```

**Output:**

```js
true
false
```

## Object Methods

- **Object.keys(objectName)** - Returns an array containing all the keys of an object.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};


console.log(object.keys(product));
```

**Output:**

```js
[ 'name', 'color', 'price', 'rating', 'isSoldOut' ]
```

- **Object.values(objectName)** - Returns an array containing all the values of an object.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};


console.log(Object.values(product));
```

**Output:**

```js
[ 'socks', 'gray', 50, 5, true ] 
```

- **Object.entries(objectName)** - Returns an array containing all the key-values pairs of an object.

**Example:**

```js
const product = {
  name: "socks",
  color: "gray",
  price: 50,
  rating: 5,
  isSoldOut: true,
};


console.log(Object.entries(product));
```

**Output:**

```js
[
  [ 'name', 'socks' ],
  [ 'color', 'gray' ],
  [ 'price', 50 ],    
  [ 'rating', 5 ],
  [ 'isSoldOut', true ]
]
```

- **Object.freeze(objectName)** - Freezes an object preventing new properties from being added to it and existing ones from being removed and also from being modified.

**Example:**

```js
const product = {
    name: "socks",
    color: "gray",
    price: 50,
    rating: 5,
    isSoldOut: true,
  };
  
  Object.freeze(product);
  product.color = 'white';

  console.log(product);// color property does not change value
```

**Output:**

```js
{ name: 'socks', color: 'gray', price: 50, rating: 5, isSoldOut: true }
```

## Iterating over an object using the _for..in_ loop

**Example:**
```js
const product = {
    name: "socks",
    color: "gray",
    price: 50,
    rating: 5,
    isSoldOut: true,
  };
  
for (let key in product) {
    console.log(key);
}
```
**Output:**
```js
name
color
price
rating
isSoldOut
```
