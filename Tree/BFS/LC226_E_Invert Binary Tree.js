/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return root;
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
};