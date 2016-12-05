/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    var result = [];
    var curArr = [];
    var curSum = 0;
    
    helper(k, n, 1, curSum, curArr, result);
    
    return result;
    
    function helper(k, n, index, curSum, curArr, result) {
        if (curArr.length > k || curSum > n) return;
        if (curArr.length === k) {
            if (curSum === n) {
                result.push(curArr);
            }
            return;
        }
        for (var i = index; i < 10; i++) {
            curArr.push(i);
            helper(k, n, i + 1, curSum + i, curArr.concat(), result);
            curArr.pop();
        }
    }
};