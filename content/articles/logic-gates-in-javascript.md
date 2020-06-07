---
title: Logic Gates in JavaScript
date: 2020-05-18T00:00-08:00
---

[Code, by Charles Petzold](http://www.charlespetzold.com/code/), is a fascinating look at building computers from the ground up. Starting in Chapter 11, it walks through creating logic gates. These can be used (amongst other things) to add numbers together.

My first thought was to try to build some of these myself. However, I’m not sure of where to get the necessary supplies, and not how to solder. I’m not even sure if soldering is required (or how to spell soldering).

What I can do is implement logic gates out in code. Let’s try it.

An AND gate can be thought of as two switches connected by a wire in series. Both of the switches would have to be pressed for a signal to pass through the wire.

Using the traditional representation of 0 for low (or no) voltage, and 1 for high voltage, we can write this in JavaScript as

```js
function and(a, b) {
  if (a) {
    if (b) {
      return 1;
    }
  }
  return 0;
}

and(0, 0); // => 0
and(0, 1); // => 0
and(1, 0); // => 0
and(1, 1); // => 1
```

Likewise, we can build an OR gate with two parallel switches. A signal would pass through the wire if either switch was pressed.

```js
function or(a, b) {
  if (a) { return 1; }
  if (b) { return 1; }
  return 0;
}

or(0, 0); // => 0
or(0, 1); // => 1
or(1, 0); // => 1
or(1, 1); // => 1
```

Notice that we can sort of see the structure of the logic gates in the code. The AND gate looks like it’s in series, due to the nested conditionals. The OR gate looks like it’s in parallel, with each conditional executing independently.

Next, we need an inverter (or NOT)

```js
function invert(input) {
  if (input) { return 0; }
  return 1;
}

invert(0); // => 1
invert(1); // => 0
```

We can use the inverter and AND to create NAND. Think of it as the inverse of AND - it returns 0 only when both inputs are 1.

```js
function nand(a, b) {
  return invert(and(a, b));
}

nand(0, 0); // => 1
nand(0, 1); // => 1
nand(1, 0); // => 1
nand(1, 1); // => 0
```

By combining AND, OR, and NAND we can create the last gate we’ll need - exclusive or (XOR). It returns 1 if, and only if, one of its inputs is 1.

```js
function xor(a, b) {
  return and(
    or(a, b),
    nand(a, b),
  );
}

xor(0, 0); // => 0
xor(0, 1); // => 1
xor(1, 0); // => 1
xor(1, 1); // => 0
```

(Exercise for the reader: implement XOR using only NAND gates)

So far, so good. Nothing too crazy, yet. But how can we use these to add binary numbers together?

Let’s think about how we add decimal numbers - for example, 16 + 7.

```
 16
+ 7
 --
 ??
```

We start by adding together the least significant digits. 6 plus 7 is 13. We use the digit 3, but carry the 1 forward to the next addition. For the next digit, we add 1 (from 16), 0 (from the 07), and the carried 1, leaving us with 2. Combining the digits, we get 23.

```
 1
 16
+ 7
 --
 23
```

For binary numbers, it’s exactly the same. We add each bit of two numbers together, and carry forward 1 if necessary. For a single bit, this looks like the following:

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10
```

There are two components to the result - the sum itself, and a potential "carry" that will be applied to the next digit:

```
0 + 0 = 0 sum and 0 carry
0 + 1 = 1 sum and 0 carry
1 + 0 = 1 sum and 0 carry
1 + 1 = 0 sum and 1 carry
```

In the 1 + 1 example, we carry forward 1 to the next binary digit, resulting in 10 (or 2 in decimal).

What’s interesting here is that the "sum" portion of the result has the same output as XOR, and carry has the same output as AND. We can use those logic gates to implement this logic, creating what’s called a "half adder".

```js
function halfAdder(a, b) {
  return {
    sum: xor(a, b),
    carry: and(a, b),
  };
}

halfAdder(0, 0); // => { sum: 0, carry: 0 }
halfAdder(0, 1); // => { sum: 1, carry: 0 }
halfAdder(1, 0); // => { sum: 1, carry: 0 }
halfAdder(1, 1); // => { sum: 0, carry: 1 }
```

This doesn’t quite get us what we need (which is why it’s only a "half" adder). To really add binary digits together, we need to be able to handle a possible "carry" from the addition of previous digits.

```js
function fullAdder(a, b, carryIn) {
  const initialAddition = halfAdder(a, b);
  const additionWithCarry = halfAdder(carryIn, initialAddition.sum);

  return {
    sum: additionWithCarry.sum,
    carry: or(initialAddition.carry, additionWithCarry.carry),
  };
}

fullAdder(0, 0, 0); // => { sum: 0, carry: 0 }
fullAdder(0, 1, 0); // => { sum: 1, carry: 0 }
fullAdder(1, 0, 0); // => { sum: 1, carry: 0 }
fullAdder(1, 1, 0); // => { sum: 0, carry: 1 }
fullAdder(0, 0, 1); // => { sum: 1, carry: 0 }
fullAdder(0, 1, 1); // => { sum: 0, carry: 1 }
fullAdder(1, 0, 1); // => { sum: 0, carry: 1 }
fullAdder(1, 1, 1); // => { sum: 1, carry: 1 }
```

With a full adder we can add each digit in a number together, and carry forward the "carry" to each digit. For two 4-bit numbers (0-16), this looks like:

```js
// I’ve chosen to represent binary numbers as an array where
// the least significant digit is first.
const numberA = [1, 0, 1, 0]; // 5
const numberB = [0, 1, 1, 1]; // 14

// Add each digit together. Initially the "carry" is 0, and
// we bring each addition’s "carry" forward to the next.
const first = fullAdder(numberA[0], numberB[0], 0);
const second = fullAdder(numberA[1], numberB[1], first.carry);
const third = fullAdder(numberA[2], numberB[2], second.carry);
const fourth = fullAdder(numberA[3], numberB[3], third.carry);

const result = [
  first.sum,
  second.sum,
  third.sum,
  fourth.sum,
  fourth.carry,
];
// [1, 1, 0, 0, 1]  => 19
```

(Exercise for the reader: implement this in a loop so that numbers of any size can be added)

Note that any remaining carry is added as the last digit, and the output number can have more bits than the inputs. This makes sense as two 4-bit numbers can add up to a 5-bit number.

The circuit we’ve created is called a "ripple adder". Modern computers tend to implement addition a little bit differently for performance reasons, but they could use this design.

I still think it would be fun to try to build this with physical wires and transistors. But one of the nice things about software is we can simulate things and learn about how they work, without needing to build something physical.
