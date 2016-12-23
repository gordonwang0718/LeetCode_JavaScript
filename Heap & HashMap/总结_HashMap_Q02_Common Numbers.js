/*Question 1: Given two array_1[n], array_2[m], find the common numbers*/

/*Solution 1: sort both array1 and array2, two pointers, 谁小移动睡*/
/*
	1 3 5 8 8 10
          i
	2 4 7 8 8 9
          j
	Time O(nlogn + mlogm + m+n)
*/

/*Solution 2: HashSet*/
/*
	step1: Hash the whole smaller array
	step2: loop all elements from bigger arrays and check duplicate
	O(m + n)
	O(m)
*/

/*Solution 3: Sort*/
/*
	sort m << n, m = 3, n = 1000 O(nlogn)
	sort on larger n, / sort on smaller one m
	for every m, binary search: O(mlogn)
	O(nlogn + mlogn) → O(nlogn)
*/

/*Solution 4: two pointers two for loop O(m*n)*/
