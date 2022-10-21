function isPalindrome(inputString: string): boolean {

    for (let i = 0; i < inputString.length / 2; ++i) {
        let j = inputString.length - i - 1;
        if (inputString[i] != inputString[j]) {
            return false;
        }

    }
    return true;
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('helleh'));



