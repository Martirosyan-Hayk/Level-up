function isUnique(str: string): boolean {
    let array: number = 0;

    for (let i = 0; i < str.length; ++i) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if (array & (1 << index)) {
            return false;
        }
        array |= (1 << index);
    }

    return true;
}

console.log(isUnique('abcd😸ef🧑🏻')); // true
console.log(isUnique('abcd😸ef😸')); // false

