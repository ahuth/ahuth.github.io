---
title: What are Unit Tests For?
date: 2020-06-10T00:00-08:00
---

Everybody has their own definitions of what unit tests are, as opposed to acceptance, integration, and end-to-end tests.

I’ve always thought of unit tests as testing individual functions or classes, regardless of whether they use other functions or classes. And integration tests work through the user interface (which can include command line applications).

But what is the purpose of unit tests? The standard answer is to guide implementation. However, I've been reading [Working Effectively with Legacy Code](https://wiki.c2.com/?WorkingEffectivelyWithLegacyCode), and it has a thoughtful viewpoint.

Unit tests detect changes.

When working on some code, they let you know if you’ve changed functionality (whether or not you intended to). The book uses a metaphor of a vice. You put your code into a vice, which lets you hold its properties constant as you add functionality or refactor.

People sometimes question why we write unit tests, when we can write integration tests. It seems useful, however, to also have tests that more easily detect change, and tell us exactly where and what properties have changed.
