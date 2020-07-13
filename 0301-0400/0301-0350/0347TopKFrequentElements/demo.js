/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    nums.forEach(e => {
        map.set(e , (map.get(e) || 0) + 1);
    })

    let newArr = [];
    map.forEach((val, key) => {
        newArr.push({
            val: key,
            num: val
        })
    }) 

    newArr.sort((a, b) => {
        return b.num - a.num
    })

    const result = [];
    for (let i = 0; i < k; i++) {
        result[i] = newArr[i].val
    }

    return result;
};

var topKFrequent = function(nums, k) {

    let map = new Map();
    nums.forEach(e => {
        map.set(e , (map.get(e) || 0) + 1);
    })

    let newArr = [];
    map.forEach((val, key) => {
        newArr.push({
            val: key,
            num: val
        })
    }) 

    if (newArr.length == 1) {
        return [newArr[0].val]
    }
    
    let lo = 0;
    let hi = newArr.length - 1;
    k--;

    while (true) {
        let mid = partition(newArr, lo, hi);
        if (mid < k) {
            lo = mid + 1;
        }
        else if (mid > k) {
            hi = mid - 1;
        }
        else {
            return newArr.slice(0, k + 1).map(e => e.val);
        }
    }
};

function partition(arr, lo, hi) {
    if (lo == hi) {
        return lo;
    }

    let i = lo;
    let j = hi + 1;
    while (true) {
        while (arr[++i].num > arr[lo].num && i !== hi) {};
        while (arr[--j].num < arr[lo].num && j !== lo) {};
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}

console.log(topKFrequent([1,1,1,2,2,2,3,3,3], 3)); //[1, 2, 3]

console.log(topKFrequent([1,1,1,2,2,3], 2)); //[1, 2]
console.log(topKFrequent([1], 1)); //[1]