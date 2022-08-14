function mergeSorted(arr1: number[], arr2: number[], arr3: number[], arr4: number[], arr5: number[]){

    var result: number[] = [];
    var indexOf1: number = 0;
    var indexOf2: number = 0;
    var indexOf3: number = 0;
    var indexOf4: number = 0;
    var indexOf5: number = 0;
    while(indexOf1 < arr1.length && indexOf2 < arr2.length && indexOf3 < arr3.length && indexOf4 < arr4.length && indexOf5 < arr5.length){
        if(arr1[indexOf1] <= arr2[indexOf2] && arr1[indexOf1] <= arr3[indexOf3] && arr1[indexOf1] <= arr4[indexOf4] && arr1[indexOf1] <= arr5[indexOf5]){
            result.push(arr1[indexOf1]);
            indexOf1++;
        } 
        else if(arr2[indexOf2] <= arr1[indexOf1] && arr2[indexOf2] <= arr3[indexOf3] && arr2[indexOf2] <= arr4[indexOf4]  && arr2[indexOf2] <= arr5[indexOf5]){
            result.push(arr2[indexOf2]);
            indexOf2++;
        } else if(arr3[indexOf3] <= arr1[indexOf1] && arr3[indexOf3] <= arr2[indexOf2] && arr3[indexOf3] <= arr4[indexOf4] && arr3[indexOf3] <= arr5[indexOf5]){
            result.push(arr3[indexOf3]);
            indexOf3++;
        } else if(arr4[indexOf4] <= arr1[indexOf1] && arr4[indexOf4] <= arr2[indexOf2] && arr4[indexOf4] <= arr3[indexOf3] && arr4[indexOf4] <= arr5[indexOf5]){
            result.push(arr4[indexOf4]);
            indexOf4++;
        }
        else if(arr5[indexOf5] <= arr1[indexOf1] && arr5[indexOf5] <= arr2[indexOf2] && arr5[indexOf5] <= arr3[indexOf3] && arr5[indexOf5] <= arr4[indexOf4]){
            result.push(arr5[indexOf5]);
            indexOf5++;
        }
    }
    while(indexOf1 < arr1.length){
        result.push(arr1[indexOf1]);
        indexOf1++;
    }
    while(indexOf2 < arr2.length){
        result.push(arr2[indexOf2]);
        indexOf2++;
    }
    while(indexOf3 < arr3.length){
        result.push(arr3[indexOf3]);
        indexOf3++;
    }
    while(indexOf4 < arr4.length){
        result.push(arr4[indexOf4]);
        indexOf4++;
    }
    while(indexOf5 < arr5.length){
        result.push(arr5[indexOf5]);
        indexOf5++;
    }
    return result;
}

function mergeUnsorted(sortedArray: number[], array: number[]){

    var result: number[] = [];
    var indexOf1 = 0;
    var indexOf2 = 0;
    while(indexOf1 < sortedArray.length && indexOf2 < array.length){
        const min = Math.min(...array);
        const index = array.indexOf(min);

        if(sortedArray[indexOf1] <= min){
            result.push(sortedArray[indexOf1]);
            indexOf1++;
        }
        else{
            result.push(min);
            array.splice(index, 1);
        }
    }
    while(indexOf1 < sortedArray.length){
        result.push(arr1[indexOf1]);
        indexOf1++;
    }
    while(indexOf2 < array.length){
        const min = Math.min(...array);
        const index = array.indexOf(min);

        result.push(min);
        indexOf2++;
    }
    return result;
}

var arr1: number[] = [];
var arr2: number[] = [];
var arr3: number[] = [];
var arr4: number[] = [];
var arr5: number[] = [];

for(var i = 0; i < 2; i++){
    for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr1.push(Math.floor(Math.random() * 10000));
    }
    for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr2.push(Math.floor(Math.random() * 10000));
    }
    for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr3.push(Math.floor(Math.random() * 10000));
    }
    for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr4.push(Math.floor(Math.random() * 10000));
    }
    for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr5.push(Math.floor(Math.random() * 10000));
    }
}
const sortedArr1 = arr1.sort(function(a, b) {
    return a - b;
  });
const sortedArr2 = arr2.sort(function(a, b) {
    return a - b;
});
const sortedArr3 = arr3.sort(function(a, b) {
    return a - b;
});
const sortedArr4 = arr4.sort(function(a, b) {
    return a - b;
});
const sortedArr5 = arr5.sort(function(a, b) {
    return a - b;
});


console.log(mergeUnsorted(sortedArr1, arr2));
console.log(mergeSorted(sortedArr1, sortedArr2, sortedArr3, sortedArr4, sortedArr5));