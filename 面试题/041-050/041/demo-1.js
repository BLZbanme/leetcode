/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.size = 0;
    this.maxPQ = new MaxPQ();
    this.minPQ = new MinPQ();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.size++;

    let maxOfMaxPQ = this.maxPQ.pq[1] || Infinity;

    if (num < maxOfMaxPQ) {
        this.maxPQ.insert(num);
    }
    else {
        this.minPQ.insert(num);
    }

    if (this.maxPQ.size > this.minPQ.size + 1) {
        this.minPQ.insert(this.maxPQ.delMax());
    }

    if (this.minPQ.size > this.maxPQ.size + 1) {
        this.maxPQ.insert(this.minPQ.delMin());
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.size % 2) {
        return this.maxPQ.size > this.minPQ.size ?this.maxPQ.pq[1] : this.minPQ.pq[1];
    }
    else {
        return (this.maxPQ.pq[1] + this.minPQ.pq[1]) / 2;
    }
};


class MaxPQ {

    constructor(capacity) {
        this.size = 0;
        capacity = capacity || 1;
        this.pq = new Array(capacity + 1);
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(val) {
        if (this.size + 1 === this.pq.length) {
            this.resize(this.pq.length * 2);
        }
        this.pq[++this.size] = val;
        this.swim(this.size);
    }

    delMax() {
        if (!this.isEmpty()) {
            let result = this.pq[1];
            this.exch(1, this.size);
            this.pq[this.size--] = null;
            this.sink(1);
            if (this.size === this.pq.length >> 2) {
                this.resize(this.pq.length >> 1);
            }
            return result;
        }
    }

    resize(max) {
        let tmp = new Array(max);
        for (let i = 0; i <= this.size; i++) {
            tmp[i] = this.pq[i];
        }
        this.pq = tmp;
    }

    swim(k) {
        while (k > 1 && this.pq[k] > this.pq[Math.floor(k / 2)]) {
            let khalf = k >> 1;
            this.exch(k, khalf);
            k = khalf;
        }
    }

    exch(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }

    sink(k) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j < this.size && this.pq[j] < this.pq[j + 1]) {
                j++;
            }
            if (this.pq[k] >= this.pq[j]) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

}

class MinPQ {

    constructor(capacity) {
        this.size = 0;
        capacity = capacity || 1;
        this.pq = new Array(capacity + 1);
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(val) {
        if (this.size + 1 === this.pq.length) {
            this.resize(this.pq.length * 2);
        }
        this.pq[++this.size] = val;
        this.swim(this.size);
    }

    delMin() {
        if (!this.isEmpty()) {
            let result = this.pq[1];
            this.exch(1, this.size);
            this.pq[this.size--] = null;
            this.sink(1);
            if (this.size === this.pq.length >> 2) {
                this.resize(this.pq.length >> 1);
            }
            return result;
        }
    }

    resize(max) {
        let tmp = new Array(max);
        for (let i = 0; i <= this.size; i++) {
            tmp[i] = this.pq[i];
        }
        this.pq = tmp;
    }

    swim(k) {
        while (k > 1 && this.pq[k] < this.pq[Math.floor(k / 2)]) {
            let khalf = k >> 1;
            this.exch(k, khalf);
            k = khalf;
        }
    }

    exch(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }

    sink(k) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j < this.size && this.pq[j] > this.pq[j + 1]) {
                j++;
            }
            if (this.pq[k] <= this.pq[j]) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder();
obj.addNum(40);
console.log(obj.findMedian()); // 40
obj.addNum(12);
console.log(obj.findMedian()); // 26
obj.addNum(16);
console.log(obj.findMedian()); // 16
obj.addNum(14);
console.log(obj.findMedian()); // 15
obj.addNum(35);
console.log(obj.findMedian()); // 16
obj.addNum(19);
console.log(obj.findMedian()); // 17.5
obj.addNum(34);
console.log(obj.findMedian()); // 19
obj.addNum(35);
console.log(obj.findMedian()); // 26.5
obj.addNum(28);
console.log(obj.findMedian()); // 28
obj.addNum(35);
console.log(obj.findMedian()); // 31
obj.addNum(26);
console.log(obj.findMedian()); // 28
obj.addNum(6);
console.log(obj.findMedian()); // 27
obj.addNum(8);
console.log(obj.findMedian()); // 26
obj.addNum(2);
console.log(obj.findMedian()); // 22.5
obj.addNum(14);
console.log(obj.findMedian()); // 19
obj.addNum(25);
console.log(obj.findMedian()); // 22
obj.addNum(25);
console.log(obj.findMedian()); // 25
obj.addNum(4);
console.log(obj.findMedian()); // 22
obj.addNum(33);
console.log(obj.findMedian()); // 25
obj.addNum(18);
console.log(obj.findMedian()); // 22
obj.addNum(10);
console.log(obj.findMedian()); // 19
obj.addNum(14);
console.log(obj.findMedian()); // 18.5
obj.addNum(27);
console.log(obj.findMedian()); // 19
obj.addNum(3);
console.log(obj.findMedian()); // 18.5
obj.addNum(35);
console.log(obj.findMedian()); // 19
obj.addNum(13);
console.log(obj.findMedian()); // 18.5
obj.addNum(24);
console.log(obj.findMedian()); // 19
obj.addNum(27);
console.log(obj.findMedian()); // 21.5
obj.addNum(14);
console.log(obj.findMedian()); // 19
obj.addNum(5);
console.log(obj.findMedian()); // 18.5
obj.addNum(0);
console.log(obj.findMedian()); // 18
obj.addNum(38);
console.log(obj.findMedian()); // 18.5
obj.addNum(19);
console.log(obj.findMedian()); // 19
obj.addNum(25);
console.log(obj.findMedian()); // 19
obj.addNum(11);
console.log(obj.findMedian()); // 19
obj.addNum(14);
console.log(obj.findMedian()); // 18.5
obj.addNum(31);
console.log(obj.findMedian()); // 19
obj.addNum(30);
console.log(obj.findMedian()); // 19
obj.addNum(11);
console.log(obj.findMedian()); // 19
obj.addNum(31);
console.log(obj.findMedian()); // 19
obj.addNum(0);
console.log(obj.findMedian()); // 19




var obj = new MedianFinder();
obj.addNum(-1);
console.log(obj.findMedian()); // -1
obj.addNum(-2);
console.log(obj.findMedian()); // -1.5
obj.addNum(-3);
console.log(obj.findMedian()); // -2
obj.addNum(-4);
console.log(obj.findMedian()); // -2.5
obj.addNum(-5);
console.log(obj.findMedian()); // -3

 var obj = new MedianFinder();
 obj.addNum(1);
 obj.addNum(2);
 console.log(obj.findMedian()); // 1.5
 obj.addNum(3);
 console.log(obj.findMedian()); //2.0


 var obj = new MedianFinder();
 obj.addNum(2);
 console.log(obj.findMedian()); //2.0
 obj.addNum(3);
 console.log(obj.findMedian()); //2.5
