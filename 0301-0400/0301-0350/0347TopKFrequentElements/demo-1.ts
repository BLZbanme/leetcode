function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0 ) + 1);
    }
    const arr = [];
    for (let [key, val] of map) {
        arr.push({
            key,
            val
        })
    }
    let lo = 0;
    let hi = arr.length - 1;
    while (lo < hi) {
        let mid = partition(arr, lo, hi);
        if (mid === k - 1) {
            return arr.slice(0, k).map(e => e.key);
        }
        else if (mid < k - 1) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return [];
};

function partition(arr: Array<object>, lo: number, hi: number): number {
    let i = lo;
    let j = hi + 1;
    while (i <= j) {
        while (arr[++i].val > arr[lo].val && i < j);
        while (arr[--j].val < arr[lo].val && i < j);
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[lo], arr[i]] = [arr[i], arr[lo]];
    return i;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));