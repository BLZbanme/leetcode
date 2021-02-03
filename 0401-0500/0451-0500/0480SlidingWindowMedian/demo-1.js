function medianSlidingWindow(nums, k) {
    var small = new PriorityQueue(true);
    var big = new PriorityQueue(false);
    var getMid = function () {
        if (k & 1)
            return small.queue[1];
        return (small.queue[1] + big.queue[1]) / 2;
    };
    for (var i = 0; i < k; i++) {
        small.insert(nums[i]);
    }
    for (var i = 0; i < k >> 1; i++) {
        big.insert(small.pop());
    }
    var result = [getMid()];
    var map = new Map();
    for (var i = k; i < nums.length; i++) {
        var balance = 0;
        var left = nums[i - k];
        map.set(left, (map.get(left) || 0) + 1);
        if (small.size && left <= small.queue[1]) {
            balance--;
        }
        else {
            balance++;
        }
        if (small.size && nums[i] <= small.queue[1]) {
            small.insert(nums[i]);
            balance++;
        }
        else {
            big.insert(nums[i]);
            balance--;
        }
        if (balance > 0) {
            big.insert(small.pop());
        }
        if (balance < 0) {
            small.insert(big.pop());
        }
        while (small && map.get(small.queue[1])) {
            map.set(small.queue[1], map.get(small.queue[1]) - 1);
            small.pop();
        }
        while (big && map.get(big.queue[1])) {
            map.set(big.queue[1], map.get(big.queue[1]) - 1);
            big.pop();
        }
        result.push(getMid());
    }
    return result;
}
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
console.log(medianSlidingWindow([1, 2], 2)); //[1.5]
console.log(medianSlidingWindow([1], 1)); //[1]
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1, 4, 2, 3], 4)); //[2.5]
