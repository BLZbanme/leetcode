/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const pq = new MinPQ();
    let max = -Infinity;
    let result;
    let Len;

    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i].shift();
        pq.insert({
            index: i,
            val: tmp
        });
        max = Math.max(max, tmp);
    }

    result = [pq.pq[1].val, max];
    Len = max - pq.pq[1].val;

    while (true) {
        let tmp = pq.pop();
        let index = tmp.index;
        if (!nums[index].length) {
            break;
        }
        tmp = nums[index].shift();
        if (tmp > max) {
            max = tmp;
        }
        
        pq.insert({
            val: tmp,
            index
        });
        pq.swim(pq.size);
        if (max - pq.pq[1].val < Len) {
            Len = max - pq.pq[1].val;
            result = [pq.pq[1].val, max];
        }
    }
    
    return result;
};

class MinPQ {
    constructor() {
        this.pq = [null];
        this.size = 0;
    }

    pop() {
        if (!this.size) {
            return;
        }
        let tmp = this.pq[1];
        [this.pq[1], this.pq[this.size]] = [this.pq[this.size], this.pq[1]];
        this.size--;
        this.sink(1);
        return tmp;
    }

    swim(k) {
        while (k > 1 && this.pq[k].val < this.pq[k >> 1].val) {
            let kHalf = k >> 1;
            [this.pq[k], this.pq[kHalf]] = [this.pq[kHalf], this.pq[k]];
            k = kHalf;
        }
    }

    insert(obj) {
        this.pq[++this.size] = obj;
        this.swim(this.size);
    }

    sink(index) {
        let i = index;
        while (i * 2 <= this.size) {
            let j = i * 2;
            if (j < this.size && this.pq[j].val > this.pq[j + 1].val) {
                j++;
            }
            if (this.pq[i].val < this.pq[j].val) {
                break;
            }
            [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
            i = j;
        }
    }
}

console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]));