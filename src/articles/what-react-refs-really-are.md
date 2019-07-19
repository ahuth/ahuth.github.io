---
title: What React Refs Really Are
date: 2019-07-16
---

Spoiler alert: React refs are stable references to values that can change.

Traditionally we think about refs as a way of interacting with raw DOM elements. Often for managing focus or drawing on a canvas. Something like:

```jsx
class Foo extends Component {
  canvasRef = createRef();

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
```

[React hooks](https://reactjs.org/docs/hooks-overview.html) changed my understanding, because they force us to deal with values that possibly change on every render. Particularly when used with something like the `useEffect` hook, which does setup and teardown when values change.

Sometimes we need to be able to refer to a a value that may change over time, without triggering any cleanup.

Let's illustrate this with the example from Dan Abramov's excellent [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).

A great exercise is to write a `useInterval` hook, closely matching the API of the standard `setInterval`.

```js
useInterval(() => {
  console.log('hello');
}, 200);
```

Our first attempt at writing this may look like like:

```js
function useInterval(callback, interval) {
  useEffect() => {
    const id = setTimeout(callback, interval);
    return () => clearInterval(id);
  }, [callback, interval]);
}
```

And it works! However, there's a problem. As we can see in [this example's demo](https://codesandbox.io/s/react-refs-hooks-1-z68pv), the `useEffect` hook cleans itself up and sets itself up again on every render. Not ideal.

What's happening is that every render of the component using this hook creates a new callback function. Because `callback` is part of the `useEffect` call's dependencies array, the teardown and setup are triggered. 🤔

To solve this, we need a stable reference to something that changes over time. And that's what refs are: **immutable references to mutable values**.

```js
function useInterval(callback, interval) {
  const callbackRef = createRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(callbackRef.current, interval);
    return () => clearInterval(id);
  }, [callbackRef, interval]);
}
```

Now we do some additional work to keep a ref up to date. But our `setTimeout` setup is separate from that, and only happens when the ref changes (which is only the first time the hook runs) or when the interval changes. Check it out in [this new example](https://codesandbox.io/s/react-refs-hooks-2-py172).

These kinds of things pop up relatively frequently when writing custom React hooks. In addition to the use case here (keeping track of a callback created on every render), I've used refs to refer to the last time a callback ran, for calculating elapsed time.

Do you have any good examples?
