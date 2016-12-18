/*Q1 Closest Position of Target*/

var closestPosition = function(nums, target) {
	// Corner Case
	if(nums === null || nums.length === 0) return -1;
	var left = 0, right = nums.length - 1, mid = 0;
	while(left + 1 < right) {
		mid = left + parseInt((right - left) / 2);
		if(nums[mid] < target) left = mid;
		else if(nums[mid] > target) right = mid;
		else return mid;
	}

	return Math.abs(nums[left] - target) < Math.abs(nums[right] - target) ? left : right;
}

/*Q2 K Closest Position of Target*/
var kClosestPosition = function(nums, target) {
	// Corner Case
	if(nums === null || nums.length === 0) return -1;
	var left = 0, right = nums.length - 1, mid = 0;
	while(left + 1 < right) {
		mid = left + parseInt((right - left) / 2);
		if(nums[mid] < target) left = mid;
		else right = mid;
		
		var result = [];
		for(var i = 0; i < k; i++) {
			if(right >= nums.length || left >= 0 && Math.abs(nums[left] - target) < Math.abs(nums[right] - target)) {
				result[i] = left--;
			} else {
				result[i] = right++;
			}
		}
	}

}