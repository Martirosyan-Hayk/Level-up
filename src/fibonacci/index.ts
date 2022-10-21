function fibonacci(n: number): number {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciWithCache(n: number): number {
    if (n < 2) {
        return n;
    }

    fibonacciWithCache.prototype.cache = fibonacciWithCache.prototype.cache ?? [];

    if (!fibonacciWithCache.prototype.cache[n]) {
        fibonacciWithCache.prototype.cache[n] =
            fibonacciWithCache(n - 1) + fibonacciWithCache(n - 2);
    }

    return fibonacciWithCache.prototype.cache[n];
}

function fibonacciIterable(n: number): number {
    if (n <= 0) {
        return -1;
    }

    const result = [1, 1];

    for (let i = 2; i < n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[result.length - 1];
}

console.log(fibonacciIterable(10));
console.log(fibonacciWithCache(5));
console.log(fibonacciWithCache(6));
console.log(fibonacciWithCache(7));