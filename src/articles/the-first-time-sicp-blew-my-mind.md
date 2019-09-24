---
title: The First Time SICP Blew My Mind
date: 2019-08-23
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

How is a cons cell constructed? One obvious way would be to use an array.

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
// Slightly simplified from the implementation in the book.

function cons(a, b) {
  return pick => pick ? a : b;
}

function getFirst(pair) {
  return pair(true);
}

function getSecond(pair) {
  return pair(false);
}
```

Harold Abelson mentions in the [amazing corresponding lectures](https://www.youtube.com/watch?v=ymsbTVLbyN4&list=PLE18841CABEA24090&index=24) that this idea might be terrifying. His point (I think) was about the nature of abstractions. But I wasn't terrified - I was ecstatic, and fell in love with the book. It felt like some deeper secret of the universe had been revealed to me.

Looking back on it, the example doesn't feel that mind-blowing anymore. But there's so much wisdom in the book. You just have to work for it.

See my [SICP exercise solutions on Github](https://github.com/ahuth/sicp).
