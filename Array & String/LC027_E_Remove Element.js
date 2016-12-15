/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Solution 1: left & right pointer

====> [3, 2, 2, 3, 2, 3]; val = 3;

====> left = 0, right = nums.length - 1 // right = 5

====> while(left <= right) // (0 <= 5)
      ===>  if(nums[left] === val) // (nums[0] === 3);
                nums[0] = nums[5] // nums[0] = 3;
                right--; // right = 4;
      ===>  if(nums[left] === val) // (nums[0] === 3);
                nums[0] = nums[4] // nums[0] = 2;
                right--;


var removeElement = function(nums, val) {
    if(nums === null || nums.length === 0) return 0;
    
    var left = 0;
    var right = nums.length - 1;
    
    while(left <= right) {
        if(nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }
    return right + 1;
    
};

// Solution 1: slow & fast pointer

var removeElement = function(nums, val) {
    if(nums === null || nums.length === 0) return 0;
    var slow = 0;
    var count = 0;
    for(var fast = 0; fast < nums.length; fast++) {
        if(nums[fast] !== val) {
            nums[slow++] = nums[fast];
            count++;
        }
    }
    return count;
};