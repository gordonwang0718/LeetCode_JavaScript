/*TYPE 2*/

1 2 3 4 8 9 target = 4, 找比 Target 小的最大的
      
      0 1 2 3 4 5
====> 1 2 3 4 8 9
      l         r
          m
====>     l     r
            m
====>     l r

      0 1 2 3 4 5
====> 1 2 3 4 8 9
      s         e
          m
====>       s   e
              m
====>       s e
            m
====>       s
            e



var largestSmaller = function(nums, target) {
	if(nums === null || nums.length === 0) return -1;
	var left = 0;
	var right = nums.length - 1;
	var mid = 0;

	while(left < right) {
		mid = left + parseInt((right - left) / 2);
		if(nums[mid] < target) left = mid + 1;
		else right = mid;
	}

	return nums[left] === target ? (start === 0 ? 0 : start - 1) : left;
}