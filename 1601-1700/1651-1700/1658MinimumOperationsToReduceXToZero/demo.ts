function minOperations1(nums: number[], x: number): number {
    const n = nums.length;
    let lo = -1;
    let hi = n;
    let depth = 0;
    const queue = [[lo, hi, 0]];
    while (queue.length && depth <= n) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const [j, k, sum] = queue.shift()!;
            if (sum === x) return depth;
            if (j >= k) {
                break;
            }
            if (nums[j + 1] + sum <= x) {
                queue.push([j + 1, k, sum + nums[j + 1]])
            }
            if (nums[k - 1] + sum <= x) {
                queue.push([j, k - 1, sum + nums[k - 1]])
            }
        }
        depth++;
    }
    return -1;
};

function minOperations(nums: number[], x: number): number {
    const sum = nums.reduce((pre, cur) => pre + cur);
    const target = sum - x;

    const n = nums.length;
    let left = 0;
    let win = -1;
    let cur = 0;
    for (let right = 0; right < n; right++) {
        cur += nums[right];
        while (cur > target) {
            cur -= nums[left];
            left++;
        }
        if (cur === target) {
            win = Math.max(win, right - left + 1);
        }        
    }
    return win === -1 ? -1 : n - win;
}

console.log(minOperations([1, 1], 3))//-1

console.log(minOperations([1,1,1,1,1], 5))//5
console.log(minOperations([1,1,4,2,3], 5))//2
console.log(minOperations([5,6,7,8,9], 4))//-1
console.log(minOperations([3,2,20,1,1,3], 10))//5