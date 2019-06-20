#### 33.Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

##### 2019.06.20

##### 	我的思路：

​	2分查找，疯狂的判断，由于判断过多，开销很大

```javascript
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
```

##### 别人的写法

##### 	方法1：

​	首先找到最小的那个值，把这个值作为逻辑上的数组起点，然后就进行2分查找

​	（本来我也想到要找到最小值，然后把最小值当逻辑起点的，结果一时没想好用logn的算法找最小值，实属太菜了）

```javascript
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
```

​	按照这个思路自己写了份，差别很小，就是第二次遍历的时候lo和hi值变了下，真实的mid值取模

```javascript
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
```

##### 	方法2(最牛逼的)：

​	难受的是没看懂

```javascript
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
```

