# Loops

Loops basically enable multiple executions of a block of code.

The main types of loops in Javascript include:

- For loop
- while loop
- do while loop

## For loop

When the number of executions of a block of code is known, we use a for loop.

**Syntax:**
```js
for(initialization; condition; increment) {
    //code to be executed multiple times
}
```

**Example:**
```js
// A for loop that counts from one to five
for(let i = 1; i <= 5; i++) {
    console.log(i);
}; // for each iteration this loop checks if i is less than or equal to 5 then increments i by 1 until the condition is false
```

**Output:**
```js
1
2
3
4
5
```

## While loops

While loops keep executing a block **while** a condition remains true

**Syntax:**

```js
//initialization 


while(condition) {
    //code to be executed multiple times

    //incremental step
}
```

**Example:**

```js
//while loop that counts from 1 to 5
let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
};
```

**Output**

```js
1
2
3
4
5
```

## do while loop

For the do while loop the block is executed atleast once even if the condition is false from the start.

**Syntax:**

```js
//initialization

do {
    //block of code to be executed including the incremental step
} while(
    condition
)
```

**Example:**

```js
let i = 6;

do{
    console.log(i);
    i++;
} while(
    i <= 5 // i is 6 hence condition is false from the start but the block will still be executed once
);
```
**Output:**
```js
6
```

## Break and continue statements

A **break** statement terminates a loop whenever a particular condition occurs

**Example:**

```js
// A for loop that terminates when i is equal to three

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        break;
    }
    
    console.log(i);
};
```

**Output:**
```js
1
2
```

A **continue** statement is used to skip a particular iteration.

**Example:**

```js
// A for loop that counts from 1 to 5 but skips 3

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    
    console.log(i);
};
```
**Output:**
```js
1
2
4
5
```