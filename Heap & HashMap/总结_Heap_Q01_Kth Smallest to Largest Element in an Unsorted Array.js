/*LC215 Kth Smallest to Largest Element in an UnSorted Array*/

/*Solution 1: Primitive, Sort "O(nlogn)"" and return "O(1)"" Kth element Time*/ Time(nlogn) Space(1)
var findKthLargest = function(nums, k) {
    nums.sort(function(a, b) {return b - a;});
    return nums[k - 1];
};

/*Solution 2: QuickSelection*/ O(n) ~ O(n^2)
var findKthLargest = function(nums, k) {
    var smaller = [];
    var larger = [];
    var pivot = nums[parseInt(nums.length/2)];
    var pivotCnt = 0;
    
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];      
      
        if(num > pivot) {
            larger.push(num);
        } else if(num < pivot) {
            smaller.push(num);
        } else {
            pivotCnt++;
        }
    }
      
    if(k <= larger.length) { // if larger includes k
        return findKthLargest(larger, k);
    } else if(k - larger.length - pivotCnt <= 0) { // k is part of pivot
        return pivot;
    } else { // if smaller inclues k
        return findKthLargest(smaller, k - larger.length - pivotCnt);
    }
};

/*Solution 3: MinHeap*/ --> // size n
/*
	step1: heapify(Convert an unsorted array to tree) the whole input array O(n)
	step2: keep pop out k times O(klogn)
	Time O(n + klogn)
	Space O(n) 就是 heap 的 size // streaming or very large
*/

/*Solution 4: MaxHeap*/ --> // size k
/*
	step1: heapify the first k elements from the input array O(k)
	step2: loop the remaining elements, if value of the element x is smaller 
		   than the value of heap top, update x into the heap O((n-k)logk)
	Time O(k + (n-k)logk)
	Space O(k)
*/

/*
	当 k 近似于 n 的时候，solution 4 比 solution 3 好
	当 k 远小于 n 的时候，solution 3 比 solution 4 好
	当 n 特别大，甚至拿不到 n 的值得时候，solution 4 要好
*/

/*FollowUp_1 - Smallest K elements in an unsorted array, output sorted*/
/*Solution 1: Primitive, same as the original quetion, and the output is sorted*/
/*Solution 2: Quick Selection, 要把最后的结果 sort 一遍*/
/*Solution 3: MinHeap, same with original question*/
/*Solution 4: MaxHeap, same with original question*/

/*FollowUp_2 - Top K frequency words in an Dictionary */
/*Java Vision*/
public class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        List<Integer> l = new ArrayList<Integer>();
        for(int i = 0; i < nums.length; i ++) {
            if(map.containsKey(nums[i])) {
                int val = map.get(nums[i]);
                map.put(nums[i], val + 1);
            } else {
                map.put(nums[i], 1);
                l.add(nums[i]);
            }
        }
        
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(k, new Comparator<Integer>() {
			public int compare(Integer a, Integer b) {
				return map.get(b) - map.get(a);
			}
        });
        
        for(int i = 0; i < l.size(); i++) {
            pq.offer(l.get(i));
        }
        List<Integer> list = new ArrayList<Integer>();
        while(k > 0) {
            list.add(pq.poll());
            k--;
        }
        return list;
    }
}
/*ES6 Vision*/
var topKFrequent = function(nums, k) {
    let len = nums.length;
    const bucket = {};
    const freqs = [];
    let result = [];
    
    nums.forEach((num) => {
        if (bucket[num] === undefined) {
            bucket[num] = 1;
        } else {
            bucket[num]++;
        }
    });
    
    Object.keys(bucket).forEach((num) => {
        const freq = bucket[num];
        num = parseInt(num);
        
        if (freqs[freq] === undefined) {
            freqs[freq] = [num];
        } else {
            freqs[freq].push(num);
        }
    });
    
    let j = 0;
    for (let i = freqs.length; i >= 0; i--) {
        if (freqs[i] !== undefined) {
            len = freqs[i].length;
            
            for (let m = 0; m < len; m++) {
                if (j === k) {
                    break;
                }
                
                result.push(freqs[i][m]);
                j++;
            }
            
            if (j === k) {
                break;
            }
        }
    }
    
    return result;
};


