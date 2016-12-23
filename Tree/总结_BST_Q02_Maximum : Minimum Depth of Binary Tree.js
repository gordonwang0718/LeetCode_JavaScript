/*LC104 Maximum Depth of Binary Tree*/
var maxDepth = function(root) {
    if(root === null) return 0;
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return left === right ? left + 1: Math.max(left, right) + 1;
};

/*Implement getHeight*/
function getHeight(node) {
	if(node === null) return 0;
	var leftHeight = getHeight(node.left);
	var rightHeight = getHeight(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

/*LC111 Minimum Depth of Binary Tree*/
var minDepth = function(root) {
    if(root === null) return 0;
    var leftHeight = minDepth(root.left);
    var rightHeight = minDepth(root.right);
    return (leftHeight === 0 || rightHeight === 0) ? leftHeight + rightHeight + 1 : Math.min(leftHeight, rightHeight) + 1;
};s
