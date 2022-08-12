function fibonacci(n) {
    if(n < 2){
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciCache(n) {
    if(n < 2){
        return n;
    }

    fibonacciCache.cache = fibonacciCache.cache ?? [];
    if (!fibonacciCache.cache[n]) {
        fibonacciCache.cache[n] = fibonacciCache(n - 1) + fibonacciCache(n - 2);
    }
    return fibonacciCache.cache[n];
}

console.log(fibonacciCache(5));
console.log(fibonacciCache(6));
console.log(fibonacciCache(7));