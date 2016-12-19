/*
	"Merge Sort" is one algorithm used to sort a sequence of numbers.

	First, the sequence is divided further and further into halves(二等分).

	Next, the divided groups are combined.

	When being combined, each groups numbers are arranged so that they are
	ordered from smallest to largest to largest after combanation.
	
	When groups with multiple numbers are combined, the first numbers are compared.

	The remaining rows have their first numbers compared in the same way.

	The combining of group is repeated recursively until all numbers form one group.

	Combining is complete, and the sequence has been sorted.

		index: 0 1 2 3  |  4 5 6 7
		input: 6 4 2 0  |  1 3 5 7
				  /     |    \                      O(1)   --->   O(N/2)     
	 	 6 4 | 2 0            1 3 | 5 7
	  	 /      \             /      \              O(2)   --->   O(N/4) * 2
   	 6 | 4      2 | 0      1 | 3      5 | 7
   	/     \    /     \    /     \    /     \        O(4)   --->   O(N/8) * 2
   6       4  2       0  1       3  5       7
   ...........................................      O(N)   --->   O(2N - 1) ---> O(n)
    \     /    \     /    \     /    \     /         
      4 6        0 2        1 3        5 7          O(N)
       \          /          \          /
          0 2 4 6               1 3 5 7             O(NlogN)
              \                   /
                 0 1 2 3 4 5 6 7           

	Time : O(NlogN) + O(N) = O(NlogN) 
	Space: O(logN) + O(NlogN) = O(N)

*/

/*Solution 1: Carry on Helper Array*/

// Carry on the same size helper array during recursion, Space O(N)

var mergeSort = function (nums) {
	// Corner Case / Edge Case / Base Case: Check null and other order matters
	if(nums === null || nums.length <= 1) return nums; 
	var helper = [];
	// method overloading
	mergeSortHelper(nums, helper, 0, nums.length - 1);
	return nums;

	function mergeSortHelper(nums, helper, left, right) {
		// recursion base case
		if(left === right) return;

		var mid = left + parseInt((right - left) / 2);
		mergeSortHelper(nums, helper, left, mid);
		mergeSortHelper(nums, helper, mid + 1, right);
		merge(nums, helper, left, mid, right);
	}

	function merge(nums, helper, left, mid, right) {
		// reference not primitive type to pass array
		// so prepare helper data in [left, right] from array

		for(var i = left; i <= right; i++) {
			helper[i] = nums[i];
		}

		var left_1 = left;
		var right_1 =  mid + 1;
		while(left_1 <= mid && right_1 <= right) {
			if(helper[left_1] < helper[right_1]) {
				nums[left++] = helper[left_1++];
			} else {
				nums[right++] = helper[right_1++];
			}
		}
		// remaining elements on left side
		while(left_1 <= mid) {
			nums[left++] = helper[left_1++];
		}
		while(right_1 <= right) {
			nums[right++] = helper[right_1++];
		}
	}
} 

/*Solution 2: Use ArrayList*/

// Classical Merge Sort With new ArrayList each recursion Level

var mergeSort = function (nums) {
	// Corner Case / Edge Case / Base Case: Check null and other order matters
	if(nums === null || nums.length <= 1) return nums; 
	var helper = [];
	// method overloading
	return divide(nums, 0, nums.length - 1);

	function divide(nums, left, right) {
		// recursion base case
		var result = [];
		if(left === right) {
			result.push(nums[left]);
			return result;
		}
		var mid         = left + parseInt((right - left) / 2);
		var leftResult  = divide(left, mid);
		var rightResult = divide(mid + 1, right);
		return merge(leftResult, rightResult);
	}

	function merge(leftResult, rightResult) {
		var result = [];
		var left   = 0;
		var right  = 0;
		while(left < leftResult.length && right < rightResult.length) {
			if(leftResult[left] < rightResult[right]) {
				result.push(leftResult[left++]);
			} else {
				result.push(rightResult[right++]);
			}
		}
		// remaining elements on left side or right side
		while(left < leftResult.length) {
			result.push(leftResult[left++]);
		}
		while(right < rightResult) {
			result.push(rightResult[right++]);
		}
		return result;
	}
} 