Arrow functions were introduced in ES6 to provide a more concise syntax for writing functions in JavaScript, by removing the need for the function _keyword_ and have a shorter syntax.

**Before:**
```js
function multiply(a, b) {
    return a *  b;
}

console.log(multiply(2,3));
```

**After:**
```js
const multiply = (a, b) => return a * b;

console.log(multiply(3, 2));
```

**Arrow functions don't have the _this_ keyword. This means that they cannot be used as object methods.**