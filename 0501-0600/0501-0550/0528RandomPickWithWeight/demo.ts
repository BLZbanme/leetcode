class Solution1 {
    ratio: Array<number>
    indexNo: number

    constructor(w: number[]) {
        this.indexNo = w.length;
        const sum = w.reduce((pre, cur) => pre + cur)
        let tmp = 0;
        this.ratio = w.map(e => {
            tmp += e;
            return tmp / sum;
        })
    }

    pickIndex(): number {
        const random = Math.random();
        for (let i = 0; i < this.indexNo; i++) {
            if (random < this.ratio[i]) {
                return i;
            }
        }
        return 0;
    }
}

class Solution {
    preSum: Array<number>
    sum: number

    constructor(w: number[]) {
        let tmp = 0;
        this.preSum = w.map(e => {
            tmp += e;
            return tmp;
        })
        this.sum = tmp;
    }

    pickIndex(): number {
        const target = Math.floor(this.sum * Math.random());
        return binarySearch(this.preSum, target);
    }
}

function binarySearch(arr: Array<number>, target: number) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            hi = mid;
        }
        else if (arr[mid] <= target) {
            lo = mid + 1;
        }
    }
    return lo;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */