# Default Parameters

Default parameters allow you to set a default value for function parameters if no argument is passed or if the argument is undefined.

```js
function sayBalance(balance = 0) {
    console.log(`My account balance is ${balance}`)
};

sayBalance();//balance will be 0 if no argument is passed
sayBalance(500);
```

**Output:**
```
My account balance is 0
My account balance is 500
```