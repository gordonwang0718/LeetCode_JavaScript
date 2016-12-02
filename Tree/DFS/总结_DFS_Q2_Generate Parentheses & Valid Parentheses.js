// LC 022 Generate Parentheses

====> n = 3;
====> result = [];
      sb = [];
      ====> helper(n, 0, 0, result, sb);
            left < n;
            sb = ['('];
            ====> helper(n, 1, 0, result, sb);
                  left < n;
                  sb = ['(','('];
                  ====> helper(n, 2, 0, result, sb);
                        left < n;
                        sb = ['(','(','('];
                        ====> helper(n, 3, 0, result, sb);
                              right < left;
                              sb = ['(','(','(',')'];
                              ====> helper(n, 3, 1, result, sb);
                                    right < left;
                                    sb = ['(','(','(',')',')'];
                                    ====> helper(n, 3, 2, result, sb);
                                          right < left;
                                          sb = ['(','(','(',')',')',')'];
                                          ====> helper(n, 3, 3, result, sb);
                                                left + right = 2 * n;
                                                result = ['((()))'];
                                          <====
                                          sb = ['(','(','(',')',')'];
                                    <====
                                    sb = ['(','(','(',')'];
                              <====
                              sb = ['(','(','('];
                        <====
                        sb = ['(','('];
                        right < left;
                        sb = ['(','(',')'];
                        ====> helper(n, 2, 1, result, sb);
                              ...
                              ...
                              ...

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