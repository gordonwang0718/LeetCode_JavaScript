/*TYPE 1*/

/**
 * @param {number[]} nums
 * @return {number}
 */
      0  1  2  3  4  5  6
====> 4, 5, 6, 7, 0, 1, 2
      l                 r 
               m 
====>          l        r
                  m
====>             r

var findMin = function(nums) {
    if(nums === null || nums.length === 0) return -1;
    var left = 0;
    var right = nums.length - 1;
    var mid = 0;
    
    while(left + 1 < right) {
        mid = left + parseInt((right - left) / 2);
        if(nums[mid] < nums[right]) right = mid;
        else if (nums[mid] > nums[right]) left = mid;
        else right--;
    }
    return nums[left] < nums[right] ? nums[left] : nums[right];
};