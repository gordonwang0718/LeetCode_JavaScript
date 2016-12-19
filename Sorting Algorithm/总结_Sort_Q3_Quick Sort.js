/*
	"Quick Sort" is one algorithm used to sort a sequence of numbers.

	 One characteristic of quickSort is that it involves fewer comparisons 
	 and swaps than other algorithms, so it's able to sort quickly in many cases.

	 The First operation targets the entire sequence of numbers.

	 A number is chosen as a reference for sorting. This number is called the "pivot".
	 The pivot is normally a number chosen at random. 

	 Next, a left marker will be placed on the leftmost number, and a right marker will be
	 placed on the rightmost number.

	 The qucik sort algorithm uses these markers to repeatedly perform rounds of operations recursively.

	 when the "left" marker reaches a number greater than or equal to the pivot number, it stops moving.

	 Next, the "right" marker will move to the left.

	 When the "right" marker reaches a number less than the pivot number, it stops.

	 when both "left" and "right" markers have stopped, the markers' number are swapped.

	 In this way, the "left" marker acts to find numbers greater than or equal to the pivot, 
	 and the rights marker finds numbers less than the pivot.

	 After the swap, the "left" marker cotinues moving to the right.

	 Like before....

	 when "left" and "right" stop at same number, that number is swapped with the pivot number.

	 ......

*/

/*Solution 1: Two pointer toward, not stable*/

var qucikSort_1 = function(nums) {
	if(nums === null || nums.length <= 1) return nums;
	// overLoading Here
	sortHelper(nums, 0, nums.length - 1);
	return nums;

	function sortHelper(nums, left, right) {
		// recursion base case;
		if(left >= right) return;

		// find pivot and do partition
		var pivotIdx = findPosPatition(nums, left, right);
		sortHelper(nums, left, pivotIdx - 1);
		sortHelper(nums, pivotIdx + 1, right);
	}

	function findPosPatition(nums, left, right) {
		// Solution 1
		var pivotIdx = left + Math.random() * (right - left + 1);
		var pivotVal = nums[pivotIdx];
		swap(nums, pivotIdx, right);
		// Solution 2
		var left_1  = left;
		var right_1 = right - 1; // nums[right] is now the pivot;

		while(left_1 <= right_1) {
			if (nums[left_1] < pivotVal) {
				left_1++;
			} else if (nums[right_1] >= pivotVal) { // maybe duplicate
				right_1--;					
			} else {
				swap(nums, left_1++, right_1--);
			}
		}
		swap(nums, left_1, right);
		return left_1;
	}

	function swap(nums, i, j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}
}

/*Solution 2: two pointer forward, stable*/
		var slow = left;
		var fast = left; // array[right] is now the pivot
		
		while (fast <= right) {
			if (nums[slow] < pivotValue) {
				slow++;
			}
			if (nums[fast] < pivotValue) {
				swap(nums, slow, fast);
				slow++;
			}
			fast++;
		}
		return slow;