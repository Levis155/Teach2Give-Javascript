# Promises

With asynchronous code, we never know beforehand when we will get the results and we also don't know if the results will be a success or a failure.

When working with asynchronous JavaScript, there is the concept of **producing code** and **consuming code**

- **Producing code** is code that will take some time to complete e.g. fetching user information from a database.

- **Consuming code** is code that must wait for results from the producing code.

A **promise** is an object that links producing and consuming code.

It is an object that also represents the eventual completion or failure of asynchronous operation and its resulting value.

A promise has three states:

- **Pending:** Initial state; neither fulfilled nor rejected.
- **Fulfilled:** The operation is completed successfully.
- **Rejection:** The operation has failed.

## Creating a Promise

A promise is created using the _new Promise()_ constructor.

The _new Promisez()_ constructor accepts a single argument which a function referred to as the **executor.**

The promise executes the executor function immediately.

The executor function takes two parameters: a function to call with a value when the promise is fulfilled(commonly referred to as **resolve**), and the second is a function to call when the promise fails(mostly referred to as **reject**).

```js
const myPromise = new Promise(function(resolve, reject) {
    let name = 'Levis';

    if(name === 'Levis') {
        resolve('Name is Levis');
    } else {
        reject('Name is not Levis')
    }
});
```

## Consuming a promise

We can use _.then()_ to handle resolved value and _.catch()_ to handle errors (rejected value).

._then()_ takes a callback function, which receives the resolved value of the Promise as its argument.

_.catch()_ takes a callback function which receives the error(rejected value) as its argument when the Promise is rejected.

```js
const myPromise = new Promise(function (resolve, reject) {
  let name = "Levis";

  if (name === "Levis") {
    resolve("Name is Levis");
  } else {
    reject("Name is not Levis");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

```

**output:**
```js
Name is Levis
```

The _.finally()_ gets executed regardless of whether the promise was a success or failure:

```js
const myPromise = new Promise(function (resolve, reject) {
  let name = "Levis";

  if (name === "Levis") {
    resolve("Name is Levis");
  } else {
    reject("Name is not Levis");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Come back soon!')
  });

```

**output:**

```js
Name is Levis
Come back soon!
```

## Returning a promise from a function

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

getUser()
  .then((user) => {
    console.log(`Username: ${user.username}, Role: ${user.role}`);
  })
  .catch((error) => {
    console.log(error);
  });

```
**Output:**

```js
Username: Levis, Role: Trainee
```