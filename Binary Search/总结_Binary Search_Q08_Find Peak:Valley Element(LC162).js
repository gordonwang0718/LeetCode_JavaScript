/*Q1 Find Peak Element*/

/*Solution 1: NlogN*/
var findPeakElement = function(nums) {
    if(nums === null || nums.length === 0) return -1;
    
    var start = 0;
    var end = nums.length - 1;
    
    while(start + 1 < end) {
        var mid = start + parseInt((end - start) / 2);
        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] < nums[mid - 1]){
            end = mid;
        } else {
            start = mid;
        }
    }
    
    return (nums[start] < nums[end]) ? end : start;
};

      0  1  2  3  4  5  6  7
====> 1  2  3  4  5  6  1  2
i = 1
====>                      i


/*Solution 2: N*/
var findPeakElement = function(nums) {
    if(nums === null || nums.length === 0) return -1;
    if(nums.length === 1) return 0;
    
    for(var i = 1; i < nums.length; i++) {
        if(i + 1 <= nums.length - 1) {
            if(nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
                return i;
            }
        }
        if(nums[i - 1] > nums[i]) {
            return i - 1;
        }
    }
    return nums.length - 1;
};