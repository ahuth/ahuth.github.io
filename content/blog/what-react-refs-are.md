+++
title = "What React Refs Are"
date = "2020-11-29T21:26:54-08:00"
tags = ["react","javascript",]
+++

Many people are familiar with using [React refs to access DOM elements](https://reactjs.org/docs/refs-and-the-dom.html).

```jsx
import { useRef } from 'react';

function MyComponent() {
  const buttonRef = useRef();

  function handleClick() {
    // Can access the button node. For example
    console.log(buttonRef.current);
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
    >
      click me
    </button>
  );
}
```

It took me a while to understand that they're much more than that. Refs let you capture a mutable value as a property in an object ([in a "box", as the official docs say](https://reactjs.org/docs/hooks-reference.html#useref)).

As the value of `ref.current` changes, the ref object itself stays constant. This means you can use refs with `useEffect` to access a changing value, without causing the effect itself to teardown.

(Also works with `useCallback` and `useMemo`).

For example, you can capture a callback in a ref, so that users of an API don't have to explicitly memoize it.

```js
import { useEffect, useRef } from 'react';

function useMyCustomHook(callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    // Keep the changing `callback` value up to date in the ref.
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // Do something with `callbackRef.current` here, such as
    callbackRef.current();
  }, [callbackRef]);
}
```

Think of refs as immutable references to mutable values. Someone else pointed out another way of viewing them, that may be more intuitive to understand: refs are like instance variables on a class.
