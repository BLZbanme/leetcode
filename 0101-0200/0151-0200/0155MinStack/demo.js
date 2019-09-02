/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.depth = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.depth) {
        this.stack[this.depth++] = x;
        this.stack[this.depth++] = this.depth - 2;
    }
    else {
        let preMinIndex = this.stack[this.depth - 1];
        this.stack[this.depth++] = x; 
        if (this.stack[preMinIndex] < x) {
            this.stack[this.depth++] = preMinIndex;
        }
        else {
            this.stack[this.depth++] = this.depth - 2;
        }
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.depth) {
        this.depth -= 2;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.depth) {
        return this.stack[this.depth - 2];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack[this.depth - 1]];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let len = this.stack.length;
    if (!len) {
        this.stack.push(x);
        this.stack.push(0);
    }
    else {
        let preMinIndex = this.stack[len - 1];
        this.stack.push(x);
        if (this.stack[preMinIndex] < x) {
            this.stack.push(preMinIndex);
        }
        else {
            this.stack.push(len);
        }
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        this.stack.pop();
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length) {
        return this.stack[this.stack.length - 2];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack[this.stack.length - 1]];
};


var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let len = this.stack.length;
    if (!len) {
        this.stack.push(x);
        this.stack.push(x);
    }
    else {
        let preMin = this.stack[len - 1];
        this.stack.push(x);
        if (preMin < x) {
            this.stack.push(preMin);
        }
        else {
            this.stack.push(x);
        }
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        this.stack.pop();
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length) {
        return this.stack[this.stack.length - 2];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1];
};


var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.stack.length) {
        this.stack.push(0);
        this.min = x;
    }
    else {
        this.stack.push(x - this.min);
        if (x < this.min) {
            this.min = x;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        let pop = this.stack.pop();
        if (pop < 0) {
            this.min = this.min - pop;
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this.stack[this.stack.length - 1];
    if (top > 0) {
        return top + this.min;
    }
    else {
        return this.min;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

var stack = new MinStack();
stack.push(-10);
stack.push(14);
stack.getMin();
stack.getMin();
stack.push(-20);
stack.getMin();
stack.getMin();
stack.top();
stack.getMin();
stack.pop();
stack.push(10);
stack.push(-7);
stack.getMin();
stack.push(-7);
stack.pop();
stack.top();
stack.getMin();
stack.pop();
stack;


 var stack = new MinStack();
 stack.push(-2);
 stack.push(0);
 stack.push(-1);
 stack;

 ["MinStack","push","push","getMin","getMin","push","getMin","getMin","top",
 "getMin","pop","push","push",
 "getMin","push","pop",
 "top","getMin","pop"]
[[],[-10],[14],[],[],[-20],[],[],[],[],[],[10],[-7],[],[-7],[],[],[],[]]