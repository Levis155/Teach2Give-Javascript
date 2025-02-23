# Introduction to `fetch` and HTTP Requests

_fetch_ is a built-in JavaScript function that allows your code to communicate with other computers (servers) over the internet.

It helps your code send and receive data from websites or APIs (Application Programming Interfaces)

## HTTP Request

HTTP (Hyper Text Transfer Protocol) is how computers communicate over the web.

There are different types of requests:

- **GET:** A computer asks for data.
- **POST:** A computer sends data to be created on the server.
- **PUT:** A computer requests for data updates.
- **DELETE:** A computer requests for data to be deleted.

We will focus on the GET request.

### Making a simple fetch request

To demonstrate this we're going to acquire random Chuck Norris jokes from the public API **api.chucknorris.io**:

```js
const jokePromise = fetch("https://api.chucknorris.io/jokes/random");

jokePromise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);
  })
  .catch(function (error) {
    console.log("There was an error");
    console.log(error);
  });

```

**output:**

```
After meals, Chuck Norris picks his teeth with a bowie knife.
```

### Making a simple fetch request using async await for easier syntax

Instead of using _.then()_, we can use _async/await_ for a cleaner approach.

```js
async function getJoke() {
    try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json()//converts response to JSON
        console.log(data.value);//displays joke
    }
}

getJoke();
```

**Output:**

```
Chuck Norris does not use a calendar, he decides which year it is.
```

### Handling Errors

Sometimes, things go wrong (e.g. no internet, server issues etc). These errors should always be handled.

```js
async function getJoke() {
    try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json()//converts response to JSON
        console.log(data.value);//displays joke
    } catch(error) {
        console.log(`Error: ${error}`)//handles errors
    }
}

getJoke();
```

**For instance if we mispell the API url this error will be handle and the output will be the following instead:**

```js
Error: TypeError: fetch failed
```