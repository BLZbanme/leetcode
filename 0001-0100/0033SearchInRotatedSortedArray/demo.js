/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while(lo <= hi){
        if(target === nums[lo]){
            return lo;
        }
        if(target === nums[hi]){
            return hi;
        }
        let mid = lo + parseInt((hi - lo) / 2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[lo] < target){
            if(nums[mid] > target || nums[mid] < nums[lo]){
                hi = mid - 1;
            }else if(nums[mid] < target){
                lo = mid + 1;
            }
        }else{
            if(nums[hi] < target){
                return -1;
            }else{
                if(nums[mid] > target && nums[mid] < nums[hi]){
                    hi =  mid - 1;
                }else{
                    lo = mid + 1;
                }
            }
        }
    }
    return -1;
};


var search = function(nums, target){
    let lo = 0, n = nums.length, hi = n - 1;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    let offset = lo;
    lo = 0, hi = n - 1;
    while(lo <= hi){
        let mid = parseInt((lo + hi) / 2);
        let realmid = (mid + offset) % n;
        if(nums[realmid] == target){
            return realmid;
        }
        if(nums[realmid] < target){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return -1;
}


var search = function(nums, target){
    let lo = 0, n = nums.length, hi = n - 1;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    hi = lo + n - 1;
    while(lo <= hi){
        let mid = parseInt((lo + hi) / 2);
        let realmid = mid % n;
        if(nums[realmid] === target){
            return realmid;
        }
        if(nums[realmid] < target){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return -1;
}


var search = function(nums, target){
    let lo = 0, hi = nums.length;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    return lo === hi && nums[lo] === target ? lo : -1;
}

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([1], 0));
console.log(search([1], 1));
console.log(search([1,3], 0));
console.log(search([1, 2, 3], 0));
console.log(search([5,1,2,3,4], 1));
console.log(search([3, 5, 1], 3));



search([4,5,6,7,0,1,2], 3);