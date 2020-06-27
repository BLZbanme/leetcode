/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b);
    
    let tmp = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > tmp) {
            return tmp;
        }
        else if (nums[i] === tmp) {
            tmp++;
        }
    }
    return tmp;
};

var firstMissingPositive = function(nums) {
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        while (nums[i] > 0 && nums[i] < N && nums[nums[i] - 1] !== nums[i]) {
            let tmp = nums[i] - 1;
            [nums[tmp], nums[i]] = [nums[i], nums[tmp]];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return N + 1;
}

var firstMissingPositive = function(nums) {

    const N = nums.length;
    for (let i = 0; i < N; i++) {
        if (nums[i] <= 0) {
            nums[i] = N + 1;
        }
    }

    for (let i = 0; i < N; i++) {
        let num = Math.abs(nums[i]);
        if (num <= N) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return N + 1;
}

console.log(firstMissingPositive([3,4,-1,1])); // 2

console.log(firstMissingPositive([1, 99])); // 2

console.log(firstMissingPositive([])); // 1
console.log(firstMissingPositive([-1,-2,0])); // 1

console.log(firstMissingPositive([2])); // 1

console.log(firstMissingPositive([1,2,0])); // 3

console.log(firstMissingPositive([7,8,9,11,12])); // 1