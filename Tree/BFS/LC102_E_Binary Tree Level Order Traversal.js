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

// Solution 1:
var levelOrder = function(root) {
    var result = [];
    if(root === null) return result;
    
    var queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var length = queue.length;
        var level = [];
        for(var i = 0; i < length; i++) {
            var head = queue.shift();
            level.push(head.val);
            if(head.left !== null) {
                queue.push(head.left);
            }
            if(head.right !== null) {
                queue.push(head.right);
            }
        }
        result.push(level);
    }
    return result;
};

// Solution 2:
var levelOrder = function(root) {
    var result = [];
    if(!root) return result;
    var queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var current = [];
        var storeQueue = [];
        for(var i in queue) {
            queue[i].left ? current.push(queue[i].left) : null;
            queue[i].right ? current.push(queue[i].right) : null;
            storeQueue.push(queue[i].val);
        }
        result.push(storeQueue);
        queue = current;
    }
    return result;
};