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

console.log(medianSlidingWindow([1, 2], 2))//[1.5]
console.log(medianSlidingWindow([1], 1))//[1]
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3))//[1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1,4,2,3], 4))//[2.5]