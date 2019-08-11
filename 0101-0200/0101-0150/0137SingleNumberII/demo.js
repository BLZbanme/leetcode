/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set(nums);
    let sum = Array.from(set).reduce(add) * 3;
    return (sum - nums.reduce(add)) / 2;
};

function add(a, b) {
    return a + b;
}

var singleNumber = function(nums) {
    let setOne = new Set();
    let setTwo = new Set();
    nums.forEach(e => {
        if (setOne.has(e)) {
            if (setTwo.has(e)) {
                setTwo.delete(e);
            }
        }
        else {
            setOne.add(e);
            setTwo.add(e);
        }
    })
    return setTwo.keys().next().value;
}

var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach(e => {
        b = (b ^ e) & ~a;
        a = (a ^ e) & ~b;
    })
    return b;
}

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))