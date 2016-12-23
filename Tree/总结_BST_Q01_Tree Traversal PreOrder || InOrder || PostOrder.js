/*LC144 Binary Tree Preorder Traversal*/

/*Solution 1: Recursion*/
var preorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    helper(root, result);
    return result;
    function helper(root, result) {
        if(root === null) return;
        result.push(root.val);
        helper(root.left, result);
        helper(root.right, result);
    }
};

/*Solution 2: Iteration 1*/
var preorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    var stack = [];
    stack.unshift(root);
    
    while(stack.length !== 0) {
        var cur = stack.shift();
        // The left subtree should be traversed before right subtree
		// since stack is LIFO, we should push right into the stack first
		// so for the next step the top element of the stack is the left subtree
        if(cur.right !== null) {
            stack.unshift(cur.right);
        }
        if(cur.left !== null) {
            stack.unshift(cur.left);
        }
        result.push(cur.val);
    }
    return result;
};

/*Solution 3: Iteration 2*/
var preorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    var stack = [];

    while(root !== null || stack.length !== 0) {
        if(root === null) {
            root = stack.shift();
            root = root.right;
        } else {
            result.push(root.val);
            stack.unshift(root);
            root = root.left;
        }
    }
    return result;
};

/*LC094 Binary Tree Inorder Traversal*/

/*Solution 1: Recursion*/
var inorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    helper(root, result);
    return result;
    function helper(root, result) {
        if(root === null) return;
        helper(root.left, result);
        result.push(root.val);
        helper(root.right, result);
    }
};


/*Solution 2: Iteration*/

var inorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    var stack = [];
    var cur = root;
    
    while(cur !== null || stack.length !== 0) {
        if(cur !== null) {
            stack.unshift(cur);
            cur = cur.left;
        } else {
            cur = stack.shift();
            result.push(cur.val);
            cur = cur.right;
        }
    }
    return result;
};

/*LC145 Binary Tree Postorder Traversal*/

/*Solution 1: Recursion*/
var postorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    helper(root, result);
    return result;
    
    function helper(root, result) {
        if(root === null) return;
        helper(root.left, result);
        helper(root.right, result);
        result.push(root.val);
    }
};

/*Solution 2 Iteration 1 (reverse PreOrder)*/
var postorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    var preOrder = [];
    preOrder.unshift(root);
    while(preOrder.length !== 0) {
        var cur = preOrder.shift();
        result.push(cur.val);
        if(cur.left !== null) preOrder.unshift(cur.left);
        if(cur.right !== null) preOrder.unshift(cur.right);
    }
    result.reverse();
    return result;
};

















