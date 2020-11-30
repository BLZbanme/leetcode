# 34.Find First and Last Position of Element in Sorted Array

	Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

​	Your algorithm's runtime complexity must be in the order of *O*(log *n*).

​	If the target is not found in the array, return `[-1, -1]`.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

##### 2019.05.25

##### 	我的思路：

​	 方法1：先二分查找，然后往被找到的点两边找边界

```javascript
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
```

#### 2020.11.01

##### redo

```typescript
function searchRange(nums: number[], target: number): number[] {
    if (!nums.length) {
        return [-1, -1];
    }
    let lo = loBinarySearch(nums, target);
    let hi = hiBinarySearch(nums, target);
    if (nums[lo] === target && nums[hi - 1] === target) {
        return [lo, hi - 1]
    }
    return [-1, -1];
};

function loBinarySearch(nums: number[], target: number) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}

function hiBinarySearch(nums: number[], target: number) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] <= target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}
```





