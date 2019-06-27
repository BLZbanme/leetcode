/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    while(i < nums.length){
        if(nums.length == 1){
            return [nums];
        }
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        permute([nums[i]], tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
    return res;
};

function permute(arr, nums, res){
    let i = 0;
    while(i < nums.length){
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        let arrNew = [...arr];
        arrNew.push(nums[i]);
        if(nums.length == 1){
            res.push(arrNew);
            return;
        }
        permute(arrNew, tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
}

var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let used = new Array(nums.length).fill(false);
    let list = [];
    dfs(nums, used, list, res);
    return res;
};

function dfs(nums, used, list, res){
    if(list.length == nums.length){
        res.push([...list]);
        return;
    }

    for(let i = 0; i < nums.length; i++){
        if(used[i]){
            continue;
        }
        if(i > 0 && nums[i - 1] == nums[i] && !used[i - 1]){
            continue;
        }
        used[i] = true;
        list.push(nums[i]);
        dfs(nums, used, list, res);
        used[i] = false;
        list.pop();
    }
}

console.log(permuteUnique([1]));
console.log(permuteUnique([1,1, 1]));
console.log(permuteUnique([1,2,2,2]));
console.log(permuteUnique([1,1, 1,2, 2, 2, 3]));