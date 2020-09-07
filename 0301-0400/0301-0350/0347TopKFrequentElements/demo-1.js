function topKFrequent(nums, k) {
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
    while (lo <= hi) {
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

function partition(arr, lo, hi) {
    if (lo == hi) {
        return lo;
    }

    let i = lo;
    let j = hi + 1;
    while (i < j) {
        while (arr[++i].val > arr[lo].val && i < hi);
        while (arr[--j].val < arr[lo].val && lo < j);
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));

console.log(topKFrequent([5,3,1,1,1,3,73,1], 1)); //[1]

console.log(topKFrequent([1], 1));


