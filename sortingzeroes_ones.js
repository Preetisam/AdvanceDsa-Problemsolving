// sort an array of 0 and 1

function sortArrayOfZerosAndOnes(arr) {
	let start = 0,
		end = arr.length - 1;

	while (start < end) {
		if (arr[start] === 0) {
			start++;
		}
		if (arr[start] === 1) {
			let temp = arr[end];
			arr[end] = arr[start];
			arr[start] = temp;
			end--;
		}
	}

	return arr;
}

// Invoke
let array = [ 1, 0, 1, 0, 1, 0, 0, 1 ];
console.log(sortArrayOfZerosAndOnes(array));
