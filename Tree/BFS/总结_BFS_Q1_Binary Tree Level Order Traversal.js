/*LC102 Binary Tree Level Order Traversal*/
====> [3,9,20,null,null,15,7]
====> [
        [3],
        [9, 20],
        [15, 7]
====>  ]

====>  [3,9,20,null,null,15,7];

====>  queue.push(root); queue = [3];
       while(1 > 0){
          length = 1;
          level = [];
          for (var i = 0; i < 1; i++) {
              head = 3;
              queue = [];
              level = [3];
              queue.push(head.left); => queue = [9];
              queue.push(head.right); => queue = [9,20];
          };
          result.push(level); => result = [[3]];
       }
====>  queue = [9,20];
       while(2 > 0){
          length = 2;
          level = [];
          for (var i = 0; i < 2; i++) {
              head = 9;
              queue = [20];
              level = [9];
              head = 20;
              queue = [];
              level = [9,20];
              queue = [15];
              queue = [15,7];
          };
          result.push(level); => result = [[3], [9, 20]];
       }

====>  queue = [15,7];
       while(2 > 0){
          length = 2;
          level = [];
          for (var i = 0; i < 2; i++) {
              head = 15;
              queue = [7];
              level = [15];
              head = 7;
              queue = [];
              level = [15,7];
          };
          result.push(level); => result = [[3], [9,20], [15,7]];
       }

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
 
//从上向下，从左到右
var levelOrder = function(root) {
    var result = [];
    if(root === null) return result;
    
    var queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var length = queue.length;
        var level = [];
        for(var i = 0; i < length; i++) {
            var head = queue.shift();
            level.push(head.val);
            if(head.left !== null) {
                queue.push(head.left);
            }
            if(head.right !== null) {
                queue.push(head.right);
            }
        }
        result.push(level);
    }
    return result;
};

/*LC 107 Binary Tree Level Order Traversal 2*/
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
