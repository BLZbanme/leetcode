/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let tmp = this.stack.pop();
    if (tmp === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length) {
        return this.stack[this.stack.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    if (this.minStack.length) {
        return this.minStack[this.minStack.length - 1];
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */