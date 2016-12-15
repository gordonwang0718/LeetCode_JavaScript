/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    var leftHeight = minDepth(root.left);
    var rightHeight = minDepth(root.right);
    return (leftHeight === 0 || rightHeight === 0) ? leftHeight + rightHeight + 1 : Math.min(leftHeight, rightHeight) + 1;
};