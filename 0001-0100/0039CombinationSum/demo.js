/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            return res;
        }
    }
    return res;
};

function find(candidates, target, index = 0){
    let res = [];
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            return res;
        }
    }
    return res;
}


var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.push(num);
                res.push(arr);
            }
        }else{
            return res;
        }
    }
    return res;
};

function find(candidates, target, index = 0){
    let res = [];
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.push(num);
                res.push(arr);
            }
        }else{
            return res;
        }
    }
    return res;
}

var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            find(res, [num] ,candidates, target - num, i);
        }else{
            return res;
        }
    }
    return res;
};

function find(result, arr, candidates, target, index = 0){
    
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            let newArr = [...arr];
            newArr.push(num);
            result.push(newArr);
        }else if(num < target){
            let newArr = [...arr];
            newArr.push(num);
            find(result, newArr, candidates, target - num, i);
        }else{
            return;
        }
    }
}




console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([4,2,8], 8))