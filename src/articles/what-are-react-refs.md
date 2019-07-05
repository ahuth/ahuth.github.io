---
title: What Are React Refs?
date: 2019-07-05
---

Spoiler alert: [React refs](https://reactjs.org/docs/refs-and-the-dom.html) are immutable references to mutable values.

- How we usually think about refs.
  - As references to DOM elements, often for styling
  - Give example

- Enter hooks.
  - Hooks changed this
  - Started to make the connection with https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  - Cemented when implementing my own hooks for https://github.com/ahuth/tetris

- Some problems we face when using hooks.
  - Hooks need stable references to prevent unnecessary setup and tear down
  - But there are several mutable things we need to work with:
    - DOM elements
    - Timeout/interval ids
    - Callback functions (for a slightly nicer API)

- How refs help them.
  - With refs we can have stable references to these things
  - Avoiding unnecessary setup/tear down
  - Just have to remember to re-capture the ref as necessary

- Recap what refs are.
  - Immutable references to mutable values.
  - Or stable references to something that can change.
