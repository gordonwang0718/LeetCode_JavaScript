====> xxxxxxxxxxxxxxxxxxxxxxxxxTxxxxxxxxxxxxxxxxxxxx...

====> SE
====> _S__E
====> _____S______E
====> ____________S______________E

var unknowSize = function(nums, target) {
	if(nums === null || nums.length === 0) return -1;
	var start = 0;
	var end = 1;

	while(nums[end] !== null && nums[end] < target) {
		start = end;
		end = end * 2;
	}

	while(start <= end) {
		var mid = start + parseInt((end - start) / 2);
		if(nums[mid] === target) return mid;
		else if(nums[mid] < target) left = mid + 1;
		else end = mid - 1;
	}

	return -1;
}