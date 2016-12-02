/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    var curArr = [];
    if(candidates === null || candidates.length === 0) return result;
    candidates.sort(function(a, b) {return a - b});
    helper(candidates, target, 0, curArr, result);
    return result;
    
    function helper(candidates, target, index, curArr, result) {
        if(target === 0) result.push(curArr);
        
        for(var i = index; i < candidates.length; i++) {
            if(i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }else{
                if (candidates[i] <= target) {
                    curArr.push(candidates[i]);
                    helper(candidates, target - candidates[i], i + 1, curArr.concat(), result);
                    curArr.pop();
                }
            } 
        }
        return;
    }
};