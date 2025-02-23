# Async/Await

_async/await_ is the modern way to handle asynchronous operations in JavaScript. It allows writing asynchronous code that looks like synchronous code.

```js
function getUser() {
  return new Promise(function (resolve, reject) {
    let error = false;

    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "Levis", role: "Trainee" });
    }
  });
}

async function processUser() {
  const user = await getUser();
  console.log(user);
}

processUser();

```

**Output:**

```js
{ username: 'Levis', role: 'Trainee' }
```

## Handling Errors in async/await

One of the strengths of async/await is its ability to handle errors in a synchronous manner using _try...catch_:

```js
function getUser() {
  return new Promise(function (resolve, reject) {
    let error = true;

    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "Levis", role: "Trainee" });
    }
  });
}

async function processUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch {
    console.log("Error!");
  }
}

processUser();
```
**Output:**
```js
Error!
```

**The catch block can also receive the error thrown from the promise as shown:**

```js
function getUser() {
  return new Promise(function (resolve, reject) {
    let error = true;

    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "Levis", role: "Trainee" });
    }
  });
}

async function processUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error)
  }
}

processUser();

```
**output:**
```js
There was an error
```

**_try...catch_ also has a _finally_ block:**

```js
function getUser() {
  return new Promise(function (resolve, reject) {
    let error = true;

    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "Levis", role: "Trainee" });
    }
  });
}

async function processUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally{
    console.log('come back soon!');
  }
}

processUser();

```

```js
There was an error
come back soon!
```