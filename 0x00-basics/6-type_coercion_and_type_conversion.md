# Type Coercion and Type Conversion

Both **type coercion** and **type conversion** involve changing a value from one data type to another, but they differ in how they happen.

## Type coercion (Implicit conversion)

Happens automatically when Javascript tries to perform operations between different data types.

**Examples**

```js
console.log(2 + '3'); // '23' (Number coerced into a string)
console.log(3 - '2'); // 1 (string coerced into a number)
console.log(true + 1); // 2 (true coerced into 1)
console.log(false + '10'); // 'false10' (false coerced into string)
```

## Type conversion (Explicit conversion)

Happens when you manually convert the data type of a value.

### Methods of explicit conversion

- Convert to string using _String()_ or _toString()_

```js
console.log(typeof(String(40))); //displays string
console.log(typeof((40).toString())); //displays string
```

- convert to Number using _Number()_, _parseInt()_ or _parseFloat()_

```js
console.log(typeof(Number("40")));
console.log(typeof(parseInt("40")));
console.log(typeof(parseFloat("40")));
console.log(typeof(parseInt("40px")));
// All lines above return Number in the console
```

- Convert to boolean using _Boolean()_
 
 **Falsy values**: _0, '', null, undefined, NaN, false_
  
  **Truthy values**: everything else

 ```js
 console.log(Boolean(0)); // false
 console.log(Boolean('Levis')); // true
 console.log(Boolean(NaN)); // false
 ```