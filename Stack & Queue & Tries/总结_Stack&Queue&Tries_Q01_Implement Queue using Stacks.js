/*LC232 Implement Queue using Stacks*/

/*Solution 1: Using one Stack*/
/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
     this.stack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stack.length === 0;
};


/*Solution 2: Using two Stack*/

/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = []; // come in
    this.stack2 = []; // for go out
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var len = this.stack2.length,
        i;
    
    for (i = 0; i < len; i++) {
        this.stack1.push(this.stack2.pop());
    }
    
    this.stack1.push(x);
    
    for (i = 0; i < len + 1; i++) {
        this.stack2.push(this.stack1.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var x = this.stack2.pop();
    
    this.stack2.push(x);
    return x;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var len = this.stack2.length;
        
    if (len === 0) {
        return true;
    }
    
    return false;
};