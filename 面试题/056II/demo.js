/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();
    const map = new Map();

    for (let num of nums) {
        set.add(num);
        let tmp = map.get(num) || 0;
        if (tmp === 2) {
            set.delete(num);
        }
        else {
            map.set(num, tmp + 1);
        }
    }
    return Array.from(set)[0];
};

var singleNumber = function(nums) {
    const bitArr = new Array(32).fill(0);

    for (let num of nums) {
        for (let i = 31; i >= 0; i--) {
            if (num & 1) {
                bitArr[i]++;
            }
            num >>= 1;
        }
    }

    let result = 0;
    let tmp = 1;

    for (let i = 31; i >= 0; i--) {
        if (bitArr[i] % 3) {
            result += tmp;
        }
        tmp <<= 1;
    }
    return result;
};


console.log(singleNumber([3,4,3,3]));
console.log(singleNumber([9,1,7,9,7,9,7]));