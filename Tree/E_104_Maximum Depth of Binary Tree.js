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
var maxDepth = function(root) {

    // S1
    if(root === null) return 0;
    
    var leftHeight = maxDepth(root.left);
    var rightHeight = maxDepth(root.right);
    return (leftHeight === rightHeight) ? leftHeight + 1 : Math.max(leftHeight, rightHeight) + 1;
    

    // S2
    // return getHeight(root);
    // function getHeight(node) {
    //     if(node === null) return 0;
    //     var leftHeight = getHeight(node.left);
    //     var rightHeight = getHeight(node.right);
    //     return Math.max(leftHeight, rightHeight) + 1;
    // }
};