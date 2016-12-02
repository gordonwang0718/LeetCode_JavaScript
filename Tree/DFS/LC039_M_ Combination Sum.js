/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var curArr = [];
    if(candidates === null || candidates.length === 0) return result;
    helper(candidates, target, 0, curArr, result);
    return result;
    
    function helper(candidates, target, index, curArr, result) {
        if(target === 0) result.push(curArr);
        
        for(var i = index; i < candidates.length; i++) {
            if(candidates[i] <= target) {
                curArr.push(candidates[i]);
                helper(candidates, target - candidates[i], i, curArr.concat(), result);
                curArr.pop();
            }
        }
        
    }
};