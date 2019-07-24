---
title: Raycasting in the Time of React
date: 2019-07-03
---

Ever since reading [Masters of Doom](https://www.goodreads.com/book/show/222146.Masters_of_Doom), I've been intrigued by the Raycasting technique for rendering 3D graphics. Probably because it's sophisticated enough to be impressive and look cool, while being simple enough that I can actually implement it.

At its heart is a simple idea, and a really clever optimization.

The idea is that we "cast" a bunch of rays from an observer's eyes into a scene, from left to right (or vice-versa). Each ray travels until it hits a wall. Based on how far the ray travelled, we know the distance from the observer to the wall along that ray.

Once we know the distance for each ray that's been cast, we draw a vertical bar, corresponding to where the ray struck a wall. The farthur away the ray is, the smaller we draw the vertical bar. Once we've drawn the vertical bar for each ray across the scene, we have the illusion of perspective.

One optimization helps us do this very efficiently, which was important in 1992 (when [Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D) came out). We lay out the walls of our scene on a grid. This has the limitation that walls can only be at right angles to each other.

But it also means that we only have to check for a wall at each grid boundary. And with the power of **_math_**, we can calculate once for each ray the change of X and Y coordinates needed to iterate from one grid boundary to the other. Checking a handful of grid boundaries is way faster than having to check a large number (potentially infinite) of points along the ray's path.

What I've described here isn't exactly **_simple_**, but it's not that bad. In fact, we can implement it in Javascript, and it's fast enough that we can use [React](https://github.com/facebook/react/) to render a bunch of divs as our vertical bars.

Click [here for a live demo](https://ahuth.github.io/raycast/) of my implementation, and [here for the source code](https://github.com/ahuth/raycast).
