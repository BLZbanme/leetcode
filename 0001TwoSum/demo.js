var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) == target){
                return [i, j];
            }
        }
    }
};

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) == undefined){
            map.set(nums[i], i);
        }else if(!isNaN(map.get(nums[i]))){
            map.set(nums[i], [map.get(nums[i]), i]);
        }
        if(map.get(target - nums[i]) != undefined){
            if(target == 2 * nums[i]){
                if(isNaN(map.get(target - nums[i]))){
                    return [map.get(target - nums[i])[0], map.get(target - nums[i])[1]];
                }else{
                    continue
                }
            }
            return [map.get(target - nums[i]), map.get(nums[i])];
        }
    }
}

var twoSum = function(nums, target){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map.get(tmp) != undefined){
            return [map.get(tmp), i]
        }
        map.set(nums[i], i);
    }
}

var twoSum = function(nums, target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map[tmp] != undefined){
            return [map[tmp], i]
        }
        map[nums[i]] = i;
    }
}

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map.get(tmp) != undefined && map.get(tmp) != i){
            return [i, map.get(tmp)]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 4, 4, 15], 8))



