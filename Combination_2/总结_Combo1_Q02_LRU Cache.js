/*RC146 LRU Cache*/

/*Solution 1: ES6*/
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.size = capacity;
    this.map = new Map();
};

LRUCache.prototype.get = function(key) {
    var value = this.map.get(key);
    if(value === undefined) {
        return -1;
    }else{
        this.map.delete(key)
        this.map.set(key, value)
        return value;
    }
};

LRUCache.prototype.set = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key)
    }

    this.map.set(key, value);
    if(this.map.size > this.size){
        for(var x of this.map.keys()){
            this.map.delete(x);
            return;
        }
    }
};

/*Solution 2: V*/
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    
    //init
    this.hashmap = {};
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

function Node(key, value){
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hashmap[key] == null) {
        return -1;
    }
    
    //remove current;
    var current = this.hashmap[key];
    current.prev.next = current.next;
    current.next.prev = current.prev;
    
    
    //more current to tail;
    this.move_to_tail(current);
    
    
    return this.hashmap[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.get(key) != -1) {
        this.hashmap[key].value = value;
        
        var current = this.hashmap[key];
        current.prev.next = current.next;
        current.next.prev = current.prev;        
        
        
        this.move_to_tail(this.hashmap[key]);
        return;
    }
    
    if (Object.keys(this.hashmap).length === this.capacity) {
        delete this.hashmap[this.head.next.key];
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
    }
    
    
    var insert = new Node(key, value);
    this.hashmap[key] = insert;
    this.move_to_tail(insert);
};

LRUCache.prototype.move_to_tail = function(node) {
    node.prev = this.tail.prev;
    this.tail.prev = node;
    
    node.prev.next = node;
    node.next = this.tail;
}