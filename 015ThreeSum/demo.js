let have = {}

let twoSum = function(arr, target){
    let result = [];
    let map = {};
    let tmp;
    for(let i = 0; i < arr.length; i++){
        tmp = target - arr[i];
        if(map[tmp] != undefined && have[tmp] == undefined && have[arr[i]] == undefined){
            result.push([tmp, arr[i]]);
        }
        map[arr[i]] = i;
    }
    return result;
}

var threeSum = function(nums) {
    let result = [];
    while(nums.length >= 3){
        let tmp = nums.shift();
        let target = 0 - tmp;
        arr = twoSum(nums, target);
        if(arr.length != 0){
            have[tmp] = 1;
            for(let i = 0; i < arr.length; i++){
                arr[i].unshift(tmp);
                result.push(arr[i]);
            }
        }
    }
    return result;
};

let twoSum = function(result, arr, target){
    let map = new Map();
    let set = new Set();
    let tmp;
    for(let i = 0; i < arr.length; i++){
        if(!set.has(arr[i])){
            tmp = target - arr[i];
            if(map.get(tmp) != undefined){
                result.push([0 - target, tmp, arr[i]]);
                set.add(tmp);
                set.add(arr[i]);
            }
        }
        map.set(arr[i], i);
    }
    return result;
}

var threeSum = function(nums) {
    nums.sort();
    let set = new Set();
    let result = [];
    while(nums.length >= 3){
        let tmp = nums.shift();
        if(!set.has(tmp)){
            set.add(tmp);
            let target = 0 - tmp;
            twoSum(result, nums, target);
        } 
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0,0,0,0]))

console.log(threeSum([-1, 0, 1]))

var threeSum = function(nums) {
    nums.sort();
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if ((i == 0 || (i > 0 && nums[i] != nums[i - 1])) && nums[i] <= 0) {
            let tmp = nums[i];
            let target = 0 - tmp;
            let map = new Map();
            for(let j = i + 1; j < nums.length; j++){
                if(map.get(target - nums[j]) == undefined){
                    map.set(nums[j], 1);
                }else{
                    result.push([tmp, target - nums[j], nums[j]]);
                    while(j < nums.length - 1 && nums[j] == nums[j + 1]) {
                        j++;
                    }
                }
            }
        }
    }
    return result;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0,0,0,0]))

console.log(threeSum([-1, 0, 1]))