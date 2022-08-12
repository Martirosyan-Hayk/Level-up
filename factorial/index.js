function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialCache(n) {
    if (n === 0) {
      return 1;
    }
    factorialCache.cache = factorialCache.cache ?? [];
    if (!factorialCache.cache[n]) {
        factorialCache.cache[n] = n * factorialCache(n - 1);
    }
    return factorialCache.cache[n];
}


console.log(factorialCache(5));
console.log(factorialCache(6));