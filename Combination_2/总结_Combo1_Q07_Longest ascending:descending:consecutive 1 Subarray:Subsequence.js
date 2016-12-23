/*Question 1: Longest Ascending Substring / Subarray*/

var longestAscendingSubArray = function(array) {
	if(array === null) return -1;
	if(array.length === 0) return 0;

	var max = 1;
	var curMax = 1;
	for(var i = 1; i < array.length; i++) {
		if(array[i] > array[i - 1]) {
			curMax++;
			max = Math.max(max, curMax);
		} else {
			curMax = 1;
		}
	}
	return max;
}

/*Question 2: LC300 Longest Increasing Subsequence*/