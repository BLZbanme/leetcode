/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    while(low <= high){
        mid = parseInt((low + high) / 2);
        if(nums[mid] < target){
            low = mid + 1;
        }else if(nums[mid] > target){
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return mid < low ? low : mid;
};

var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    while(low <= high){
        mid = parseInt((low + high) / 2);
        if(nums[mid] < target){
            low = mid + 1;
        }else if(nums[mid] > target){
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return low;
};

var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    let mid;
    while(low < high){
        mid = parseInt((low + high) / 2);
        if(nums[mid] < target){
            low = mid + 1;
        }else if(nums[mid] > target){
            high = mid;
        }else{
            return mid;
        }
    }
    return low;
};


console.log(searchInsert([1,3], 2))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1,3,5,6], 2))

console.log(searchInsert([1,3,5,6], 5))

console.log(searchInsert([1,3,5,6], 7))
