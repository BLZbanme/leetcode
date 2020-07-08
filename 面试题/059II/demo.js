var MaxQueue = function() {
    this.head = new ListNode();
    this.tail = this.head;
    this.max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (!this.max.length) {
        return -1;
    }
    return this.max[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    let newNode = new ListNode(value);
    if (!this.head.next) {
        this.head.next = newNode;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.max = this.max.filter(e => e >= value);
    this.max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (!this.head.next) {
        return -1;
    }

    let value = this.head.next.val;
    if (value === this.max[0]) {
        this.max.shift();
    }
    this.head.next = this.head.next.next;
    return value;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

var a  = new MaxQueue();
console.log(a.max_value());
console.log(a.pop_front());
console.log(a.max_value());
a.push_back(46);
console.log(a.max_value());
console.log(a.pop_front());
console.log(a.max_value());
console.log(a.pop_front());
a.push_back(868);
debugger
console.log(a.pop_front());


a.push_back(2);
console.log(a.max_value());
console.log(a.pop_front())
console.log(a.max_value());



 var a  = new MaxQueue();
 a.push_back(1);
 a.push_back(2);
 console.log(a.max_value());
 console.log(a.pop_front())
 console.log(a.max_value());



 ["MaxQueue","max_value","pop_front","max_value","push_back","max_value","pop_front","max_value","pop_front","push_back","pop_front","pop_front","pop_front","push_back","pop_front","max_value","pop_front","max_value","push_back","push_back","max_value","push_back","max_value","max_value","max_value","push_back","pop_front","max_value","push_back","max_value","max_value","max_value","pop_front","push_back","push_back","push_back","push_back","pop_front","pop_front","max_value","pop_front","pop_front","max_value","push_back","push_back","pop_front","push_back","push_back","push_back","push_back","pop_front","max_value","push_back","max_value","max_value","pop_front","max_value","max_value","max_value","push_back","pop_front","push_back","pop_front","max_value","max_value","max_value","push_back","pop_front","push_back","push_back","push_back","pop_front","max_value","pop_front","max_value","max_value","max_value","pop_front","push_back","pop_front","push_back","push_back","pop_front","push_back","pop_front","push_back","pop_front","pop_front","push_back","pop_front","pop_front","pop_front","push_back","push_back","max_value","push_back","pop_front","push_back","push_back","pop_front"]
 [null,       -1,         -1,        -1,          null,       46,           46,     -1,         -1,             null,       868,        -1,         -1,         null,       525,        -1,         -1,         -1,         null,           null,646,null,646,646,646,null,123,871,null,871,871,871,285,null,null,null,null,45,-1,871,-1,-1,871,null,null,561,null,null,null,null,633,871,null,871,871,186,871,871,871,null,268,null,29,871,871,871,null,866,null,null,null,239,871,-1,871,871,871,-1,null,310,null,null,674,null,525,null,425,-1,null,720,-1,-1,null,null,871,null,373,null,null,765]