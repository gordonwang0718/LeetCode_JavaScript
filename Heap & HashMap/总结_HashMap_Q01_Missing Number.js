/*LC268 Missing Number*/

/*Solution 1*/
/*Sort -> Binary Search, Check index and value 是否相等*/

/*Solution 2*/
/*Sort -> one pass -> check value and index, index can be implemented with counter initialized with 0 */

/*Solution 3*/
/*Sort -> one pass -> check first || array[fast] - array[fast - 1] == 2 return fast / array[fast] - 1 */

/*Solution 4*/
/*
	Hashmap <key = value of element (possible 可能的取值，range，domain), value = counter> 
	two pass O(n)
	2 pass, build hashmap
*/
var missingNumber = function(nums) {
    if(nums === null || nums.length === 0) return -1;
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    
    for(var i = 0; i < nums.length; i++) {
        if(map[i] === undefined) return i;
    }
    return nums.length;
};

/*Solution 5*/ 
/*
	Hashset <key = value of element> two pass O(n)
	one pass
	0 1    3 4 5 6
	0 1 2 3 4 5 6
	set.add()?
*/ 

/*Solution 6*/
/*
	等差数列通项公式：An = A1 + (n - 1)d, d 公差
	等差数列求和公式：Sum = (A1 + An)n/2
*/

/*Solution 7: XOR Bit Operation*/
var missingNumber = function(nums) {
    var result = 0;
    for(var i = 0; i < nums.length; i++) {
        result = nums[i] ^ result;
        result = i ^ result;
    }
    return result ^ nums.length;
};

/*FollowUp_1 - 每个出现两次，有且只有一个出现一次 */

/*FollowUp_2 - 每个出现m次，有n个出现k次 */

