---
title: Just Enough React Test Setup
date: 2019-08-18
---

Thomas Countz wrote a great article called [Essential & Relevant: A Unit Test Balancing Act](https://8thlight.com/blog/thomas-countz/2019/02/19/essential-and-relevant-unit-tests.html). In it, he discusses two ideas about writing unit tests.

1. Extracting out and sharing too much setup logic from unit tests is bad, because it can make it challenging to know or control exactly what is happening in each test.
2. But there is a right amount of setup logic to extract away. Enough to leave only **_essential_** and **_relevant_** test setup in each test.

This got me thinking about doing this in React component tests. A good example is:

```js
test('displays their names', () => {
  // Imagine that `getWrapper` is a helper that has everything it needs to return
  // an Enzyme wrapper, and accepts overrides for individual props.
  const wrapper = getWrapper({ human: 'Jane', puppy: 'Snoop' });
  expect(wrapper.find('p').text()).toEqual('Jane and Snoop');
});
```

It contains the setup necessary for what it's testing, but there isn't any extra information.

Contrast that with this one:

```js
test('also displays their names', () => {
  const wrapper = getWrapper({
    human: 'Jane',
    puppy: 'Guinness',
    treats: 100,
  });
  expect(wrapper.find('p').text()).toEqual('Jane and Guinness');
});
```

Now it contains setup for `treats` that isn't relevant to its assertions. This can make the test harder to understand. Especially if there's a lot of irrelevant data.

Just as unfortunate is this:

```js
test('can be disabled', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('button').prop('disabled')).toEqual(true);
});
```

[XUnit Test Patterns](http://xunitpatterns.com/) has a cute name for this: [mystery guest](http://xunitpatterns.com/Obscure%20Test.html#Mystery%20Guest). We've written an assertion for passing down a `disabled` prop, but haven't included any setup in the test itself that would cause it to be `true`. I'd definitely prefer to write:

```js
test('is disabled when there are no treats', () => {
  const wrapper = getWrapper({ treats: 0 });
  expect(wrapper.find('button').prop('disabled')).toEqual(true);
});
```

Writing our tests with, and only with, essential and relevant test setup helps them be understandable. Now we don't have to track down a bunch of irrelevant test setup to understand what we're testing. But we can see in the tests themselves the inputs that result in the tested output.
