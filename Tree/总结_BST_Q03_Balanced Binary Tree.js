/*LC110 Balanced Binary Tree*/ 
/*Solution 1: O(nlogn)*/

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

/*Solution 2: O(n)*/	
/*
    Time: O(nlogn)
	getHeight O(n) : 
	number of subtree nodes → every level time complexity 
	in your recursion
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
        if(leftHeight === -1 || rightHeight === -1 || Math.abs(left - right) > 1) return -1
        return Math.max(leftHeight, rightHeight) + 1;
    }
};