/*TYPE 1*/

/*LC 34 Search for a Range*/  (Conner Case 考虑不全)
var searchRange = function(nums, target) {
    var result = [];
    result[0] = -1, result[1] = -1;

    var start = 0;
    var end = nums.length - 1;
    var mid = 0;
    while(start + 1 < end) {
        mid = start + parseInt((start + end) / 2);
        if(nums[mid] >= target) {
            end = mid;
        } else {
            start = mid;
        }
        if(nums[start] === target) {
            result[0] = start;
            for(var i = start; i < nums.length; i++) {
                if(nums[i] !== nums[start]) {
                    result[1] = i - 1;
                    return result;
                }
            }
            if(nums[start] === nums[nums.length - 1]) result[1] = nums.length - 1;
        } else if(nums[end] === target) {
            result[0] = end;
            for(var i = end; i < nums.length; i++) {
                if(nums[i] !== nums[end]) {
                    result[1] = i - 1;
                    return result;
                }
            }
            if(nums[end] === nums[nums.length - 1]) result[1] = nums.length - 1;
        }
    }
    return result;
};