/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let set = new Set(nums);
    let result = [];
    addAgain(result, [], set);
    return result;
};

function addAgain(res, arr, set){
    if(set.size == 0){
        res.push(arr);
        return;
    }
    set.forEach(e => {
        let now = new Set(set);
        let newArr = arr.concat();
        newArr.push(e);
        now.delete(e)
        addAgain(res, newArr, now);
    });
}

permute([1,2,3])