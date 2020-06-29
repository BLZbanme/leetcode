/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.unshift(0);
    swim(nums);
    let result;
    while (k--) {
        [nums[1], nums[nums.length - 1]] = [nums[nums.length - 1], nums[1]];
        result = nums.pop();
        if (!k) {
            return result;
        }

        sink(nums, 1);
    }
};

function swim(arr) {
    const N = arr.length;
    let i = N >> 1;
    while (i >= 1) {
        sink(arr, i);
        i--;
    }
}

function sink(arr, i) {
    while (i < arr.length) {
        let j = 2 * i;
        if (j > arr.length) {
            break;
        }
        if (j < arr.length - 1 && arr[j + 1] > arr[j]) {
            j += 1;
        }
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        i = j;
    }
}

var findKthLargest = function(nums, k) {
    let N = nums.length;
    nums = [0, ...nums];

    for (let i = N >> 1; i >= 1; i--) {
        sink(nums, i, N);
    }

    let j = k;
    while (j--) {
        [nums[1], nums[N--]] = [nums[N], nums[1]];
        sink(nums, 1, N);
    }

    return nums[nums.length - k];
};

function sink(arr, k, N) {
    while (2 * k <= N) {
        let j = 2 * k;
        if (j < N && arr[j] < arr[j + 1]) {
            j++;
        }
        if (arr[k] >= arr[j]) {
            break;
        }
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k = j;
    }
}

var findKthLargest = function(nums, k) {
    shuffle(nums);
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let j = partition(nums, lo, hi);
        if (j < k) {
            lo = j + 1;
        }
        else if (j > k) {
            hi = j - 1;
        }
        else {
            break;
        }
    }
    return nums[k];
}

function partition(arr, lo, hi) {
    let i = lo;
    let j = hi + 1;
    while (true) {
        while (i < hi && arr[++i] < arr[lo]) {};
        while (j > lo && arr[--j] > arr[lo]) {};
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}

function shuffle(arr) {
    const N = arr.length;
    for (let i = 1; i < N; i++) {
        let tmp = Math.floor((N - 1) * Math.random());
        [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
    }
}

console.log(findKthLargest([1], 1));

console.log(findKthLargest([3,2,1,5,6,4], 2));

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));