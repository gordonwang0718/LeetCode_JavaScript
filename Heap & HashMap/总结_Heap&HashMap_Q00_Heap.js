
/*	What is Heap
	Heap可以视为Complete Binary Tree，Complete Binary Tree的一个“优秀”的性质
	是，除了最底层之外，每一层都是满的，这使得Heap可以利用Array来表示（普通的一般的
	Binary Tree 通常用 Linked List 作为基本容器表示），每一个结点对应 Array 中的
	一个 Element。
	如下图，是一个堆和数组的相互关系

			        16(1)                1   2   3   4  5  6  7  8  9 10
		      /                \        [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
		   14(2)              10(3)
		/         \        /         \
	  8(4)       7(5)    9(6)       3(7)
	 /    \      /
   2(8)  4(9)  1(10)
*/

/*	Relationship Between Heap and Array
	对于给定的某个结点的下标 i，可以很容易的计算出这个结点的Parent node、Child Node
	的index：
	   Parent(i) = floor(i/2)，i 的Parent node index
		 Left(i) = 2i，i 的Left Child Node index
		Right(i) = 2i + 1，i 的Right Child Node index
*/


/*	MaxHeap & MinHeap
	
	MaxHeap: 
	for everyNode, the current node's value should bigger than 
	its left & right child's value
	
	最大堆中的最大元素值出现在根结点（堆顶）
	堆中每个父节点的元素值都大于等于其孩子结点（如果存在）
	
	MinHeap:
	最小堆中的最小元素值出现在根结点（堆顶）
	堆中每个父节点的元素值都小于等于其孩子结点（如果存在）
*/

/*	Heap Sort
	Heap Sort就是把最大堆堆顶的最大数取出，将剩余的堆继续调整为最大堆，再次将堆顶的最大
	数取出，这个过程持续到剩余数只有一个时结束。在堆中定义以下几种操作：
		最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
		创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆
		堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算

	*需要注意的一个问题是：Array 都是 Zero-Based，这就意味着我们的堆数据结构模型要发生改变
				    
	逻辑结构: 		 16(0)                存储结构是一个 array:
		      /                \            	 0   1   2   3  4  5  6  7  8  9
		   14(1)              10(2)     		[16, 14, 10, 8, 7, 9, 3, 2, 4, 1] 
		/         \        /         \
	  8(3)       7(4)    9(5)       3(6)
	 /    \      /
   2(7)  4(8)  1(9)

    相应的，几个计算公式也要作出相应调整：
		Parent(i) = floor((i-1)/2)，i 的父节点下标
		  Left(i) = 2i + 1，i 的左子节点下标
		 Right(i) = 2(i + 1)，i 的右子节点下标
	最大堆调整（MAX‐HEAPIFY）的作用是保持最大堆的性质，是创建最大堆的核心子程序.
*/

/*
	由于一次调整后，堆仍然违反堆性质，所以需要递归的测试，使得整个堆都满足堆性质，
	用 JavaScript 可以表示如下：
*/
/**
 * 从 index 开始检查并保持最大堆性质
 *
 * @array
 *
 * @index 检查的起始下标
 *
 * @heapSize 堆大小
 *
 **/
function maxHeapify(array, index, heapSize) {
	var iMax = index,
	   iLeft = 2 * index + 1,
      iRight = 2 * (index + 1);
    
    if (iLeft < heapSize && array[index] < array[iLeft]) {
    	iMax = iLeft;
    }

    if (iRight < heapSize && array[iMax] < array[iRight]) {
    	iMax = iRight;
    }

    if (iMax != index) {
    	swap(array, iMax, index);
    	maxHeapify(array, iMax, heapSize); // 递归调整
    }
}

function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

/*
	Heap 做题需要掌握的 6 点
		1. heap order ? Min Heap / Max Heap minimum / maximum
		2. heap is always a complete binary tree
		3. you can only access the top node when you use it.
		4. insert(push/offer/add) pop(poll/delete/remove) get update/put
		5. initialize heapify
		   heapify O(n) convert an unsorted array to tree(从右向左，从后向前)
		   insert() O(logn) 
           delete() O(logn)
           update() O(logn)
           get() O(1)
		6. Given an element with index x in the unsorted array,
			parent x - 1 / 2
			lchild 2x + 1
			rchild 2x + 2
*/

/******************************************************
* file    : 堆
* author  : "page"
* time    : "2016/11/02"
*******************************************************/
function Heap()
{
	this.data = [];
}

Heap.prototype.print = function () {
	console.log("Heap: " + this.data);
}

Heap.prototype.build = function(data){
	// 初始化
	this.data = [];
	if (!data instanceof Array)
		return false;

	// 入堆
	for (var i = 0; i < data.length; ++i) {
		this.insert(data[i]);
	}

	return true;
}

Heap.prototype.insert = function( nValue ){
	if (!this.data instanceof Array) {
		this.data = [];
	}

	this.data.push(nValue);
	// 更新新节点
	var nIndex = this.data.length-1;
	var nFatherIndex = Math.floor((nIndex-1)/2);
	while (nFatherIndex > 0){
		if (this.data[nIndex] < this.data[nFatherIndex]) {
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nFatherIndex];
			this.data[nFatherIndex] = temp;
		}

		nIndex = nFatherIndex;
		nFatherIndex = Math.floor((nIndex-1)/2);
	}
}

Heap.prototype.delete = function(  ){
	if (!this.data instanceof Array) {
		return null;
	}

	var nIndex = 0;
	var nValue = this.data[nIndex];
	var nMaxIndex = this.data.length-1;
	// 更新新节点
	var nLeaf = this.data.pop();
	this.data[nIndex] = nLeaf;

	while (nIndex < nMaxIndex ){
		var nLeftIndex = 2 * (nIndex+1) - 1;
		var nRightIndex = 2 * (nIndex+1);

		// 找最小的一个子节点(nLeftIndex < nRightIndex)
		var nSelectIndex = nLeftIndex;
		if (nRightIndex < nMaxIndex) {
			nSelectIndex = (this.data[nLeftIndex] > this.data[nRightIndex]) ? nRightIndex : nLeftIndex;
		}

		if (nSelectIndex < nMaxIndex && this.data[nIndex] > this.data[nSelectIndex] ){
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nSelectIndex];
			this.data[nSelectIndex] = temp;
		}

		nIndex = nSelectIndex;
	}

	return nValue;
}
// test
var heap = new Heap();
heap.build([1, 3, 5, 11, 4, 6, 7, 12, 15, 10, 9, 8]);
heap.print();
// insert
heap.insert(2);
heap.print();
// delete
heap.delete();
heap.print();