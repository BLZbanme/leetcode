# 632.Smallest Range Covering Elements from K Lists

You have `k` lists of sorted integers in ascending order. Find the **smallest** range that includes at least one number from each of the `k` lists.

We define the range [a,b] is smaller than range [c,d] if `b-a < d-c` or `a < c` if `b-a == d-c`.

 

**Example 1:**

```
Input: [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
```

 

**Note:**

1. The given list may contain duplicates, so ascending order means >= here.
2. 1 <= `k` <= 3500
3. -105 <= `value of elements` <= 105.



##### 2020.08.01

##### 	我的思路：

优先队列

```javascript
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
```
