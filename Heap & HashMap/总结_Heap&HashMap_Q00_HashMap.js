
/*	HashMap 和 HashTable 的区别
	唯一区别就是线程安全
*/

/*
	Set: HashSet <key> 
		→ de duplicate (用来去重滴)
		→ set.contains(key) O(1), set.add(key) O(1), set.remove(key) (1) (三个最常用的 Api) 
		→ set.remove(key)
	Map: HashMap <key, value> 
		→ de duplicate + counter 
		→ map.containsKey(key) O(1), map.get(key) O(1), map.put(key, value) O(1), map.remove(key) O(1);
*/

/*
	HashMap 四个要点：
		→ 1 why you can get(key) by O(1)
		→ 2 hash function hashcode
			三种经典的 Hash 方法:
			(1)a b c % k (2)a b c / k (3)consistent hashing → rehashing
			
			0 1 2 3 4 5 6 7 8 9
			O(1) 通过key得到一个稳定固定不会变的，无规律的，介于 buckets 0 ~ capacity - 1的映射
			MD5    SHA-1   SHA-2

		→ 3 avoid collision → load factor → chaining / open addressing (linear probing)
		→ 4 new array/buckets size n / 0.75
*/

/*String Hashing Sample*/

function hash(str) {
	var sum = 0;
	for(var i = 0; i < str.length; i++) {
		sum = sum * 31 + str.charAt(i);
		sum = sum % Hash_Map_Capacity;
	}
	return sum; 
}