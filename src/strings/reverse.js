String.prototype.customSplit = function() {
    let array = [];

    for (const element of this) {
        array.push(element);
    }

    return array;
}

Array.prototype.customJoin = function() {
    let result = '';
    for (const element of this) {
        result += element;
    }

    return result;
}

Array.prototype.customReverse = function() {
    let array = [];
    for (let i = this.length - 1; i >= 0; i--) {
        array.push(this[i]);
    }

    return array;
}

let str = 'a b cd😸ef';
let str1 = '😸';


console.log(str.customSplit().customReverse().customJoin());
