function fibonacci() {
  let [fib1, fib2] = [0, 1];
  return function() {
    let nextFib = fib1 + fib2;
    [fib1, fib2] = [fib2, nextFib];
    return nextFib - fib1;
  }
}

let f = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(f());
}
