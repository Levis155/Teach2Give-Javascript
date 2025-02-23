# Callbacks

Callbacks are one of the solutions for asynchronous programming in JavaScript.

For instance if your are building a web application where you need to fetch user data from a database or an API. The code might look like this:

```js
function fetchData() {
    let data = { username: "John Doe", role: "Admin" };
    return data;
}; //this retrieves user data and returns it immediately

function showData(data) {
    console.log(`Username is ${data.username} and role is ${data.role}`);
};

const userData = fetchData();
showData(userData); //this displays the user's details
```

For asynchronous operations where _fetchdata()_ instantly provides the data, this works fine.

But what if fetching data took time? For instance when calling an API or reading from a database.

We can simulate this using setTimeout:

```js
function fetchData() {
  setTimeout(() => {
    let data = { username: "John Doe", role: "Admin" };
    return data;
  }, 2000);
}

function showData(data) {
  console.log(`Username is ${data.username} and role is ${data.role}`);
}

const userData = fetchData();
showData(userData);
```

_setTimeout()_ delays execution of the function, making it asynchronous.

_fetchdata()_ does not wait for the data to be ready. It returns undefined immediately.

when showData(userData) runs, _userData_ is undefined, leading to errors.

The solution is to use **callbacks**

```js
function fetchData(callback) {
  setTimeout(() => {
    let data = { username: "John Doe", role: "Admin" };
    callback(data);
  }, 2000);
}

fetchData(function (data) {
  console.log(`Username is ${data.username} and role is ${data.role}`);
});//execution will only happen after the asynchronous operation is complete due to the callback function.
```

Despite callback functions solving the problem of asynchronous execution, if we use too many callback functions, this leads to code being unreadable and hard to manage. A situation referred to as **callback hell**.

To avoid callback hell we can replace callbacks with promises which provide better structure and readability.