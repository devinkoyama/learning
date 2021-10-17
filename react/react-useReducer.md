---
title: React.useReducer()
author: Devin Koyama
date: October 17, 2021
---
# React.useReducer()

*October 17, 2021*
[CodeSandbox / Live Example](https://codesandbox.io/s/react-usereducer-xh9ks?file=/src/App.js)

# React.useReducer()
`React.useReducer()` is an alternative to `React.useState()`. It is best used when the next state depends on the current state or when changes in state are complex.

## API
`const [state, dispatch] = React.useReducer(reducerFn, initialState, init);`

`React.useReducer()` can be called with three arguments - one of which is optional.
1. `reducerFn` is a function that handles the way our state is shaped.
2. `initialState` is the initial application state. It can be explicitly defined in-place or from the third and optional argument...
3. `init` is a lazy state initializer function. Gets set to the value of `init(initialState)`.

Similar to `React.useState()`, `React.useReducer()` returns an array of two values. The current application state and a function to modify the state.

## Example
> Create a shopping cart for an online store. Within the cart, we need to know the items, subtotal, tax and grand total.

#### 1. Initialize application `state` and `dispatch` by calling `React.useReducer()`

```javascript
const [state, dispatch] = React.useReducer(cartReducer, {
    items: [],
    subtotal: 0,
    tax: 0,
    grandTotal: 0
});
```

The two arguments passed into `React.useReducer()` are the reducer function to handle state logic of the cart and the inital state of the cart.

```javascript
function cartReducer(state, action) {
  const TAX_RATE = 0.08625; // Sales tax of San Francisco, CA as of 10/15/21
  switch (action.type) {
    case "add":
      return {
        items: state.items.concat(action.item),
        subtotal: state.subtotal + action.item.price,
        tax: state.tax + action.item.price * TAX_RATE,
        grandTotal:
          state.grandTotal + action.item.price + action.item.price * TAX_RATE
      };
    case "remove":
      return {
        items: state.items.filter((item, index) => index !== action.index),
        subtotal: state.subtotal - action.item.price,
        tax: state.subtotal - action.item.price * TAX_RATE,
        grandTotal:
          state.grandTotal - action.item.price - action.item.price * TAX_RATE
      };
    default:
      throw new Error(`Action type of ${action.type} unsupported.`);
  }
}
```

Anytime our application state needs to change, we send a `dispatch` call containing an `action` object that the `cartReducer` will have access to and update state according to `action.type`.

#### 2. Pass `state` and `dispatch` to components

Similar to how a custom handler function can be passed into a component via it's props, we can do the same but with the `dispatch` function. The `dispatch` function sends the `action` object to the `cartReducer` function and application gets updated.

```javascript
<StoreItems addToCart={(item) => dispatch({ type: "add", item })} />
<Cart
  data={state}
  removeFromCart={(item, index) =>
    dispatch({ type: "remove", item, index })
  }
  emptyCart={() => dispatch({ type: "reset" })}
/>
```

For instance, `addToCart` prop on `StoreItems` calls `(item) => dispatch({ type: "add", item })`. Within `cartReducer`, the `action` object is `{ type: "add", item }`.

#### 3. Lazy initialize state

Initial state can optionally be lazily initiated. This is helpful to extract the initial state logic as well as in instances when you want to have "reset" action in your reducer.

```diff
function App() {
+ const initialState = {
+   items: [],
+   subtotal: 0,
+   tax: 0,
+   grandTotal: 0
+ };

+ function init(state) {
+   return state;
+ }

- const [] = React.useReducer(cartReducer, initialState);
+ const [] = React.useReducer(cartReducer, initialState, init);

+ <Cart emptyCart={() => dispatch({ type: "reset", payload: initialState })} />
}

function cartReducer() {
+ case "reset":
+  return init(action.payload);
}

```

## Conclusion
`React.useReducer` offers benefits over `React.useState` when the state is a non-primitive. Often, objects contain many related properties which all or many require updating when one is changed. This is what `React.useReducer` is best at. By extracting state update logic to a reducer, many properties of state can be changed at once using `dispatch` instead of multiple `setState`s.

