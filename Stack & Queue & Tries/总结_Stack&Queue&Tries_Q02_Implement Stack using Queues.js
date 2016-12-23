/*LC225 Implement Stack using Queues*/

/*Solution 1: Using one Queue*/
/**
 * @constructor
 */
var Stack = function() {
    this.queue = [];  
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.queue.pop();  
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.queue[this.queue.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.queue.length === 0;
};

/*Solution 2: Using Two Queue*/

/**
 * @constructor
 */
var Stack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.queue2.push(x);
    
    while(this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }
    
    temp = this.queue2;
    this.queue2 = this.queue1;
    this.queue1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.queue1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.queue1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.queue1.length === 0;
};
