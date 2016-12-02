/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    var curArr = [];
    helper(n, k, 1, curArr, result);
    return result;
    
    function helper(n, k, index, curArr, result) {
        if(curArr.length === k) result.push(curArr);
        
        for(var i = index; i <= n; i++) {
            curArr.push(i);
            helper(n, k, i + 1, curArr.concat(), result);
            curArr.pop();
        }
    }
};