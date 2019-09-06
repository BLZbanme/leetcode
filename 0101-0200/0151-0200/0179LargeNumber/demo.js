/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(e => "" + e);
    nums.sort((a, b) => {
        const N1 = a.length;
        const N2 = b.length;
        for (var i = 0; i < N1 && i < N2; i++) {
            if (a[i] < b[i]) {
                return 1;
            }
            else if (a[i] > b[i]) {
                return -1;
            }
        }
        if (i === N1) {
            return a[i - 1] - b[i];
        }
        if (i === N2) {
            return b[i - 1] - a[i];
        }
    });
    return nums.join("");
};



var largestNumber = function(nums) {
    if (!nums || !nums.length) {
        return "";
    }
    nums = nums.map(e => "" + e);
    nums.sort((a, b) => {
        return (b + a) - (a + b);
    });
    return nums[0][0] === "0" ? "0" : nums.join("");
};

var largestNumber = function(nums) {
    if (!nums || !nums.length) {
        return "";
    }
    nums = nums.map(e => "" + e);
    nums.sort((a, b) => {
        return (b + a).localeCompare(a + b);
    });
    return nums[0][0] === "0" ? "0" : nums.join("");
};

console.log(largestNumber([0, 0]))

console.log(largestNumber([30,3,34,5,9]))

console.log(largestNumber([3,30,34,5,9]))

console.log(largestNumber([10, 2]))
