/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.priorityQueue = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.priorityQueue.length) {
        this.priorityQueue.push(num);
    }
    else {
        let index = binarySearch(this.priorityQueue, num);
        this.priorityQueue.splice(index, 0, num);
    }
};

function binarySearch(arr, val) {
    let lo = 0;
    let hi = arr.length;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === val) {
            return mid;
        }
        else if (arr[mid] < val) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.priorityQueue.length % 2) {
        return this.priorityQueue[(this.priorityQueue.length - 1) / 2];
    }
    else {
        return (this.priorityQueue[this.priorityQueue.length / 2 - 1] 
            + this.priorityQueue[this.priorityQueue.length / 2]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

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
