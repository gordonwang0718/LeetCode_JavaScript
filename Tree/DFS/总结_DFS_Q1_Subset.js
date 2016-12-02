// LC 078 Subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Solution 1: DFS - 1
            0 1 2
====> nums [1,2,3]

====> helper(nums, 0, len - 1, [], result);
	  result = [[]];
	  for(var i = 0; i <= 2; i++) {
	  	curArr = [1];
	  	i = 0
	  	====> helper(nums, 0 + 1, 2, [1], result);
	  		  result = [[],[1]];
	  		  for(var i = 1; i <= 2; i++) {
	  		  	curArr = [1,2];
	  		  	i = 1
	  		  	====> helper(nums, 1 + 1, 2, [1,2], result);
	  		  		  result = [[],[1],[1,2]];
	  		  		  for(var i = 2; i <= 2; i++) {
	  		  		  	curArr = [1,2,3];
	  		  		  	i = 2
	  		  		  	====> helper(nums, 2 + 1, 2, [1,2,3], result);
	  		  		  		  result = [[],[1],[1,2],[1,2,3]];
	  		  		    <====
	  		  		  	curArr = [1,2];
	  		  		  }
	  		  	<====
	  		  	curArr = [1];
	  		  	i = 2
	  		  	====>
	  		  	curArr = [1,3];
	  		  	i = 2
	  		  	====> helper(nums, 2 + 1, 2, [1,3], result);
	  		  		  result = [[],[1],[1,2],[1,2,3],[1,3]];
	  		  	<====
	  		  	curArr = [1];
	  		  }
	  	<====
	  	curArr = []
	  	i = 1
	  	====>
	  	curArr = [2];
	    ====> helper(nums, 1 + 1, 2, [2], result);
	    	  result = [[],[1],[1,2],[1,2,3],[1,3],[2]];
	    	  for(var i = 2; i <= 2; i++) {
	    	  	curArr = [2,3];
	  		    i = 2
	  		    ====> helper(nums, 2 + 1, 2, [2,3], result);
	  		          result = [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3]];
	  		    <====
	  		    curArr = [2];
	  		   }
	  	<====
	  	curArr = [];
	  	i = 2
	  	====>
	  	curArr = [3];
	  	====> helper(nums, 3, 2, [3], result);
	  	      result = [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]];
	  	<====
	  	curArr = []
	  }
====>
result = [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

						   {}
level 0			 {1}       {2}       {3}    1st can choose either 1 2 3   i = 0,1,2
level 1     {1,2}   {1,3}  {2,3}            2nd can choose what is left   i = 1,2 
level 2 {1,2,3}                                                           i = 2
       null

var subsets = function(nums) {
    var result = [];
    var len = nums.length;
    nums.sort(function(a, b) { return a - b });
    helper(nums, 0, len - 1, [], result); 
    return result;
   
    function helper(nums, start, end, curArr, result) {
        result.push(curArr);
        for (var i = start; i <= end; i++) {
            curArr.push(nums[i]);
            helper(nums, i + 1, end, curArr.concat(), result);
            curArr.pop();
        }
    }
}; 

// Solution 2: DFS - 2
            0 1 2
====> nums [1,2,3]

====> helper(nums, 0, [], result);
      curArr = [1];
      ====> helper(nums, 0 + 1, [1], result);
            curArr = [1,2];
            ====> helper(nums, 1 + 1, [1,2], result);
            	  curArr = [1,2,3];
            	  ====> helper(nums, 2 + 1, [1,2,3], result);
                        result = [[1,2,3]];
                  curArr = [1,2];
                  ====> helper(nums, 2 + 1, [1,2], result);
                        result = [[1,2,3],[1,2]];
            curArr = [1];
            ====> helper(nums, 1 + 1, [1], result);
                  curArr = [1,3];
                  ====> helper(nums, 2 + 1, [1,3], result);
                  		result = [[1,2,3],[1,2],[1,3]];
.......

						              {}
level 0			         {1}                       {}    
level 1        {1,2}           {1}           {2}        {}           
level 2 {1,2,3}     {1,2} {1,3}   {1}   {2,3}   {2}  {3}   {}                                     
       null                



var subsets = function(nums) {
    var result = [];
    var length = nums.length;
    var curArr = [];
    nums.sort(function(a, b) {return a - b});
    helper(nums, 0, curArr, result);
    return result;
    
    function helper(nums, index, curArr, result) {
        if(index === nums.length) {
            result.push(curArr);
            return;
        }
        curArr.push(nums[index]);
        helper(nums, index + 1, curArr.concat(), result);
        curArr.pop();
        helper(nums, index + 1, curArr.concat(), result);
    }
};

