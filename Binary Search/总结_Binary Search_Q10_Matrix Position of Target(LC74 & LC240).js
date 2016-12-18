/*TYPE 3*/

[
	[1 , 3 , 5 , 7 ],
	[10, 11, 16, 20],
	[23, 30, 34, 50]
]

[
	[1 , 4 , 7 , 11, 15],
	[2 , 5 , 8 , 12, 19],
	[3 , 6 , 9 , 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30]
]

var matrixPosition = function(matrix, target) {
	if(matrix.length === 0 || matrix[0].length === 0) return [-1, -1];

	var row = matrix.length;
	var col = matrix[0].length;
	var start = 0; end = row * col - 1;
	var result = [];

	while(start <= end) {
		var mid = start + parseInt((end - start) / 2);
		var val = matrix[mid / col][mid % col]; // 坐标对应关系
		if(val === target) {
			result[0] = mid / col;
			result[1] = mid % col;
			return result;
		} else if(val < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return [-1, -1];
}