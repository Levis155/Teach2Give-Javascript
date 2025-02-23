# Static Methods and Properties

Static methods and properties belong to a class itself rather than its instances.

This means that they can be accessed without creating an object of the class.

They are also not used on the object itself but on the class.

## Static Methods

A static method is a method defined using the _static_ keyword inside a class.

**Example:**

```js
class MathUtils {
    static add (num1, num2) {
        return num1 + num2;
    }

    static subtract(num1, num2) {
        return num1 - num2;
    }
}; 

//we call static methods directly from the class as shown:
console.log(MathUtils.add(3, 2)); 
console.log(MathUtils.subtract(3, 2));

// If we try to call a static method from an instance we get an error
const math = new MathUtils();
console.log(math.add(3,2));

```

**Output:**

```
5
1
TypeError: math.add is not a function
    at Object.<anonymous>
```

## Static Property

A static property is a variable that belongs to the class rather than an instance.

**Example:**

```js
class Counter {
    static count = 0; //this is a static property

    static incremet() {
        Counter.count++; //We access the property from the class
    }

    static getCount() {
        return Counter.count;
    }
}

//displaying the static property from the class
console.log(Counter.getCount());

// incrementing the static property
Counter.incremet();
Counter.incremet();

//getting the incremented property

console.log(Counter.getCount());
```

**Output:**
```
0
2
```