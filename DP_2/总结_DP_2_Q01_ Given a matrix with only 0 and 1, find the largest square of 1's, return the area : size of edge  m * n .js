/*LC221 Given a matrix with only 0 and 1, find the largest square of 1's, return the area / size of edge  m * n*/

var maximalSquare = function(matrix) {
    if(matrix === null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) return 0;
    var row = matrix.length;
    var col = matrix[0].length;
    
	var dp = [];
	for(var i = 0; i < row; i++) {
		dp[i] = [];
		for(var j = 0; j < col; j++) {
			dp[i][j] = 0;
		}
	}

    dp[0][0] = matrix[0][0];
    var max = matrix[0][0];

    for(var i = 1; i < col; i++) {
	    dp[0][i] = matrix[0][i];
	    max = Math.max(max, dp[0][i]);
    }
    console.log("1st max: " + max);

    for(var i = 1; i < row; i++) {
	    dp[i][0] = matrix[i][0];
	    max = Math.max(max, dp[i][0]);
    }
    console.log("2nd max: " + max);

    for(var i = 1; i < row; i++) {
	    for(var j = 1; j < col; j++) {
		    if(matrix[i][j] === 0) {
			    dp[i][j] = 0;
            } else {
	            dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
	            max = Math.max(max, dp[i][j]);
	            console.log(dp);
	            console.log(max);
            }
        }
    }
    return max*max;
};

var arr = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]];
maximalSquare(arr);