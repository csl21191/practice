var arr = ["chandu", "sam", "deepak", "sanjay", "anurag", "narayan"];

function findLocationOfArrayElement(arr, item) {
	return arr.indexOf(item);
}

var arr1 = [1, 2, 4, 12, 56];

function arraySum(array) {
	var sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];  
	}
	return sum;
}

function removeItemFromArray(array, item) {
	return array.splice(array.indexOf(item), 1);
}

function addItemAtTheEndOfArray(array, item) {
	array.push(item);
	return array;
}

function mergeArray(array1, array2) {
	return array1.concat(array2);
}

function addItemInAnywhereInArray(array, item, position) {
	array.splice(position, 0, item);
	return array;
}