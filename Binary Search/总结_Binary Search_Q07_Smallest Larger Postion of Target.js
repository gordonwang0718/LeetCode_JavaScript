/*TYPE 2*/

var smallestLarger = function(nums, target) {
	if(nums === null || nums.length === 0) return -1;
	var left = 0, right = nums.length - 1, mid = 0;

	while(left < right) {
		mid = left + parseInt((right - left) / 2);
		if(nums[mid] < target) left = mid + 1;
		else right = mid;
	}

	return nums[left] === target ? (left === nums.length - 1 ? left : left + 1) : left;
}