function search1(nums: number[], target: number): number {
    const findLeft = (): number => {
        let lo = 0;
        let hi = nums.length - 1;
        while (lo < hi) {
            let mid = lo + ((hi - lo) >> 1);
            if (nums[mid] < target) {
                lo = mid + 1;
            }
            else {
                hi = mid;
            }
        }
        return nums[lo] === target ? lo : -1;
    }

    const findRight = (): number => {
        let lo = 0;
        let hi = nums.length - 1;
        while (lo < hi) {
            let mid = lo + ((hi - lo) >> 1) + 1;
            if (nums[mid] > target) {
                hi = mid - 1;
            }
            else {
                lo = mid;
            }
        }
        return nums[lo] === target ? lo : -1;
    }
    const leftIndex = findLeft();
    const rightIndex = findRight();
    if (leftIndex === -1) return 0;
    return rightIndex - leftIndex + 1;
};

function search(nums: number[], target: number): number {
    const helper = (k: number): number => {
        let lo = 0;
        let hi = nums.length - 1;
        while (lo <= hi) {
            let mid = lo + ((hi - lo) >> 1);
            if (nums[mid] <= k) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    return helper(target) - helper(target - 1);
}

console.log(search([1], 1)) //1
console.log(search([], 0)) //0
console.log(search([1, 1, 1, 1], 1)) //4
console.log(search([5,7,7,8,8,10], 8)) //2
console.log(search([5,7,7,8,8,10], 6)) //0