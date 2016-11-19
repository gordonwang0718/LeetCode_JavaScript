Array vs. Linked List

Similar:
1. Both Arrays and Linked List can be used to store linear data.

Difference:
1. The Size of the Array is fixed, The Size of the Linked List is dynamic.
2. In Array, inserting or removing items from the beginning or from the middle of the Array is expensive, because the elements need to be shifted over. But in Linked List we do not need to shift 
3. Unlike Array, in Linked List, the elements are not placed contiguously in memory: Each element consists of a node that stores the element itself and also a reference that points to the next elements. So it needs Extra memory space for a pointer is required with each element of the list.
4. Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists.
5. Arrays have better cache locality that can make a pretty big difference in performance.

Array List vs. Linked List vs. Vector

ArrayList and LinkedList both implements List interface and their methods and results are almost identical

1. ArrayList is implemented as a resizable array. As more elements are added to ArrayList, its size is increased dynamically. It's elements can be accessed directly by using the get and set methods, since ArrayList is essentially an array
2. LinkedList is implemented as a double linked list. Its performance on add and remove is better than Arraylist, but worse on get and set methods.
3. Vector is similar with ArrayList, but it is synchronized.

ArrayList is a better choice if your program is thread-safe. Vector and ArrayList require more space as more elements are added. Vector each time doubles its array size, while ArrayList grow 50% of its size each time. LinkedList, however, also implements Queue interface which adds more methods than ArrayList and Vector, such as offer(), peek(), poll(), etc.

Linked List Bisic








