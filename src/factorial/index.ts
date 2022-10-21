function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialWithCache(n: number): number {
  if (n === 0) {
    return 1;
  }

  factorialWithCache.prototype.cache = factorialWithCache.prototype.cache ?? [];

  if (!factorialWithCache.prototype.cache[n]) {
    factorialWithCache.prototype.cache[n] = n * factorialWithCache(n - 1);
  }

  return factorialWithCache.prototype.cache[n];
}

function factorialIterable(n: number): number {
  if (n < 0) {
    return -1;
  }

  let result: number = 1;

  while (n > 0) {
    result *= n;
    --n;
  }
  return result;
}

console.log(factorialIterable(0));
console.log(factorialWithCache(5));
console.log(factorialWithCache(6));

