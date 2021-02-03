function medianSlidingWindow(nums, k) {
    if (!nums || !nums.length)
        return [];
    if (nums.length === 1 || k === 1)
        return nums;
    var result = [];
    if (k === 2) {
        for (var i = 1; i < nums.length; i++) {
            result.push((nums[i] + nums[i - 1]) / 2);
        }
        return result;
    }
    var maxPq = new PriorityQueue(false);
    var minPq = new PriorityQueue(true);
    maxPq.insert(Math.min(nums[0], nums[1]));
    minPq.insert(Math.max(nums[0], nums[1]));
    debugger
    for (var i = 2; i < nums.length; i++) {
        if (i >= k) {
            var pre = nums[i - k];
            if (pre <= maxPq.queue[1]) {
                while (maxPq.queue[1] !== pre) {
                    minPq.insert(maxPq.pop());
                }
                maxPq.pop();
            }
            else {
                while (minPq.queue[1] !== pre) {
                    maxPq.insert(minPq.pop());
                }
                minPq.pop();
            }
        }
        if (nums[i] <= maxPq.queue[1]) {
            maxPq.insert(nums[i]);
        }
        else {
            minPq.insert(nums[i]);
        }
        while (maxPq.size < minPq.size - 1) {
            maxPq.insert(minPq.pop());
        }
        while (minPq.size < maxPq.size - 1) {
            minPq.insert(maxPq.pop());
        }
        if (i >= k - 1) {
            if (k & 1) {
                result.push(maxPq.size > minPq.size ? maxPq.queue[1] : minPq.queue[1]);
            }
            else {
                result.push((maxPq.queue[1] + minPq.queue[1]) / 2);
            }
        }
    }
    return result;
}
;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(small) {
        this.queue = [];
        this.size = 0;
        this.small = small;
    }
    PriorityQueue.prototype.insert = function (val) {
        this.queue[++this.size] = val;
        this.swim(this.size);
    };
    PriorityQueue.prototype.compare = function (i, j) {
        return this.small ? this.queue[j] > this.queue[i] : this.queue[i] > this.queue[j];
    };
    PriorityQueue.prototype.swim = function (k) {
        var _a;
        while (k > 1) {
            var j = k >> 1;
            if (!this.compare(j, k)) {
                _a = [this.queue[k], this.queue[j]], this.queue[j] = _a[0], this.queue[k] = _a[1];
            }
            k = j;
        }
    };
    PriorityQueue.prototype.sink = function (k) {
        var _a;
        while ((k << 1) <= this.size) {
            var j = k << 1;
            if (j + 1 <= this.size && this.compare(j + 1, j)) {
                j++;
            }
            if (this.compare(k, j)) {
                break;
            }
            _a = [this.queue[j], this.queue[k]], this.queue[k] = _a[0], this.queue[j] = _a[1];
            k = j;
        }
    };
    PriorityQueue.prototype.pop = function () {
        var _a;
        var res = this.queue[1];
        _a = [this.queue[this.size], this.queue[1]], this.queue[1] = _a[0], this.queue[this.size] = _a[1];
        this.size--;
        this.sink(1);
        return res;
    };
    return PriorityQueue;
}());

console.log(medianSlidingWindow([10,9,8,7,6,5,4,3,2,1,0,11], 6)); //[7.5,6.5,5.5,4.5,3.5,2.5,2.5]
console.log(medianSlidingWindow([1, 2], 2)); //[]
console.log(medianSlidingWindow([1], 1)); //[1]
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1, 4, 2, 3], 4)); //[2.5]
