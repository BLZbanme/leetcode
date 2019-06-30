/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let length = nums.length;
    for(let i = length - 2; i >= 0; i--){
        let now = nums[i];
        let tmp = Number.MAX_VALUE;
        let index = length;
        for(let j = length - 1; j > i; j--){
            if(nums[j] > now && nums[j] < tmp){
                tmp = nums[j];
                index = j;
            }
        }
        if(index < length){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            sort(nums, i + 1, length - 1);
            return nums;
        }
    }
    return nums.sort((a, b) => a - b);
};

function sort(arr, start, end){
    while(start < end){
        let tmp = start;
        while(tmp < end){
            if(arr[tmp] > arr[tmp + 1]){
                [arr[tmp], arr[tmp + 1]] = [arr[tmp + 1], arr[tmp]];
            };
            tmp++;
        }
        end--;
    }
}


var nextPermutation = function(nums) {
    let length = nums.length;
    let i, j;
    for(i = length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]){
            break;
        }
    }
    if(i < 0){
        nums.reverse();
    }else{
        for(j = length - 1; j > i; j--){
            if(nums[j] > nums[i]){
                break;
            }
        }
        [nums[j], nums[i]] = [nums[i], nums[j]]
        let start = i + 1, end = length - 1;
        while(start < end){
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
    }
    return nums;
};



console.log(nextPermutation([1,3,2]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([1,1,5]));
console.log(nextPermutation([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]));