# Asynchronous JavaScript

Refers to the execution of JavaScript without blocking the main thread, allowing other operations to continue while waiting for other tasks to complete.

This is essential for tasks such as network requests, file reading, and timers which can take an unknown amount of time.

Asynchronous programming in JavaScript is done using **Promises.**

**An instance of asynchronous JavaScript:**

```js
setTimeout(() => {
    console.log('Javascript is fun')
}, 3000); // this code is executed after 3 seconds

console.log('Hello world!');
```

**Output:**
```js
Hello world!
Javascript is fun
```