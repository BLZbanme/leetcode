function checkPossibility1(nums: number[]): boolean {
    const n = nums.length;
    const dp = Array(n + 1);
    let len = 1;
    dp[1] = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] >= dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            let lo = 1;
            let hi = len;
            while (lo < hi) {
                let mid = lo + ((hi - lo) >> 1);
                if (dp[mid] <= nums[i]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid;
                }
            }
            dp[lo] = nums[i];
        }
    }
    return n - len <= 1;
};

function checkPossibility3(nums: number[]): boolean {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let x = nums[i];
        let y = nums[i + 1];
        if (x > y) {
            nums[i] = y;
            if (isSorted(nums)) {
                return true;
            }
            nums[i] = x;
            nums[i + 1] = x;
            return isSorted(nums);
        }
    }
    return true;
}

const isSorted = (nums: number[]) => {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            return false;
        }
    }
    return true;
}

function checkPossibility2(nums: number[]): boolean {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n - 1; i++) {
        let x = nums[i];
        let y = nums[i + 1];
        if (x > y) {
            cnt++;
            if (cnt > 1) {
                return false;
            }
            if (i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x;
            }
        }
    }
    return true;
}

function checkPossibility(nums: number[]): boolean { 
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            if (count > 1) return false;
            if (i > 0 && nums[i + 1] < nums[i - 1]) {
                nums[i + 1] = nums[i];
            }
            else {
                nums[i] = nums[i + 1];
            }
        }
    }
    return true;
}

console.log(checkPossibility([1,1,1])); //true;
console.log(checkPossibility([4,2,3])); //true;
console.log(checkPossibility([4,2,1])); //false;
console.log(checkPossibility([3, 4, 2, 3])) //false;