---
title: What React Refs Really Are
date: 2020-01-10
---

Before [hooks](https://reactjs.org/docs/hooks-overview.html), React refs were used to capture references to DOM nodes, so that we can interact with their APIs.

```jsx
class MyComponent extends React.Component {
  canvasRef = React.createRef();

  componentDidMount() {
    const context = this.canvasRef.getContext('2d');
    // Do things with the canvas element...
  }

  render() {
    return <canvas ref={canvasRef} />;
  }
}
```

There weren't really any other use cases. However, hooks require us to explicitly consider what values are changing, and how this affects setup and teardown.

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

Any time the message or interval changes, the `setInterval` is cleared and a new one is setup. Often this is exactly what we want. But in this case we don't necessarily need to tear down and re-setup anytime the `message` changes. And for more complex or realistic examples, it would be much better to avoid this. We want an immutable reference to a mutable value.

Which is exactly what refs are.

```jsx
function MyComponent({ message, interval }) {
  const messageRef = useRef(message);

  // Keep the ref updated with the latest `message`.
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

And this is what React refs "really" are: immutable references to mutable values, needed to control when other hooks re-compute themselves.
