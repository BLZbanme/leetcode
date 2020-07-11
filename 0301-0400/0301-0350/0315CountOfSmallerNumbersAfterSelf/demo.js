/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const N = nums.length;
    if (!N) {
        return []
    }

    const newArr = Array(N);
    for (let i = 0; i < N; i++) {
        newArr[i] = {
            value: nums[i],
            index: i
        }
    }

    const count = Array(N).fill(0);

    mergeSort(newArr, 0, N - 1, count);

    return count;
};

function mergeSort(nums, lo, hi, count) {
    if (lo === hi) {
        return;
    }

    let mid = lo + ((hi - lo) >> 1);

    mergeSort(nums, lo, mid, count);
    mergeSort(nums, mid + 1, hi, count);

    merge(nums, lo, mid, hi, count);
}

function merge(nums, lo, mid, hi, count) {
    let tmp = Array(nums.length);
    for (let i = lo; i <= hi; i++) {
        tmp[i] = nums[i]; 
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            nums[k] = tmp[j++];
        }
        else if (j > hi) {
            nums[k] = tmp[i++];
        }
        else if (tmp[i].value <= tmp[j].value) {
            nums[k] = tmp[i++];
        }
        else {
            for (let m = i; m <= mid; m++) {
                count[tmp[m].index]++;
            }
            nums[k] = tmp[j++];
        }
    }   
}

console.log(countSmaller([-1, -1])) //[0, 0]
console.log(countSmaller([5, 2, 6, 1]))