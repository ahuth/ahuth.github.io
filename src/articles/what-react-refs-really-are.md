---
title: What React Refs Really Are
date: 2020-01-11T00:00-08:00
---

Before [hooks](https://reactjs.org/docs/hooks-overview.html), React refs were used to capture references to DOM nodes, so that we can interact with their APIs.

```jsx
class MyComponent extends React.Component {
  canvasRef = React.createRef();

  componentDidMount() {
    const canvas = this.canvasRef.current;
    // Do things with the canvas element...
  }

  render() {
    return <canvas ref={canvasRef} />;
  }
}
```

There weren't really any other use cases. But that changed with hooks.

When using hooks, there are many times we have to explicitly consider what values are changing, and how this affects setup and teardown.

For example, this logs a message to the console every so often.

```jsx
function MyComponent({ message, interval }) {
  React.useEffect(
    () => {
      const id = setInterval(() => {
        console.log(message);
      }, interval);

      return () => clearInterval(id);
    },
    [message, interval],
  );

  return <span />;
}
```

Any time the message or interval changes, the `setInterval` is cleared and a new one is setup. Often this is exactly what we want. But in this case we don't necessarily need to tear down and re-setup anytime the `message` changes. And for more complex  examples, it may be much better to avoid this. We want an immutable reference to a mutable value.

And this is exactly what refs now help us with.

```jsx
function MyComponent({ message, interval }) {
  const messageRef = useRef(message);

  // Keep a ref updated with the latest `message`.
  React.useEffect(
    () => {
      messageRef.current = message;
    },
    [message],
  );

  // And reference the `current` property of the ref
  // here.
  React.useEffect(
    () => {
      const id = setInterval(() => {
        console.log(messageRef.current);
      });

      return () => clearInterval(id);
    },
    [messageRef, interval],
  )

  return <span />;
}
```

For this example, the `messageRef` object will never change, and will not cause the second `useEffect` call to clear the interval and set a new one up.

This is what React refs "really" are: immutable references to mutable values, which are helpful to control when other hooks re-compute themselves.
