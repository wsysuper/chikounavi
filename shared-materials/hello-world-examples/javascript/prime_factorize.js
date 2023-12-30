function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function primeFactorize(x) {
  const res = [];
  let i = 2;
  while (x > 1) {
    if (x % i === 0) {
      x /= i;
      res.push(i);
      continue;
    }
    i++;
  }
  return res;
}

function main() {
  console.log(primeFactorize(0)); // []
  console.log(primeFactorize(1)); // []
  console.log(primeFactorize(2)); // [ 2 ]
  console.log(primeFactorize(36)); // [ 2, 2, 3, 3 ]
  console.log(primeFactorize(120)); // [ 2, 2, 2, 3, 5 ]
  console.log(primeFactorize(11111)); // [ 41, 271 ]
  console.log(primeFactorize(111111)); // [ 3, 7, 11, 13, 37 ]
}

main();
