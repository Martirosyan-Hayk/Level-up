function binarySearch(array, key){
	
	if(array.length == 0){
		return -1;
	}

	let start = 0;
	let end = array.length - 1;
	
	while(start <= end) {
		

		let middle = ~~((start + end) / 2);
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

let arr = [];
for(var i = 0; i < 1; i++){
   for(var j = 0; j < Math.floor(Math.random() * 50); j++){
        arr.push( Math.floor(Math.random() * 50));
    }
}

const sortedArr = arr.sort(function(a, b) {
    return a - b;
  });


console.log(binarySearch(sortedArr, 8));
