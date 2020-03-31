---
title: What is the React Scheduler?
date: 2020-03-31
---

(Everything discussed here is for [React version 16.13.0](https://github.com/facebook/react/releases/tag/v16.13.0))

While researching React’s “fiber” architecture, I came across some interesting things that I didn’t expect. One of these is the React scheduler. It, along with Fiber, is central to React’s ability to maintain a responsive UI when under heavy load (such as when animations are running, or when expensive calculations are repeatedly done).

So what is it, and how does it work?

From what I can tell, it’s a system allowing React to schedule tasks of different priorities onto [Javascript’s single-threaded event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).

Due to this single-threaded nature, only one thing at a time can run at a time in Javascript. Any code that React is running can block the browser from responding to user input, scrolling the page, or even updating the UI.

React’s scheduler handles this by allowing callbacks to be enqueued with different priorities. By allowing higher-priority callbacks to take precedence over lower-priority ones, it can do a better job of maintaining a responsive UI.

The only caveat to this is that it’s easy for high-priority work to constantly prevent other work from running ([a problem known as starvation](https://en.wikipedia.org/wiki/Starvation_(computer_science))). To prevent this, each priority level has a timeout associated with it. After the timeout, the scheduler will go ahead and run the callback, even if there is higher priority work.

Priorities are defined in [a file called SchedulerPriorities](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/SchedulerPriorities.js#L14-L18), believe it or not. They are:

- Immediate ([no timeout](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L54), and these take precedence over other priorities)
- User blocking ([250ms timeout](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L56))
- Normal ([5s timeout](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L57))
- Low ([10s timeout](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L58))
- Idle ([essentially an infinite timeout](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L60), and these are not guaranteed to run)

Some examples of tasks with different priorities are:

- [Updating a “root” component in the DOM](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/react-reconciler/src/ReactFiberWorkLoop.js#L1752-L1755) is immediate.
- [Handling browser events such as “click”](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/react-dom/src/events/ReactDOMEventListener.js#L298-L307) is user blocking.
- [Running effects](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/react-reconciler/src/ReactFiberWorkLoop.js#L2242-L2246) is normal.

Tasks are stored in a [min-heap](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/SchedulerMinHeap.js), ordered by their [expiration time](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L316). This is the time the task was enqueued, plus the timeout of the task’s priority level. Once work is enqueued, the scheduler [sets a timeout with its own callback](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L343). This in turn executes as many of the scheduled callbacks as it can, until [control is yielded back to the browser](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/Scheduler.js#L174x).

Right now it looks like the scheduler decides to yield back to the browser [every 5 milliseconds](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L162-L166). However, there is some code to detect the presence of a proposed browser API called isInputPending (behind a feature flag), and [use that if available](https://github.com/facebook/react/blob/730389b9d3865cb6d5c85e94b9b66f96e391718e/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L145).

And that’s the React scheduler. Let me know if I’ve got anything here wrong, or if anything isn’t as clear as it should be.
