​	Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

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

##### 别人的写法

​	两个二分查找，查找出上下界

```javascript
var strStr = function(s, p){
    let next = getNext(p);
    let i = 0;
    let j = 0;
    let sLen = s.length;
    let pLen = p.length;
    while(i < sLen && j < pLen){
        if(j == -1 || s[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == pLen){
        return i - j;
    }else{
        return -1;
    }
}

function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}
```

