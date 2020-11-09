/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const N = nums.length;
    let i = N - 1;
    while (i > 0) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
        i--
    }
    if (!i) {
        for (let i = 0; i < N >> 1; i++) {
            [nums[i], nums[N - i - 1]] = [nums[N - i - 1], nums[i]]
        }
    }
    else {
        let index = binarySearch(nums, nums[i - 1], i, N - 1);
        [nums[index], nums[i - 1]] = [nums[i - 1], nums[index]]
        let j = N - 1;
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j--;
            i++;
        }
    }
    return;
};

function binarySearch(arr: Array<number>, target: number, lo: number, hi: number): number {
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return hi;
}

console.log(nextPermutation([1, 5, 1])) //[5, 1, 1]
console.log(nextPermutation([1, 3, 2])) //[2, 1, 3]
console.log(nextPermutation([2, 3, 1])) //[3, 1, 2]
console.log(nextPermutation([1, 2, 3])) //[1, 3, 2]
console.log(nextPermutation([3, 2, 1])) //[1, 2, 3]
console.log(nextPermutation([1, 1, 5])) //[1, 5, 1]
