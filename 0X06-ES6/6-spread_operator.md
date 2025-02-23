# Spread Operator

The spread operator _(...)_ **allows you to expand elements of an iterable(like arrays, objects, or strings) into individual elements**. 

## Use cases of the spread operator

- **Expanding an array**

The spread operator takes array elements and spreads them individually.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters'];
const numbers = [1, 2, 3];

console.log(...pets);
console.log(...numbers);
```

**Output:**
```
cats dogs hamsters
1 2 3
```

- **Copying arrays**

The spread operator can be used to copy array elements which helps avoid the original array being affected when adjusting the copy.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters'];
const petsCopy = [...pets];
petsCopy.push('goldfish');//this won't affect pets

const numbers = [1, 2, 3];
const numbersCopy = [...numbers];
numbersCopy.push(4);//this won't affect numbers

console.log(pets);
console.log(petsCopy);
console.log(numbers);
console.log(numbersCopy);
```

**Output:**
```js
[ 'cats', 'dogs', 'hamsters' ]
[ 'cats', 'dogs', 'hamsters', 'goldfish' ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
```

- **Merging arrays**

The spread operator can be used to merge an array.

**Example:**

```js
const pets = ['cats', 'dogs', 'hamsters'];
const numbers = [1, 2, 3];

const petsAndNumbers = [...pets, ...numbers];

console.log(petsAndNumbers);
```

**Output:**
```js
[ 'cats', 'dogs', 'hamsters', 1, 2, 3 ]
```

- **Adding elements from one array to another**

The spread operator can be used to add elements from one array to another.

**Example:**

```js
const clothes = ['socks', 'shirts', 't-shirts'];
const newClothes = ['jackets', ...clothes, 'jeans'];

console.log(newClothes);
```

**Output:**
```js
[ 'jackets', 'socks', 'shirts', 't-shirts', 'jeans' ]
```


- **Copying objects**


**Example:**

```js
const product = {name:'socks', price: 50,};
const productCopy = {...product};

console.log(productCopy);
```

**Output:**
```js
{ name: 'socks', price: 50 }
```

- **Merging objects**


**Example:**

```js
const obj1 = {name:'socks'};
const obj2 = {price: 50};
const mergedObject = {...obj1, ...obj2};

console.log(mergedObject);
```

**Output:**
```js
{ name: 'socks', price: 50 }
```

- **Overwriting properties**


**Example:**

```js
const product = {name:'socks', price: 50,};
const productUpdate = {...product, price:60};

console.log(productUpdate);
```

**Output:**
```js
{ name: 'socks', price: 60 }
```