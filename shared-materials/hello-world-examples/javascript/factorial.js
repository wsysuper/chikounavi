function factorialRecursion(x) {
  if (x == 0) {
    return 1;
  }
  return factorialRecursion(x - 1) * x;
}

function factorial(x) {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res *= i;
  }
  return res;
}

function main() {
  let input = 10;
  console.log(factorialRecursion(input));
  console.log(factorial(input));
  input = 100;
  console.log(factorialRecursion(input));
  console.log(factorial(input));
}

main();
