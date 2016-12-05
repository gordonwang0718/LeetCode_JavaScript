// Q1. LC 077 Combination 

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
        if(curArr.length === k) {
            result.push(curArr);
        }
        
        for(var i = index; i <= n; i++) {
            curArr.push(i);
            helper(n, k, i + 1, curArr.concat(), result);
            curArr.pop();
        }
    }
};

// Q2. CoinSum

// Q3. LC 039 Combination Sum
var combinationSum = function(candidates, target) {
    var result = [];
    var curArr = [];
    if(candidates === null || candidates.length === 0) return result;
    helper(candidates, target, 0, curArr, result);
    return result;
    
    function helper(candidates, target, index, curArr, result){
        if(target === 0) result.push(curArr);
        
        for(var i = index; i < candidates.length; i++) {
            if(target >= candidates[i]) {
                curArr.push(candidates[i]);
                helper(candidates, target - candidates[i], i, curArr.concat(), result);
                curArr.pop();
            }
        }
    }
};

// Q4. LC 040 Combination Sum 2
var combinationSum2 = function(candidates, target) {
    var result = [];
    var curArr = [];
    if(candidates === null || candidates.length === 0) return result;
    candidates.sort(function (a, b) {return a - b});
    helper(candidates, target, 0, curArr, result);
    return result;
    
    function helper(candidates, target, index, curArr, result) {
        if(target === 0) result.push(curArr);
        
        for(var i = index; i < candidates.length; i++) {
            if(i > index && candidates[i] === candidates[i - 1]) {
                continue;
            } else {
                if(target >= candidates[i]) {
                    curArr.push(candidates[i]);
                    helper(candidates, target - candidates[i], i + 1, curArr.concat(), result);
                    curArr.pop();
                }
            }
        }
    }
};

// Q4. LC 216 Combination Sum 3
var combinationSum3 = function(k, n) {
    var result = [];
    var curArr = [];
    var curSum = 0;
    helper(k, n, 1, curArr, curSum, result);
    return result;
    
    function helper(k, n, index, curArr, curSum, result) {
        if(curSum > n || curArr.length > k) return;
        if(curArr.length === k) {
            if(curSum === n) {
                result.push(curArr);
            }
            return;
        }
        
        for(var i = index; i < 10; i++) {
            curArr.push(i);
            helper(k, n, i + 1, curArr.concat(), curSum + i, result);
            curArr.pop();
        }
    }
};