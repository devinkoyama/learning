# Typechecking with PropTypes

React PropTypes enable the developer of a component to enforce the props that are passed to a component.

```jsx
function About({ name, age }) {
  return (
    <div>
      My name is, {name} and I'm {age} years old. In 5 years I will be {age + 5}.
    </div>
  );
}

<About name="Devin" age="25" /> 
```

`About`'s desired behavior is to render, `My name is, Devin and I'm 25 years old. In 5 years I will be 30 years old`. Instead it renders `... In 5 years I will be 255 years old`. Without PropTypes this will not cause an error to be thrown, only a headache for the implementor.

The reason being, prop `age` was given a type `string` instead of a type `number`. Causing the compiler to concatenate the number 5 to the string "25".

PropTypes gives warnings of these types of bugs.

To validate prop types at runtime, we need to add:

```javascript
const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      throw new Error(`${propName} needs to be of type "string"`);
    }
  },
  number(props, propName, componentName) {
    if (typeof props[propName] !== 'number') {
      throw new Error(`${propName} needs to be of type "number"`);
  }
};

Message.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
```

We create an object `PropTypes` which defines the types we need to validate. Before React renders our `Message` component it will check it's special property `Message.propTypes` for prop type validation.

With prop type validation in place, we now get a warning message in the console, `age needs to be of type "number"`.

[Live Example](https://codepen.io/devinkoyama/pen/oNWrNOL)
