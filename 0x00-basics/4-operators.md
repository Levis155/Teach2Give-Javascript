# Operators

Operators in Javascript are simply symbols that perform operations on values **(operands).**

They are divide into the following categories:

- **Arithmetic operators**
- **Assignment operators**
- **Comparison operators**
- **Logical operators**
- **Bitwise operators**
- **Ternary operators**
- **Type opertors**

## Arithmetic operators

These are used to perform mathematical operations.

### + (addition)

Adds two numbers.

```js
let x = 20;
let y = 10;

console.log(x + y); // 30
```

can also be used with strings to perform string concatenation.

```js
let firstName = 'Levis';
let lastName = 'Mbui';

console.log(firstName + lastName); //LevisMbui
```

### - (subtraction)

Subtracts the operand on the right from the one on the left.

```js
let a = 50;
let b = 20;

console.log(a - b); //30
```

### * (multiplication)

Calculates the product of two operands.

```js
let x = 10;
let y = 10;

console.log(x * y); // 100
```

### / (division)

Divides two operands.

```js
let a = 100;
let b = 10;

console.log(a / b); // 10
```

### % (modulus or remainder)

Returns the remainder of the division between the left and right operand.

```js
let x = 7;
let y = 3;

console.log(7 % 3); // 1
```

### ** (Exponentiation)

Raises the operand on the left to the operand on the right.

```js
let a = 2;
let b = 3;

console.log(a ** b); // 8
```

### ++ (Increment operator)

Increases the value by one.

It can be used in two ways:

- Post-increment _(a++)_: returns the original value and then increments it.
- Pre-increment _(++a)_: increments first then returns the updated value.

```js
let a = 2;
console.log(x++); //2
console.log(a); //3

let b = 9;
console.log(++b); //10

```

### -- (decrement operator)

Decreases the value by one.

It can be used in two ways:

- Post-decrement _(a--)_: returns the original value and then decrements it.
- Pre-decrement _(--a)_: decrements first then returns the updated value.

```js
let a = 2;
console.log(x--); //2
console.log(a); //1

let b = 9;
console.log(--b); //9

```

## Assignment Operators

Used to assign values to variables.

### = (Simple assignment operator)

Assigns a value to a variable.

```js
let a = 2;
```

### += (addition assignment operator)

Adds a value to a variable

```js
let x = 2;
x += 3; // x = x + 3 (5)
```

### -= (subtraction assignment operator)

Subtracts a value to a variable

```js
let x = 5;
x -= 3; // x = x - 3 (2)
```

### *= (multiplication assignment operator)

Multiplies a variable

```js
let x = 5;
x *= 3; // x = x * 3 (15)
```

### /= (Division assignment operator)

Divides a variable

```js
let x = 15;
x /= 3; // x = x / 3 (5)
```

## Comparison Operators

Used to compare values and return **true** or **false**.

### == (equality operator)

Returns true if the operand on the left is equal to the operand on the right and false if otherwise.

```js
let x = 5;
let y = 6;

console.log(x == y) //false
console.log(x == 5) //true
```
**NOTE: The equality operator ignores the data type of the operands and only compares the values Eg:**

```js
console.log(5 == '5'); // true
```

### === (strict equality operator)

Returns true if the operand on the left is equal to the operand on the right and false if otherwise.

```js
let x = 2;
let y = 3;

console.log(x == y) //false
console.log(x == 2) //true
```
**NOTE: The strict equality operator checks the data type of the operands and does not just compare the values Eg:**

```js
console.log(5 == '5'); // false
```

### != (not equal or inequality operator)

Returns true if the value on the right is not equal to the value on the left and false otherwise.

It does not consider the data type of the operands.

```js
let x = 2;
let y = 3;

console.log (x != y) //true
console.log (x != 2) //false

console.log (2 != '2'); //false
```

### !== (strict not equal to or strict inequality operator)

Returns true if the value on the right is not equal to the value on the left and false otherwise.

It considers the data type of the operands.

```js
let x = 2;
let y = 3;

console.log (x !== y) //true
console.log (x !== 2) //false

console.log (2 !== '2'); //true
```

### > (greater than)

Returns true if the operand on the left is greater than the operand on the right and false otherwise.

```js
let x = 5;
let y = 2;

console.log(x > y) // true
console.log(y > x) // false
```

### < (less than)

Returns true if the operand on the left is less than the operand on the right and false otherwise.

```js
let x = 2;
let y = 5;

console.log(x < y) // true
console.log(y < x) // false
```

### >= (Greater than or equal to)

Returns true if the operand on the left is greater than or equal to the operand on the right.

```js
let x = 30;
let y = 20;

console.log(x >= y); //true
console.log(y >= x); //false
console.log(30 >= 30); //true
```

### <>= (Less than or equal to)

Returns true if the operand on the left is less than or equal to the operand on the right.

```js
let x = 20;
let y = 30;

console.log(x <= y); //true
console.log(y <= x); //false
console.log(20 <= 20); //true
```

## Logical Operators

Used for boolean logic

### Logical _AND_ operator (_&&_)

Returns true only if both operands are true; otherwise, it returns false.

```js 
console.log(true && true); // true
console.log(true && false); // false
```

#### Truth table for the AND operator

<table border="solid" width="400">
        <tr>
            <th>Expression 1</th>
            <th>Expression 2</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>true</td>
            <td>true</td>
            <td>true</td>
        </tr>
        <tr>
            <td>true</td>
            <td>false</td>
            <td>false</td>
        </tr>
        <tr>
            <td>false</td>
            <td>true</td>
            <td>false</td>
        </tr>
        <tr>
            <td>false</td>
            <td>false</td>
            <td>false</td>
        </tr>
    </table>


### Logical _OR_ operator (_||_)

Returns true if atleast one of the operands is true; otherwise, it returns false.

```js 
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false);//false
```

#### Truth table for the OR operator

<table border="solid" width="400">
        <tr>
            <th>Expression 1</th>
            <th>Expression 2</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>true</td>
            <td>true</td>
            <td>true</td>
        </tr>
        <tr>
            <td>true</td>
            <td>false</td>
            <td>true</td>
        </tr>
        <tr>
            <td>false</td>
            <td>true</td>
            <td>true</td>
        </tr>
        <tr>
            <td>false</td>
            <td>false</td>
            <td>false</td>
        </tr>
    </table>
    

### Logical _NOT_ operator (_!_)

Used to negate the boolean value of an expression, it returns true if the expression is false and returns false if the expression is true.

```js
console.log(!true); // false
console.log(!false); // true
```




    
