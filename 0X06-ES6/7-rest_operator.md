# Rest Operator

The rest operator _(...)_ is used to collect multiple elements into a single array or object.

## Rest operator use cases

### Rest operator in function parameters

**When a function has multiple parameters but we don't know how many arguments will be passed, we use the rest operator.**

**Example:**
```js
function add(...numbers) {
    let result = 0;
    
    for(let i=0; i<numbers.length; i++) {
     result += numbers[i];
    }

    return result;
}

console.log(add(1,2,4,7));//these arguments are collected in an array called numbers which we loop through and find the sum of all elements
```

**Output**
```js
14
```