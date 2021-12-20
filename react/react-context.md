---
title: React Context
author: Devin Koyama
date: December 20, 2021
---

[CodeSandbox / Live Example](https://codesandbox.io/s/context-1rgtr?file=/src/App.js)

Context creates a way to pass data through a React component-tree without needing to pass props to children components. The data within Context is, global to all components which are below it.

Context is best used to implement things like authentication status or theme. The authentication and theme data are required in all or most components within an application but would be a pain to pass props to each child component starting from the top of the component-tree.

Instead of passing props many levels deep, a Context Provider as the root component will give any value/data to it's child components implicitly.


