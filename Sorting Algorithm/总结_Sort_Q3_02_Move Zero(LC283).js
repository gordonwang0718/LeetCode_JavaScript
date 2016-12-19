/*Solution 1: Slow Fast Pointer 同向*/
var moveZeroes = function(nums) {
    if(nums === null || nums.length <= 1) return;
    var slow = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            var tmp = nums[slow];
            nums[slow] = nums[i];
            nums[i] = tmp;
            slow++;
        }
    }
};

/*Solution 2: left right pointer 相向, 最后的结果没有 sort*/

var moveZeroes = function(nums) {
    if(nums === null || nums.length <= 1) return;
    var left = 0;
    var right = nums.length - 1;
    
    while(left <= right) {
        if(nums[left] !== 0) left++;
        else if(nums[right] === 0) right--;
        else swap(nums, left++, right--);
    }
    
    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};