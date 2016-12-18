/*BASIC*/

/*Give a Sorted array, Find target, if exist return index, otherwise return -1*/

====> 0 1 2 3 4 5 6 7 8 9 // target = 8
====> l				    r
              m
====>           l       r
                    m       
====>                 l r
                      m
                      
/*Solution 1  left <= right (有 right 移到 left 的左边的情况发生)*/
var binarySearch = function(nums) {
	if(nums === null || nums.length === 0) return -1;

	var left = 0;
	var right = nums.length - 1;
	var mid = 0;

	while(left <= right) {
		mid = left + parseInt((right - left) / 2); // index + size / distance
		if(nums[mid] < target) left = mid + 1;
		else if(nums[mid] > target) right = mid - 1;
		else return mid;
	}
	return - 1;
}

/*Solution 2 left + 1 < right (Better, Left 永远在 Right 左边)*/

====> 0 1 2 3 4 5 6 7 8 9 // target = 8
====> l				    r
              m
====>         l         r
                  m       
====>             l     r
                    m
====>               l   r
					  m
====>                 l r


var binarySearch = function(nums) {
	if(nums === null || nums.length === 0) return -1;

	var left = 0;
	var right = nums.length - 1;
	var mid = 0;

	while(left + 1 < right) {
		mid = left + parseInt((right - left) / 2);
		if(nums[mid] < target) left = mid;
		else if(nums[mid] > target) right = mid;
		else return mid;
	}

	if(nums[left] === target) return left;
	if(nums[right] === target) return right;

	return - 1; 
}