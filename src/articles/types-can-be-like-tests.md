---
title: Types Can Be Like Tests
date: 2020-01-19
---

This is sure to upset some people, but here goes: writing types can fulfill the same role as writing tests. Particularly test-driven development. Let me explain.

One way of thinking about tests is that well-written ones check that the behavior of our code is what we expect it to be.

Another way of thinking about them, though, is that they influence how we write our code. We write the minimum amount needed to make the tests pass, and then refactor. From this standpoint, types can be used in a similar way.

Frequently I find myself writing code and not knowing the best way to proceed. Consider a function in a [cellular automata implementation](https://github.com/ahuth/automata) to compute a next iteration given a set of rules.

```ts
function next(row: Row, rules: Rule[]): Row {
  // ??? What do I put here?
}
```

For this particular cellular automata we'll end up comparing the "neighborhood" of cells that are close together, in order to compute the next value of a particular cell. Not sure how to do that, yet, but let's write a placeholder function with types.

```ts
function neighbors(row: Row): cell[][] {
  return [];
}
```

And now we can "use" it and ensure everything type-checks.

```ts
function next(row: Row, rules: Rule[]): Row {
  return neighbors(row).map(function (neighbors) {
    const rule = Rule.find(rules, neighbors);
    return rule.output;
  });
}
```

Even though we haven't figured out all the code, we've used the types to help us figure out how to implement `next`. And now that we know that everything type checks, we can go implement the rest of the functionality we need. The exact example here isn't important (I happened to work on a [cellular automata](https://ahuth.github.io/automata/) recently, so it's top of mind). But for me, using types can help guide my implementation, much in the same way that tests can.
