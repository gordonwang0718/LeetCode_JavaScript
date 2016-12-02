
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    var sb = [];
    helper(n, 0, 0, result, sb);
    return result;
    
    function helper(n, left, right, result, sb) {
        
        // base case 1;
        if(left + right === 2*n) {
            result.push(sb.join(""));
            return;
        }

        // // base case 2;
        // if(left === n && right === n) {
        //     result.push(sb.join(""));
        //     return;
        // }
        
        // case 1: try to add left;
        if(left < n) {
            sb.push('(');
            helper(n, left + 1, right, result, sb);
            sb.pop();
        }
        // case 2: try to add right;
        if(right < left) {
            sb.push(')');
            helper(n, left, right + 1, result, sb);
            sb.pop();
        }
        
    }
};