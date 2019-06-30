/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            l++;
        }else{
            nums[i - l] = nums[i];
        }
    }
    return nums.length - l;
};

var removeElement = function(nums, val) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[l++] = nums[i];
        }

    }
    return l
};

var removeElement = function(nums, val) {
    let i = 0 ;
    let n = nums.length;
    while(i < n){
        if(nums[i] == val){
            nums[i] = nums[--n];
        }else{
            i++;
        }
    }
    return n;
}

// var a = [3, 2, 2, 3];
var a = [0,1,2,2,3,0,4,2];
console.log(removeElement(a, 2))