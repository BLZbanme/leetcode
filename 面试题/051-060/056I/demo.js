/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let tmp = 0;
    nums.forEach(e => {
        tmp ^= e;
    })
    let bit = 0;
    while (!(tmp & 1)) {
        tmp >>= 1;
        bit++;
    }

    let left = [];
    let right = [];
    nums.forEach(e => {
        if ((e >> bit) & 1) {
            left.push(e);
        }
        else {
            right.push(e);
        }
    })

    return [findOne(left), findOne(right)];

};

function findOne (arr) {
    let tmp = 0;
    arr.forEach(e => tmp ^= e);
    return tmp;
}

var singleNumbers = function(nums) {
    let tmp = 0;
    nums.forEach(e => {
        tmp ^= e;
    })

    let bit = 1;
    while (!(tmp & bit)) {
        bit <<= 1;
    }

    let a = 0;
    let b = 0;

    nums.forEach(e => {
        if (e & bit) {
            a ^= e;
        }
        else {
            b ^= e;
        }
    })

    return [a, b];

};

console.log(singleNumbers([4, 1, 4, 6])) //[1, 6]
console.log(singleNumbers([1,2,10,4,1,4,3,3])) //[2,10]