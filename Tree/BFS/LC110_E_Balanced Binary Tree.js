
// Balanced vs unBalanced

// Balancing a tree does not mean the left and right subtrees are exactly the same size
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true;
    var left = getHeight(root.left);
    var right = getHeight(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    
    function getHeight(root) {
        if(root === null) return 0;
        var leftHeight = getHeight(root.left);
        var rightHeight = getHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
};