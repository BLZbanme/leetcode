function judgePoint24WRONG(nums) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (j == i) {
                continue;
            }
            for (var k = 0; k < 4; k++) {
                if (k == i || k == j) {
                    continue;
                }
                for (var m = 0; m < 4; m++) {
                    if (m == i || m == j || m == k) {
                        continue;
                    }
                    var arr1 = helper(nums[i], nums[j]);
                    var arr2 = helper(nums[k], nums[m]);
                    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
                        var value1 = arr1_1[_i];
                        for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
                            var value2 = arr2_1[_a];
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
}
;
function helper(num1, num2) {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}
function judgePoint24(nums) {
    var DIFF = Math.pow(10, (-6));
    function solve(nums) {
        if (!nums.length) {
            return false;
        }
        if (nums.length == 1) {
            return Math.abs(nums[0] - 24) < DIFF;
        }
        var length = nums.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (i === j) {
                    continue;
                }
                var list2 = [];
                for (var k = 0; k < length; k++) {
                    if (k == j || k === i) {
                        continue;
                    }
                    list2.push(nums[k]);
                }
                for (var k = 0; k < 4; k++) {
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
                        list2.push(nums[i] - nums[j]);
                    }
                    else if (k == 3) {
                        if (Math.abs(nums[j]) < DIFF) {
                            continue;
                        }
                        else {
                            list2.push(nums[i] / nums[j]);
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
console.log(judgePoint24([1, 3, 4, 6]));
console.log(judgePoint24([4, 1, 8, 7]));
