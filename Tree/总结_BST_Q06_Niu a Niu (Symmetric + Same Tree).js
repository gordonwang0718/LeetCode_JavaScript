var niuniuTree = function(left, right) {
	if(left === null && right === null) return true;
	if(left === null || right === null || left.val !== right.val) return false;
	return niuniuTree(left.left, right.right) && 
		   niuniuTree(left.left, right.left) && 
		   niuniuTree(left.right, right.left) && 
		   niuniuTree(left.right, right.right);
}