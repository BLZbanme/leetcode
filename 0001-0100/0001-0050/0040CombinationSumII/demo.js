/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    let l = candidates.length;
    while(i < l){
        let num = candidates[i];
        if(num == target){
            res.push([num]);
        }else if(num < target){
            find(candidates, target - num, i + 1, [num], res);
        }else{
            return res;
        }
        i++;
        while(i < l && candidates[i] == candidates[i - 1]){
            i++;
        }

    }
    return res;
};

function find(candidates, target, index, arr, res){
    let l = candidates.length;
    while(index < l){
        let num = candidates[index];
        if(num == target){
            res.push(cpArrAndPush(arr, num));
            return;
        }else if(num < target){
            find(candidates, target - num, index + 1, cpArrAndPush(arr, num), res);
        }else{
            return ;
        }
        index++;
        while(index < l && candidates[index] == candidates[index - 1]){
            index++;
        }
    }
}

function cpArrAndPush(arr, num){
    let newArr = [...arr];
    newArr.push(num);
    return newArr;
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
console.log(combinationSum2([2,5,2,1,2], 5))