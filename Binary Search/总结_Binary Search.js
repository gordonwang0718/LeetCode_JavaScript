/*Type 1*/

var start = 0, end = length - 1, mid = start + parseInt((right - left) / 2);
while(start + 1 < end) {
	if (nums[mid] < target)
		start = mid;
	else
		end = mid;
}
return (start, end);

/*Type 2*/

var start = 0, end = length, mid = start + parseInt((right - left) / 2);
while(start < end) {
	if (nums[mid] < target)
		start = mid + 1;
	else
		end = mid;
}
return start === end ? ;

/*Type 3*/

var start = 0, end = length - 1, mid = start + parseInt((right - left) / 2);
while(start <= end) {
	if (nums[mid] < target)
		start = mid + 1;
	else
		end = mid - 1;
}
return (end, start);