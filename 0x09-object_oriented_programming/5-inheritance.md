# Inheritance

Inheritance allows one class to inherit properties and methods from another class.

This helps in code reusability and hierachical structuring of objects.

It is implemented using the _extends_ keyword.

Inheritance is used when there is a "is-a" relationship (e.g., A Car is a Vehicle, A Dog is an Animal).

It helps avoid code duplication when multiple classes share a common behaviour.

**Example:**

```js
class Animal {
    constructor(numLegs, numEyes) {
        this.numLegs = numLegs;
        this.numEyes = numEyes;
    }

    move() {
        console.log(`Animal looking at water trough with ${this.numEyes} eyes`);
        console.log(`Animal moving towards water trough with ${this.numLegs} legs`);
    }

    drink() {
        console.log(`Animal drinking from water trough.`);
    }
}

class Cow extends Animal {
    constructor(numLegs, numEyes, breed, gender) {
        super(numLegs, numEyes);
        this.breed = breed;
        this.gender = gender;
    }

    makeSound() {
        console.log(`The animal is a ${this.gender} ${this.breed} cow and now it is mooing.`);
    }
}

const firstCow = new Cow(4, 2, 'Friesian', 'Female');


firstCow.move();
firstCow.drink();
firstCow.makeSound();
```
**Output:**

```
Animal looking at water trough with 2 eyes
Animal moving towards water trough with 4 legs
Animal drinking from water trough.
The animal is a Female Friesian cow and now it is mooing.
```