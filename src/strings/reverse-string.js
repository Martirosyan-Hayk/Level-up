String.prototype.customSplit = function () {
    var array = [];
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var element = _a[_i];
        array.push(element);
    }
    return array;
};
Array.prototype.customJoin = function () {
    var result = '';
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var element = _a[_i];
        result += element;
    }
    return result;
};
Array.prototype.customReverse = function () {
    var array = [];
    for (var i = this.length - 1; i >= 0; i--) {
        array.push(this[i]);
    }
    return array;
};
var str = 'a b cd😸ef';
var str1 = '😸';
console.log(str.customSplit().customReverse().customJoin());
