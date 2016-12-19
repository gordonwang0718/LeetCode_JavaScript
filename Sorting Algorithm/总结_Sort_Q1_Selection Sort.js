/*	
	Using a Linear Search, the smallest value in the sequence is located.
  	The smallest value swaps with the leftmost number and is considered fully sorted.
  	Furthermore, if the smallest value happens to already be in the leftmost position, no opperation
  	is carried out.
  	The same operations are repeated until all of the numbers are fully sorted.
*/

var selectionSort = function(nums) {
	if(nums === null || nums.length === 0) return nums;

	var minIdx;

	for(var i = 0; i < nums.length - 1; i++) { // i < nums.length - 1, 不需要走到最后一位
		minIdx = i;
		for(var j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[minIdx]) minIdx = j;
		}
		swap(nums, i, minIdx);
	}

	return nums;

	function swap(nums, i, j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}
}

/*Time Space O(n ^ 2)*/