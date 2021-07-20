function outerFunction() {
  let x = 1;
  function innerFunction() {
    x++;
    return x;
  }
  return innerFunction;
}

let increment = outerFunction();
console.log(increment()); // 2
console.log(increment()); // 3

let newIncrement = outerFunction();
console.log(newIncrement()); // 2
console.log(newIncrement()); // 3

console.log(increment()); // 4;