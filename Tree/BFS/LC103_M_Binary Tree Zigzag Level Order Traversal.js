/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Solution 1: Using 2 Queue

====> [3,9,20,null,null,15,7]
====>    3
        / \
       9  20
         /  \
        15   7

result
====> [
       [3],
       [20,9],
       [15,7]
      ]
1th:
====> result = [];
      cur = [];
      cur = [3];
      while(cur.length > 0) {
        len = 1;
        temp = [];
        next = [];
        
        for (var i = 0; i < 1; i++) {
            temp = [3];
            next = [9];
            next = [9,20];
        }
                
        left = false;
        result = [[3]];
        cur = [9,20];
    }
2nd:
====> while(cur.length > 0) {
        len = 2;
        temp = [];
        next = [];
        
        for (var i = 0; i < 2; i++) {
            temp = [9];
            temp = [9,20];
            next = [15];
            next = [15,7];
        }
                
        left = false;
        result = [[3]];
        cur = [9,20];
      }
      temp.reverse(); ===> [20,9];
      left = true;
      result = [[3],[20,9]];
      cur = [15,7];




var zigzagLevelOrder = function(root) {
    var result = [];
    var cur = [];
    var left = true;
    
    if (root === null) return result;
    
    cur.push(root);
    
    while(cur.length > 0) {
        var len = cur.length;
        var temp = [];
        var next = [];
        
        for (var i = 0; i < len; i++) {
            temp.push(cur[i].val);
            if(cur[i].left) next.push(cur[i].left);
            if(cur[i].right) next.push(cur[i].right);
        }
        
        if(!left) temp.reverse();
        
        left = !left;
        result.push(temp);
        cur = next;
    }
    return result;
};