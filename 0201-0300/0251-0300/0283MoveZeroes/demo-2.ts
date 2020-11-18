/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes1(nums: number[]): void {
    const N = nums.length;
    let i = 0;
    let j = 0;
    while (j < N || i < N) {
        if (j < N) {
            if (nums[j]) {
                nums[i++] = nums[j]
            }
            j++;
        }
        else {
            nums[i++] = 0
        }
    }
};

function moveZeroes(nums: number[]): void {
    const N = nums.length;
    let i = 0;
    let j = 0;
    while (j < N) {
        if (nums[j]) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            i++;
        }
        j++;
    }
    return;
}