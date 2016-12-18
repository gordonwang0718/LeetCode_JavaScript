/*TYPE 2*/


/*Q1 LC33 Search in Rotated Sorted Array*/

var search = function(nums, target) {
    if(nums === null || nums.length === 0) return -1;
    var start = 0;
    var end = nums.length;
    var mid = 0;
    
    while(start < end) {
        mid = start + parseInt((end -start) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > nums[start]) {
            if(target < nums[start] || target > nums[mid]) start = mid + 1;
            else end = mid;
        } else {
            if(target <= nums[end - 1] && nums[mid] < target) start = mid + 1;
            else end = mid
        }
    }
    return -1;
};

/*Q2 LC81 Search in Rotated Sorted Array 2*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(nums === null || nums.length === 0) return false;
    var start = 0;
    var end = nums.length;
    var mid = 0;
    
    while(start < end) {
        mid = start + parseInt((end - start) / 2);
        if(nums[mid] === target) return true;
        if(nums[start] === nums[mid]) start++;
        else if(nums[mid] > nums[start]) {
            if(target < nums[start] || target > nums[mid]) start = mid + 1;
            else end = mid;
        } else {
            if(target <= nums[end - 1] && nums[mid] < target) start = mid + 1;
            else end = mid
        }
    }
    return false;
};