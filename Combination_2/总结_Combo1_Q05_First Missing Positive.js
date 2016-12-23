/*LC041 First Missing Positive*/

       0  1   2  3
====> [3, 4, -1, 1] 
	 
	 for(var i = 0; i < nums.length; i++)
	 ====> 
	 i = 0  if(nums[0] !== 0 + 1 && nums[0] > 0 && nums[0] <= nums.length)
	 		tmp = nums[nums[0] - 1]; // tmp = nums[3 - 1] ===> tmp = -1;
	 		nums[3 - 1] = nums[0]; // nums[2] ===> 3
	 		nums[0] = -1;
	 		i--; // [-1. 4. 3. 1]
	 ====>
	 i = 0
	 ====>
	 i = 1  if(nums[1] !== 1 + 1 && nums[1] > 0 && nums[1] <= nums.length)
	 		tmp = nums[nums[1] - 1] // tmp = nums[4 - 1] ===> tmp = 1;
	 		nums[nums[1] - 1] = nums[1] // nums[3] = 4;
	 		nums[1] = 1;
	 		i--; // [-1, 1, 3, 4]
	 ====>
	 i = 1  if(nums[1] !== 1 + 1 && nums[1] > 0 && nums[1] <= nums.length)
	 		tmp = nums[nums[1] - 1] // tmp = nums[1 - 1] ===> tmp = -1;
	 		nums[nums[1] - 1] = nums[1] // nums[0] = 1;
	 		nums[1] = -1;
	 		i--; // [1, -1, 3, 4]

	 ====>
	 i = 1 
	 ====>
	 i = 2
	 ====>
	 i = 3
	 <====
	 for(var i = 0; i < nums.length; i++)




/*Solution 1: Array O(N)*/
var firstMissingPositive = function(nums) {
     for(var i = 0; i < nums.length; i++) {
         if(nums[i] !== i + 1 && nums[i] > 0 && nums[i] <= nums.length) {
             if(nums[nums[i] - 1] === nums[i]) continue;
             var tmp = nums[nums[i] - 1];
             nums[nums[i] - 1] = nums[i];
             nums[i] = tmp;
             i--;
         }
     }
     
     for(var i = 0; i < nums.length; i++) {
         if(nums[i] !== i + 1) return i + 1;
     }
     return nums.length + 1;
};


/*Solution 2: HashMap*/
var firstMissingPositive = function(nums) {
    var hash = [];
    for(var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] <= 0) continue;
        else hash[nums[i]] = true;
    }
    
    for(var i = 1; ; i++)  {
        if (!hash[i])
        return i;
    }
};