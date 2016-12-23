var serchRange = function(root, min, max) {
	if(root === null) return;
	if(root.val > min) serchRange(root.left, min, max);
	if(root.val >= min && root.val <= max) console.log(root.val);
	if(root.val < max) serchRange(root.right, min, max);
}

Time: O(lgN) ~ O(N)