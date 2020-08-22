function judgePoint24WRONG(nums: number[]): boolean {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j == i) {
                continue;
            }
            for (let k = 0; k < 4; k++) {
                if (k == i || k == j) {
                    continue;
                }

                for (let m = 0; m < 4; m++) {
                    if (m == i || m == j || m == k) {
                        continue;
                    }

                    let arr1 = helper(nums[i], nums[j]);
                    let arr2 = helper(nums[k], nums[m]);
                    for (let value1 of arr1) {
                        for (let value2 of arr2) {
                            if (value1 + value2 == 24 || value1 - value2 == 24
                                || value1 * value2 == 24 || value1 / value2 == 24) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
};

function helper(num1: number, num2: number): Array<number> {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}

function judgePoint24(nums: Array<number>): boolean {
    const DIFF = 10 ** (-6);

    function solve(nums:  Array<number>): boolean {
        if (!nums.length) {
            return false;
        }
        if (nums.length == 1) {
            return Math.abs(nums[0] - 24) < DIFF
        }
        let length = nums.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i === j) {
                    continue;
                }
                let list2 = [];
                for (let k = 0; k < length; k++) {
                    if (k == j || k === i) {
                        continue;
                    }
                    list2.push(nums[k]);
                }

                for (let k = 0; k < 4; k++) {
                    if (k < 2 && i > j) {
                        continue;
                    }
                    if (k == 0) {
                        list2.push(nums[i] + nums[j]);
                    }
                    else if (k == 1) {
                        list2.push(nums[i] * nums[j]);
                    }
                    else if (k == 2) {
                        list2.push(nums[i] - nums[j])
                    }
                    else if (k == 3) {
                        if (Math.abs(nums[j]) < DIFF) {
                            continue;
                        }
                        else {
                            list2.push(nums[i] / nums[j])
                        }
                    }
                    if (solve(list2)) {
                        return true;
                    }
                    list2.pop();
                }
            }
        }
        return false;
    }

    return solve(nums);
}

console.log(judgePoint24([4, 1, 8, 7]));

