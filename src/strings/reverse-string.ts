interface  String {
    customSplit: () => string[];
}

interface Array<T> {
    customJoin: () => string;
    customReverse: () => T[];
}

String.prototype.customSplit = function(): string[] {
    let array: string[] = [];

    for (const element of this) {
        array.push(element);
    }

    return array;
}

Array.prototype.customJoin = function(): string {
    let result: string = '';
    for (const element of this.it) {
        result += element;
    }

    return result;
}

Array.prototype.customReverse = function(this): typeof this[] {
    let array: typeof this = [];
    for (let i = this.length - 1; i >= 0; i--) {
        array.push(this[i]);
    }

    return array;
}

let str = 'a b cd😸ef';
let str1 = '😸';


console.log(str.customSplit().customReverse().customJoin());
