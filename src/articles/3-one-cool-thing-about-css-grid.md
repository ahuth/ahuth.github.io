---
title: One Cool Thing About CSS Grid
date: 2019-07-02
---

One thing has blown my mind the most while learning [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout): using [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) to change the layout at different media queries.

Imagine something like:

```css
#page {
  display: grid;
  grid-template-areas:
    "head"
    "nav"
    "main"
    "footer"
}
```

And we can "see" that everything is lined up vertically.

At a different breakpoint, we can have a different layout:

```css
@media (min-width: 700px) {
  #page {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "nav footer"
  }
}
```

😲 This is amazing, because it's clear how the page is laid out at that breakpoint. See it live at [this codepen](https://codepen.io/ahuth/pen/dBewjV).

To learn more about CSS grid, I recommend [Concise Media Queries with CSS Grid](https://thoughtbot.com/blog/concise-media-queries-with-css-grid), by Stephen Lindberg, and [Learning CSS Grid Layout](https://rachelandrew.co.uk/archives/2017/03/03/learning-css-grid-layout/), by Rachel Andrew... or really anything by [Rachel Andrew](https://rachelandrew.co.uk/).
