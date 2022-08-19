function binarySearch(array: number[], start: number, end: number, key: number){
	
	if(array.length == 0){
		return -1;
	}
	
	while(start <= end) {
		

		let middle: number = ~~((start + end) / 2);
		if(key == array[middle]) {
			return middle;
		}else if(key > array[middle]) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return -1;
}

function binarySearchRecursive(array: number[], start: number, end: number, key: number){
	
	if(start >= end){
		return -1;
	}

	let middle: number = ~~((start + end) / 2);

	if(array[middle] == key) {
		return middle;
	} else if (arr[middle] > key) {
		return binarySearchRecursive(array, start, middle - 1, key);
	} else {
		return binarySearchRecursive(array, middle + 1, end, key);
	}
}

let arr: number[] = [];
for(var i = 0; i < 1; i++){
   for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr.push( Math.floor(Math.random() * 50));
    }
}

const sortedArr: number[] = arr.sort(function(a, b) {
    return a - b;
  });


console.log(binarySearch(sortedArr, 0, sortedArr.length, 8));
console.log(binarySearchRecursive(sortedArr, 0, sortedArr.length, 8));
