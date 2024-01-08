function gcd_slow(a, b) {
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

function gcd(a, b) {
  if (b < a) {
    [a, b] = [b, a];
  }
  if (a <= 0) {
    return;
  }
  while (a) {
    [a, b] = [b % a, a];
  }
  return b;
}

function main() {
  console.assert(gcd(0, 10) === undefined);
  console.assert(gcd_slow(0, 10) === undefined);
  console.assert(gcd(1, 1) === 1);
  console.assert(gcd_slow(1, 1) === 1);
  console.assert(gcd(1, 2) === 1);
  console.assert(gcd_slow(1, 2) === 1);
  console.assert(gcd(4, 4) === 4);
  console.assert(gcd_slow(4, 4) === 4);
  console.assert(gcd(5, 15) === 5);
  console.assert(gcd_slow(5, 15) === 5);
  console.assert(gcd(15, 5) === 5);
  console.assert(gcd_slow(15, 5) === 5);
  console.assert(gcd(14, 21) === 7);
  console.assert(gcd_slow(14, 21) === 7);
  console.assert(gcd(2 * 2 * 3 * 7 * 23, 2 * 3 * 3 * 7 * 11) === 42);
  console.assert(gcd_slow(2 * 2 * 3 * 7 * 23, 2 * 3 * 3 * 7 * 11) === 42);
  console.assert(gcd(2 ** 9 * 3 ** 4, 2 ** 7 * 3 ** 5) === 2 ** 7 * 3 ** 4);
  console.assert(
    gcd_slow(2 ** 9 * 3 ** 4, 2 ** 7 * 3 ** 5) === 2 ** 7 * 3 ** 4
  );
}

main();
