/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root.val === target) return root.val;
    
    if (root.val < target) {
        if (root.right === null) return root.val;
        
        var right = closestValue(root.right, target);
        
        if (Math.abs(root.val - target) <= Math.abs(right - target)) return root.val;
        
        return right;
    } else {
        if (root.left === null) return root.val;
        
        var left = closestValue(root.left, target);
        
        if (Math.abs(root.val - target) <= Math.abs(left - target)) return root.val;
        
        return left;
    }
};