/*LC090 Subsets 2*/

var subsetsWithDup = function(nums) {
    var result = [];
    if(nums === null || nums.length === 0) return result;
    nums.sort(function(a, b) {return a - b});
    var curSol = [];
    
    helper(nums, curSol, 0, result);
    
    return result;
    
    function helper(nums, curSol, index, result) {
        result.push(curSol);
        for(var i = index; i < nums.length; i++) {
            if(i > index && nums[i] === nums[i - 1]) continue;
            curSol.push(nums[i]);
            helper(nums, curSol.concat(), i + 1, result);
            curSol.pop();
        }
    }
};