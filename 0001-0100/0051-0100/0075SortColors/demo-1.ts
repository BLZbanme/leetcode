function sortColors(nums: number[]): void {
    const N = nums.length;
    let lo = 0;
    let hi = N - 1;
    let i = 0;
    while (i <= hi) {
        if (nums[i] == 0 && i != lo) {
            [nums[lo], nums[i]] = [nums[i], nums[lo]];
            lo++;
        }
        else if (nums[i] == 2) {
            [nums[hi], nums[i]] = [nums[i], nums[hi]];
            hi--;
        }
        else {
            i++;
        }
        
    }
    return;
};

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([1, 2, 0]));