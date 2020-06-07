---
title: The First Time SICP Blew My Mind
date: 2019-08-23T00:00-08:00
---

[Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/index.html) is an introduction to computer science textbook used by MIT during the 80's and 90's. It uses [Scheme](https://en.wikipedia.org/wiki/Scheme_%28programming_language%29) to teach the principles of computer programming, plus a lot of recursion, abstraction, and (my favorite) programming by wishful thinking.

For some reason, I still remember the first time it blew my mind. The second chapter introduces a data structure called a cons cell. These are essentially a pair.

```js
// In JavaScript

const cell = cons(1, 2);
```

Historically, Scheme uses `car` to get the first item in a pair, and `cdr` to get the second. You can think of these as `getFirst` and `getSecond`.

```js
getFirst(cell); // => 1
getSecond(cell); // => 2
```

From here we can create layers of abstractions. Imagine using `cons` to combine two numbers into a point. Two points can be combined to create a line.

We can even use `cons` to create linked lists of points, lines, or anything else we want.

```js
const rectangle = cons(line1, cons(line2, cons(line3, cons(line4, null))));
```

After building up several such abstractions, an interesting point is brought up. How is a cons cell itself constructed? One obvious way would be to use an array.

```js
function cons(a, b) {
  return [a, b];
}

function getFirst(pair) {
  return pair[0];
}

function getSecond(pair) {
  return pair[1];
}
```

There is another way. We can use closures to create a data structure out of nothing but functions.

```js
function cons(a, b) {
  return fn => fn(a, b);
}

function getFirst(pair) {
  return pair((a, b) => a);
}

function getSecond(pair) {
  return pair((a, b) => b);
}
```

Harold Abelson mentions in the [corresponding lectures](https://www.youtube.com/watch?v=ymsbTVLbyN4&list=PLE18841CABEA24090&index=24) that this idea might be terrifying. I see his point.

Our layers of abstraction don't require anything as concrete or stable as an array or other data structure. All we need are functions.

However, when I first encountered this, I wasn't terrified. I was ecstatic. Our whole tower of abstraction is built on foundations that are hidden from us. And when done correctly, we can even change our implemenetation without affecting other layers.

See my [SICP exercise solutions on Github](https://github.com/ahuth/sicp).

- - -

Edits:
- 2020-02-04 - Updated the second implementation to [sjl's recommendation](https://lobste.rs/s/jee87g/first_time_sicp_blew_my_mind#c_0lwlon).
- 2020-02-04 - Simplified the second example again, based on [brandonbloom's recommendation](https://lobste.rs/s/jee87g/first_time_sicp_blew_my_mind#c_isgq1v).
- 2020-02-05 - Added more detail about why this was mind blowing for me.