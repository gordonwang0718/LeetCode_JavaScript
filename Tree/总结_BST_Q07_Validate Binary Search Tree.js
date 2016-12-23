/*LC098 Validate Binary Search Tree*/

/*Solution 1: Up to Buttom*/
/*			
				6
			  /   \
			 4     8
			/ \   / \
		   2   3 7   9	   
*/

	====> isBST(6, null, null)
		  ====> isBST(6.left, null, 6)
		  		====> isBST(4.left, null, 4)
		  		      ====> isBST(2.left, null, 2)
		  		      		====> 2.left === null, return true
		  		      		<====
		  		      	    isBST(2.right, 2, 4)
		  		      	    ====> 2.right === null, return true
		  		      	    <====
		  		      isBST(4.right, 4, 6)
		  		      ====> 4.right.val <= lowerBound(4)
		  		      		return false
		  		      <====
		  		      .....

var isValidBST = function(root) {
    if(root === null) return true;
    return isBST(root, null, null);
    
    function isBST(root, lowerBound, upperBound) {
        if(root === null) return true;
        if ((lowerBound !== null && root.val <= lowerBound) || 
        	(upperBound !== null && root.val >= upperBound)) 
        	return false;
        return isBST(root.left, lowerBound, root.val) && 
        	   isBST(root.right, root.val, upperBound);
    }
};

/*Solution 2: Buttom to Up (java Vision)*/
class res{
	boolean valid;
	int min,max;
	res(boolean valid, int min,int max){
		this.valid = valid;
		this.min = min;
		this.max = max;
	}
}

public class Solution {
	public boolean isValidBST(TreeNode root) {
		res re = help (root);
		return re.valid;
	}
	private res help( TreeNode root ){
		if (root == null) return new res( true, Integer.MAX_VALUE, Integer.MIN_VALUE );
		res leftr = help( root.left );
		res rightr = help( root.right );
		if ( !leftr.valid || 
			!rightr.valid || 
			( root.left != null && root.val <= leftr.max) || 
			(root.right != null && root.val >= rightr.min) ) 
			return new res(false,0,0);
		return new res( true, Math.min(root.val,leftr.min), Math.max(root.val,rightr.max));  
}// （Haohan）

/*Solution 3: Inorder Traversal, check if right element is greater than left one*/
var isValidBST_Inorder = function(root) {
    if(root === null) return true;
    var stack = [];
    var cur = root;
    var pre = null;
    
    while(cur !== null || stack.length !== 0) {
        if(cur !== null) {
            stack.unshift(cur);
            cur = cur.left;
        } else {
            cur = stack.shift();
            if (pre === null || cur.val > pre.val) {
                pre = cur;
            	cur = cur.right;
            } else {
            	return false;
            }
        }
    }
    return true;
};


