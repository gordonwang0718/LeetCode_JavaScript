/*Solution 1*/

var sortColors = function(nums) {
    if(nums === null || nums.length === 0) return nums;
    // Three Color red = '0', white = '1', blue = '2'
    var pLeft = 0;
    var pRight = nums.length - 1;
    var pDiv =0;
    
    while(pDiv <= pRight) {
        if(nums[pDiv] === 0) {
            swap(nums, pLeft++, pDiv++);
        } else if (nums[pDiv] === 1) {
            pDiv++;
        } else {
            swap(nums,pDiv, pRight--);
        }
    }

    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};

/*Solution 2: Count Sort*/
var sortColors = function(nums) {
    if(nums === null || nums.length <= 1) return;
    
    var zero = 0;
    var one = 0;
    
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === 0) zero++;
        if(nums[i] === 1) one++;
    }
    
    for(var j = 0; j < nums.length; j++) {
        if(j < zero) nums[j] = 0;
        else if (j < one + zero) nums[j] = 1;
        else nums[j] = 2;
    }
};