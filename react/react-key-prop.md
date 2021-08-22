# React Key Prop

The key prop helps React identify and control component instances.

A key needs to be unique to each item from the rendered array.

It is advised not to use an index as a key. Component instances are updated and reused based on their key. If it is an index, moving an item changes the key. Resulting in component state for things like uncontrolled inputs getting updated in unexpected ways. By default, React uses the index as key if not explicitly assigned one.
