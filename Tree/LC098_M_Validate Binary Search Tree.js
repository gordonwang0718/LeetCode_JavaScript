
// Binary Search Tree
// For every node X, all the values of the left subtree should be less than root value(x), all the values of the right subtree should be larger than root value(x).

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
var isValidBST = function(root) {
    if(root === null) return true;
    return isBST(root, null, null);
    
    function isBST(root, lowerBound, upperBound) {
        if(root === null) return true;
        if ((lowerBound !== null && root.val <= lowerBound) || (upperBound !== null && root.val >= upperBound)) return false;
        return isBST(root.left, lowerBound, root.val) && isBST(root.right, root.val, upperBound);
    }
};