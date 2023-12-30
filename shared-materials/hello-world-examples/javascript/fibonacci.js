function fibonacciRecursion(x) {
  if (x == 0 || x == 1) {
    return x;
  }
  return fibonacciRecursion(x - 1) + fibonacciRecursion(x - 2);
}

function fibonacci(x) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < x; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

function main() {
  let n = 10;
  for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
  }
}

main();
