/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    add(res, [], nums, 0);
    res.push([]);
    return res;
};

function add(res, arr, nums, index) {
    for(let i = index; i < nums.length; i++){
        let arrClone = [...arr];
        arrClone.push(nums[i]);
        res.push(arrClone);
        add(res, arrClone, nums, i + 1);
    }
}


console.log(subsets([1]))
console.log(subsets([1,2,3]))