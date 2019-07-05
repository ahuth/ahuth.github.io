---
title: What React Refs Really Are
date: 2019-07-05
---

Spoiler alert: [React refs](https://reactjs.org/docs/refs-and-the-dom.html) are immutable references to mutable values.

Traditionally we think about refs as a way of interacting with raw DOM elements. Often for managing focus or drawing on a canvas. Something like:

```jsx
class Foo extends Component {
  canvasRef = createRef();

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
```

[React hooks](https://reactjs.org/docs/hooks-overview.html) changed my understanding. Starting with Dan Abramov's excellent [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/), it became clear while writing [Tetris in React](https://github.com/ahuth/tetris) that hooks require us idenitify and manage values that change with every render.

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
