
===>  [3,9,20,null,null,15,7]

===> parent.push(root) ===> parent = [3];
===> current = [];
     parentData = [];

     parent[i].left ? current.push(parent[i].left) : null; ===> current.push(parent[i].left) ===> current = [9];
     parent[i].right ? current.push(parent[i].right) : null; ===> current.push(parent[i].right) ===> current = [9,20];
     parentData.push(parent[i].val); ===> parentData = [3];

     result.unshift(parentData); ===> result = [[3]];
     parent = current; ===> parent = [9, 10];

===> current = [];
     parentData = [];

     parent[i].left ? current.push(parent[i].left) : null; ===> 9.left === null;
     parent[i].right ? current.push(parent[i].right) : null; ===> 9.right === null;
     parentData.push(parent[i].val); ===> parentData = [9];
     parent[i].left ? current.push(parent[i].left) : null; ===> current.push(parent[i].left) ===> current = [15];
     parent[i].right ? current.push(parent[i].right) : null; ===> current.push(parent[i].right) ===> current = [15,7];
     parentData.push(parent[i].val); ===> parentData = [9, 20];

     result.unshift(parentData); ===> result = [[9, 20],[3]];
     parent = current ===> parent = [15, 7];

===> current = [];
     parentData = [];

     parent[i].left ? current.push(parent[i].left) : null; ===> 15.left === null;
     parent[i].right ? current.push(parent[i].right) : null; ===> 15.right === null;
     parentData.push(parent[i].val); ===> parentData = [15];
     parent[i].left ? current.push(parent[i].left) : null; ===> 7.left === null;
     parent[i].right ? current.push(parent[i].right) : null; ===> 7.right === null;
     parentData.push(parent[i].val); ===> parentData = [15, 7];

     result.unshift(parentData); ===> result = [[15, 7],[9, 20],[3]];
     parent = current ===> parent = [];

===> return result [[15, 7],[9, 20],[3]];

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Solution 1
var levelOrderBottom = function(root) {
    var result = [];
    var queue = [];
    var current, storeQueue;
    
    if(root === null) return result;
    queue.push(root);
    
    while(queue.length > 0) {
        current = [];
        storeQueue = [];
        for(var i in queue) {
            queue[i].left ? current.push(queue[i].left) : null;
            queue[i].right ? current.push(queue[i].right) : null;
            storeQueue.push(queue[i].val);
        }
        
        result.unshift(storeQueue);
        queue = current;
    }
    return result;
};

// Solution 2
var levelOrderBottom = function(root) {
    var result = [];
    var queue = [];    
    if(root === null) return result;
    queue.push(root);
    
    while(queue.length > 0) {
        var length = queue.length;
        var level = [];
        for(var i = 0; i < length; i++) {
            var head = queue.shift();
            level.push(head.val);
            if(head.left) queue.push(head.left);
            if(head.right) queue.push(head.right);
        }
        result.unshift(level);
    }
    return result;
};