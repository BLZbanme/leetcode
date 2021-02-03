function medianSlidingWindow(nums: number[], k: number): number[] {
    const small = new PriorityQueue(true);
    const big = new PriorityQueue(false);

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