/* Using Recursion */

var preOrder = function(root) {
	if(root === null) return root;
	console.log(root.val);
	preOrder(root.left);
	preOrder(root.right);
}

var inOrder = function(root) {
	if(root === null) return root;
	preOrder(root.left);
	console.log(root.val);
	preOrder(root.right);
}

var postOrder = function(root) {
	if(root === null) return root;
	preOrder(root.left);
	preOrder(root.right);
	console.log(root.val);
}

/* Without Recursion */

