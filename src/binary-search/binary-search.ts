function binarySearch(array: number[], key: number){
	
	if(array.length == 0){
		return -1;
	}

	let start: number = 0;
	let end: number = array.length - 1;
	
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

let arr: number[] = [];
for(var i = 0; i < 1; i++){
   for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr.push( Math.floor(Math.random() * 50));
    }
}

const sortedArr: number[] = arr.sort(function(a, b) {
    return a - b;
  });


console.log(binarySearch(sortedArr, 8));
