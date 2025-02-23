# JavaScript Classes

A class refers to the blueprint of an object.

With ES6, JavaScript introduced the class syntax making OOP more structured.

## Creating a class

To create a class in JavaScript, you use the class keyword followed by the class name. Inside the class, you define a **constructor method** to initialize object properties.

**Example:**

```js
class user {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
```

## Creating instances of a class

To create an instance of a class, use the _new_ keyword.

```js
class user {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

const user1 = new user('Levis', 23);// create a new user Levis aged 23

console.log(user1)
user1.greet();
```

**Output:**

```
user { age: 23, name: 'Levis' }
Hello! My name is Levis
```