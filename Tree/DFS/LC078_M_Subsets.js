
// Solution 1: DFS - 2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    var curArr = [];
    nums.sort(function(a, b) {return a - b});
    helper(nums, curArr, 0, result);
    return result;
    
    function helper(nums, curArr, index, result) {
        result.push(curArr);
        for(var i = index; i < nums.length; i++) {
            curArr.push(nums[i]);
            helper(nums, curArr.concat(), i + 1, result);
            curArr.pop();
        }
    }
};

// Solution 2: DFS - 1

var subsets = function(nums) {
    var result = [];
    var curArr = [];
    nums.sort(function(a, b) {return a - b});
    helper(nums, curArr, 0, result);
    return result;

    function helper(nums, curArr, index, result) {
        if(index === nums.length) {
            result.push(curArr);
            return;
        }

        curArr.push(nums[index]);
        helper(nums, curArr.concat(), index + 1, result);
        curArr.pop();
        helper(nums, curArr.concat(), index + 1, result);
    }

