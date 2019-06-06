/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0){
        return [-1, -1]
    }
    if(nums.length == 1){
        if(nums[0] == target){
            return [0, 0]
        }
        return [-1, -1]
    }
    let p = 0;
    let q = nums.length - 1;
    if(nums[p] > target || nums[q] < target){
        return [-1, -1]
    }
    let tmp;
    while(p < q){
        if(nums[p] == target){
            tmp = p;
            break;
        }
        if(nums[q] == target){
            tmp = q;
            break;
        }
        tmp = Math.ceil((p + q) / 2);
        if(nums[tmp] > target){
            p++;
            q = tmp;
        }else if(nums[tmp] < target){
            p = tmp;
            q--;
        }else{
            break;
        }
    }
    if(p == q){
        return [-1, -1];
    }
    p = q = tmp;
    while(nums[p - 1] == target){
        p--;
    }
    while(nums[q + 1] == target){
        q++;
    }
    return [p, q];
};

function binarySearch(arr, v){
    var low = 0;
    var high = arr.length - 1;
    while(low <= high){
        var mid = parseInt((low + high) / 2);
        if(arr[mid] == v){
            return mid;
        }else if(arr[mid] < v){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}

var searchRange = function(arr, target){
    let low = 0;
    let high = arr.length - 1;
    let res = [-1, -1];
    while(low < high){
        let mid = parseInt((low + high) / 2);
        if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    if(arr[low] != target){
        return res;
    }else{
        res[0] = low;
    }
    high = arr.length - 1;
    while(low < high){
        let mid = parseInt((low + high) / 2) + 1;
        if(arr[mid] > target){
            high = mid - 1;
        }else{
            low = mid;
        }
    }
    res[1] = high;
    return res;
}
searchRange([5,7,7,8,8,10], 8)
searchRange([5,7,7,8,8,10], 6)
searchRange([6,6,7,7,7,7,7,7,8,8,8,8,8,8,8,8,10], 6)



binarySearch([5,7,7,8,8,10], 6)
binarySearch([6,6,7,7,7,7,7,7,8,8,8,8,8,8,8,8,10], 6)
binarySearch([5,7,7,7,8,8,10], 8)


