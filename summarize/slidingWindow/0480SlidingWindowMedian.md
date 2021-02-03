# 480. Sliding Window Median

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:

```
[2,3,4]` , the median is `3
[2,3]`, the median is `(2 + 3) / 2 = 2.5
```

Given an array *nums*, there is a sliding window of size *k* which is moving from the very left of the array to the very right. You can only see the *k* numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

For example,
Given *nums* = `[1,3,-1,-3,5,3,6,7]`, and *k* = 3.

```
Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
```

Therefore, return the median sliding window as `[1,-1,-1,3,5,6]`.

**Note:**
You may assume `k` is always valid, ie: `k` is always smaller than input array's size for non-empty array.
Answers within `10^-5` of the actual value will be accepted as correct.

#### 2021.02.03

##### 	我的思路：

双堆，一个大顶堆一个小顶堆，但是没别人的精妙！

```javascript
function medianSlidingWindow(nums: number[], k: number): number[] {
    if (!nums || !nums.length) return []
    if (nums.length === 1 || k === 1) return nums;

    const result = [];
    
    if (k === 2) {
        for (let i = 1; i < nums.length; i++) {
            result.push((nums[i] + nums[i - 1]) / 2);
        }
        return result;
    }

    const maxPq = new PriorityQueue(false);
    const minPq = new PriorityQueue(true);
    maxPq.insert(Math.min(nums[0], nums[1]));
    minPq.insert(Math.max(nums[0], nums[1]));

    for (let i = 2; i < nums.length; i++) {
        if (i >= k) {
            let pre = nums[i - k];
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
                result.push((maxPq.queue[1] + minPq.queue[1]) / 2)
            }
        }
    }
    return result;
};

class PriorityQueue {
    queue: Array<number> = []
    size: number = 0
    small: boolean

    constructor(small: boolean) {
        this.small = small
    }

    insert(val: number) {
        this.queue[++this.size] = val;
        this.swim(this.size);
    }

    compare(i: number, j: number): boolean {
        return this.small ? this.queue[j] > this.queue[i] : this.queue[i] > this.queue[j];
    }

    swim(k: number) {
        while (k > 1) {
            let j = k >> 1;
            if (!this.compare(j, k)) {
                [this.queue[j], this.queue[k]] = [this.queue[k], this.queue[j]];
            }
            k = j;
        }
    }

    sink(k: number) {
        while ((k << 1) <= this.size) {
            let j = k << 1;
            if (j + 1 <= this.size && this.compare(j + 1, j)) {
                j++;
            }
            if (this.compare(k, j)) {
                break;
            }
            [this.queue[k], this.queue[j]] = [this.queue[j], this.queue[k]];
            k = j;
        }
    }

    pop() {
        let res = this.queue[1];
        [this.queue[1], this.queue[this.size]] = [this.queue[this.size], this.queue[1]];
        this.size--;
        this.sink(1);
        return res;
    }
}
```

##### 别人的写法：

优化处：

1. 奇数时，中位数永远在大顶堆的顶部
2. 当出现要出堆的值不在堆顶时，先暂时放着，延后删除

```typescript
function medianSlidingWindow(nums: number[], k: number): number[] {
    const small = new PriorityQueue(false);
    const big = new PriorityQueue(true);

    const getMid = (): number => {
        if (k & 1) return small.queue[1];
        return (small.queue[1] + big.queue[1]) / 2;
    }

    for (let i = 0; i < k; i++) {
        small.insert(nums[i]);
    }
    for (let i = 0; i < k >> 1; i++) {
        big.insert(small.pop());
    }
    const result = [getMid()];
    const map = new Map();

    for (let i = k; i < nums.length; i++) {
        let balance = 0;
        let left = nums[i - k];
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

        while (small.size && map.get(small.queue[1])) {
            map.set(small.queue[1], map.get(small.queue[1]) - 1);
            small.pop();
        }

        while (big.size && map.get(big.queue[1])) {
            map.set(big.queue[1], map.get(big.queue[1]) - 1);
            big.pop();
        }

        result.push(getMid());
    }
    return result;
}
```

