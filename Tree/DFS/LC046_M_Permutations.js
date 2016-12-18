====> [1,2,3];
====> for(i = 0; i < 3; i++) // i = 0, index = 0;
          swap(nums, 0, 0) //[1,2,3]
          helper(nums, 0 + 1, result)
          ====> for(i = 1; i < 3; i++) // i = 1, index = 1;
                    swap(nums, 1, 1) //[1,2,3]
                    helper(nums, 1 + 1, result)
                    ====> for(i = 2; i < 3; i++) // i = 2, index = 2;
                              swap(nums, 2, 2) //[1,2,3]
                              helper(nums, 2 + 1, result)
                              ====> index === nums.length
                                    result.push(nums.concat()) // result = [[1,2,3]]
                              <====
                              swap(nums, 2, 2) //[1,2,3]
                    <====
                    swap(nums, 1, 1);
                    swap(nums, 1, 2); //[1,3,2];
                    helper(nums, 1 + 1, result)
                    ====>  for(i = 2; i < 3; i++) // i = 2, index = 2;
                               swap(nums, 2, 2) //[1,3,2]
                               helper(nums, 2 + 1, result)
                               ====> index === nums.length
                                     result.push(nums.concat()) // result = [...,[1,3,2]]
                               <====
                               swap(nums,2, 2)
                    swap(nums, 1, 2); //[1,2,3];
          <====
          swap(nums, 0, 0) //[1,2,3]
          swap(nums, 0, 1) //[2,1,3]
          helper(nums, 0 + 1, result)
          ====> for 
          .........

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    helper(nums, 0, result);
    return result;
    
    function helper(nums, index, result) {
        if(index === nums.length) {
            result.push(nums.concat());
            return;
        }
        
        for(var i = index; i < nums.length; i++){
            swap(nums, index, i);
            helper(nums, index + 1, result);
            swap(nums, index, i);
        }
    }
    
    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};