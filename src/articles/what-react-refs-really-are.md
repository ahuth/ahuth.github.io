---
title: What React Refs Really Are
date: 2019-12-15
---

Before [hooks](https://reactjs.org/docs/hooks-overview.html), React refs were used to capture references to DOM nodes.

```jsx
class MyComponent extends React.Component {
  theRef = React.createRef();

  render() {
    return <span ref={theRef} />;
  }
}
```

There weren't really any other use cases. However, the introduction of hooks brought new ways of doing things, and revealed the true nature of refs.

With hooks there are many times a value or callback is re-computed when another value changes. For example, with `useEffect`:

```jsx
function MyComponent({ someValue }) {
  React.useEffect(
    () => {
      someExpensiveComputation(someValue);

      return () => tearDown();
    },
    // Deps array. When this value changes, the `tearDown` function
    // will be ran, followed by re-running the effect.
    [someValue],
  );

  return <span />;
}
```

In this example, the effect will be torn down and re-ran anytime `someValue` changes. This is often exactly what we want. But sometimes we want to use a value, but not recompute anything when it changes. We want an immutable reference to a mutable value. Which is exactly what refs are.

```jsx
function MyComponent({ someValueRef }) {
  React.useEffect(
    () => {
      someExpensiveComputation(someValueRef.current);

      return () => tearDown();
    },
    // Assume that `someValueRef` was created via `React.useRef`. The
    // ref object itself will never change.
    [someValueRef],
  );

  return <span />;
}
```

For this example, the `someValueRef` ref object will never change, and will not trigger the effect to teardown and re-run. But we can still access it's `current` value, which may change on us. In fact, it's common for the value to be updated frequently somewhere else:

```jsx
// In some other component...

const someValueRef = useRef(null);

useEffect(
  () => {
    someValueRef.current = somveValue;
  }
  [someValue],
);
```

The ref object will always have the most recent value of `someValue`, but won't trigger our other effect to re-compute itself when the value changes.

And this is what React refs "really" are: immutable references to mutable values, needed to control when other hooks re-compute themselves. How do you find yourself using them?
