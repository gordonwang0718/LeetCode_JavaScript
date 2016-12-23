/*LC101 Symmetric Tree*/
var isSymmetric = function(root) {
    return root === null ? true : mirror(root.left, root.right);
    function mirror(left, right) {
        if(left === null && right === null) return true;
        if(left === null || right === null) return false;
        if(left.val !== right.val) return false;
        return mirror(left.left, right.right) && mirror(left.right, right.left);
    }
};

/*LC226 Invert Binary Tree*/
var invertTree = function(root) {
    if(root === null) return root;
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};


/*
		1 (root)
	  /   \
	 2     3

	 var left = invertTree(1.left)
	 ====> var left = inverTree(2.left)
	 	   ====> root === null, return
	 	   <====
	 	   left = null;
	 	   var right = inverTree(2.right)
	 	   ====> root ==== null, return
	 	   <====
	 	   right = null;
	 	   2.left = null;
	 	   2.right = null;
	 <==== root = 2;
	 left = 2;
	 var right = invertTree(1.right)
	 ====> var left = inverTree(3.left)
	 	   ====> root === null, return;
	 	   <====
	 	   left = null;
	 	   var right = inverTree(3.right);
	 	   ====> root === null, return;
	 	   <====
	 	   right = null;
	 	   3.left = null;
	 	   3.right = null;
	 <==== root = 3;
	 right = 3;
	 1.left = 3;
	 1.right = 2;
	 return 1; 
*/