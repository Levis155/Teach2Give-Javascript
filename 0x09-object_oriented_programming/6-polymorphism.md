# Polymorphism

Polymorphism allows an entity of an object-oriented code such as a variable or a method to have more than one form.

It is achieved through:

- **Method overriding** - Child class provides its own implementation of a method that it has inherited.

- **Method overloading** - This allows multiple methods in the same class to have the same name but different parameters. It isn't supported in JavaScript but it can be demonstrated.

## Method overriding

```js
class Math {
    add(num1, num2) {
        return num1 + num2;
    }
}

class Arithmetics extends Math{
    add(num1, num2) {
        if(num1 < 0 || num2 < 0) {
            console.log('can only add positive numbers');
        } else{
            console.log(num1 + num2);
        }
    }
}

const arithmetic = new Arithmetics();

arithmetic.add(-2, 2);
arithmetic.add(2, -2);
arithmetic.add(2, 2);
```

**Output:**

```
can only add positive numbers
can only add positive numbers
4
```

