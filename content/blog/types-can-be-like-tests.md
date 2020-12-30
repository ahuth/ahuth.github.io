+++
title = "Types Can Be Like Tests"
date = "2020-11-25T21:21:32-08:00"
tags = ["testing","types","typescript"]
+++

One use of unit tests when writing software is guiding your implementation. Writing tests first helps you understand what you're trying to write, and write just enough code to pass.

Types can do the same thing. Fill out some type annotations first.

```ts
// TypeScript

function every<T>(list: List<T>, fn: (item: T) => boolean): boolean {
  // What goes here?
  return true;
}
```

Then implement the function while keeping the compiler happy.
