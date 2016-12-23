/*SubArray/SubString : A subbarray is a contiguous part of array */
/*SubSequence: NOT contiguous*/

/*Question 1: Longest Common Substring / Subarray */

var longestCommonSubstring = function(str1, str2) {
	if(str1 === null || str2 === null) return -1;

	var chars1 = str1.split("");
	var chars2 = str2.split("");

	var max = 0;
	for(var i = 0; i < chars1.length; i++) {
		dp[i] = [];
		for(var j = 0; j < chars2.length; j++) {
			dp[i][j] = 0;
		}
	}

	for(var i = 0; i < chars1.length; i++) {
		for(var j = 0; j < chars2.length; j++) {
			if(chars1[i] === chars2[j]) {
				if(i === 0 || j === 0) {
					dp[i][j] = 1;
				} else {
					dp[i][j] = dp[i - 1][j - 1] + 1;
				}
				max = dp[i][j] > max ? dp[i][j] : max;
			}
 		}
	}
	return max;
}

var str1 = "getoffer";
var str2 = "office"

longestCommonSubstring(str1, str2);

        0 1 2 3 4 5 6 7
====>             i  
		g e t o f f e r
    0 o 0 0 0 1 0 0 0 0    
    1 f 0 0 0 0 1 0 0 0
    2 f 0 0 0 0 0 1 0 0 
    3 i 0 0 0 0 0 0 0 0
    4 c 0 0 0 0 0 0 0 0      
    5 e 0 1 0 0 0 0 0 0  
    
    ====> i = 1, j = 5, max = dp[1][5] = 1;
    ====> i = 3, j = 0, max = 1;
    ====> i = 4, j = 1, max = 2;
    ====> i = 5, j = 2, max = 3;

/*Question 2: Longest Common Subsequence */

var longestCommonSequence = function(str1, str2) {
	if(str1 === null || str2 === null) return -1;

	var dp = [];
	for(var i = 0; i <= str1.length; i++) {
		dp[i] = [];
		for (var j = 0; j <= str2.length; j++) {
			dp[i][j] = 0;
		}
	}
	

	for (var i = 1; i <= str1.length; i++) {
		for(var j = 1; j <= str2.length; j++) {
			if(str1.charAt(i - 1) === str2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	console.log(dp);
	return dp[str1.length][str2.length];
}

var str1 = "getofier";
var str2 = "getoffffie"

longestCommonSequence(str1, str2);
