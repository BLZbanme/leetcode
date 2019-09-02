# 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.

 

**Example:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

##### 2019.09.02

##### 	我的思路：

​		每次入栈的时候除了当前值以外，接着再推一个当前最小值入栈。

```javascript
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
```

##### 别人的写法:

​		存的是与最小值的差值，并且其中有几处精妙的地方，如push方法中else分支改变最小值、top方法中的else分支。神仙打架！

````javascript
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
````

