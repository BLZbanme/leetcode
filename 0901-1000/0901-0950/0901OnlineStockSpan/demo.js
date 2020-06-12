var StockSpanner = function() {
    this.stack = [];
    this.queue = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    while (this.stack.length && price >=  this.stack[this.stack.length - 1].value) {
        this.stack.pop();
    }
    let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
    this.queue.push(price);
    this.stack.push({
        index: this.queue.length,
        value: price
    });
    return this.queue.length - tmp;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


var StockSpanner = function() {
    this.prices = [];
    this.weights = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let w = 1;
    while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
        this.prices.pop();
        w += this.weights.pop();
    }
    this.prices.push(price);
    this.weights.push(w);
    return w;
};

var StockSpanner = function() {
    this.stack = [];
    this.count = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    while (this.stack.length && price >=  this.stack[this.stack.length - 1].value) {
        this.stack.pop();
    }
    let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
    this.count++;
    this.stack.push({
        index: this.count,
        value: price
    });
    return this.count - tmp;
};

var S = new StockSpanner();

 console.log(S.next(100))//1
 console.log(S.next(80))//1
 console.log(S.next(60))//1
 console.log(S.next(70))//2
 console.log(S.next(60))//1
 console.log(S.next(75))//4
 console.log(S.next(85))//6