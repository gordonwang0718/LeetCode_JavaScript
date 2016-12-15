/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    helper(nums, 0, result);
    return result;
    
    function helper(nums, index, result) {
        if(index === nums.length) {
            result.push(nums.concat());
            return;
        }
        
        for(var i = index; i < nums.length; i++){
            swap(nums, index, i);
            helper(nums, index + 1, result);
            swap(nums, index, i);
        }
    }
    
    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};