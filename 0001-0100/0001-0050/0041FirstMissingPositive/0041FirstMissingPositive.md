# 41. First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

**Example 1:**

```
Input: [1,2,0]
Output: 3
```

**Example 2:**

```
Input: [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: [7,8,9,11,12]
Output: 1
```

**Note:**

Your algorithm should run in *O*(*n*) time and uses constant extra space.

##### 2020.06.27

#### 我的思路：

​	一开始没看到复杂度限制，排序复杂度O(nlogn)，失败

```javascript
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b);
    
    let tmp = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > tmp) {
            return tmp;
        }
        else if (nums[i] === tmp) {
            tmp++;
        }
    }
    return tmp;
};
```

#### 别人的思路

##### 方法1：原地置换

这种套路也见多了，必须学会！

```javascript
var firstMissingPositive = function(nums) {
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        while (nums[i] > 0 && nums[i] < N && nums[nums[i] - 1] !== nums[i]) {
            let tmp = nums[i] - 1;
            [nums[tmp], nums[i]] = [nums[i], nums[tmp]];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return N + 1;
}
```

##### 方法2：记录负值来当hash表

这种套路也很多次了，下次一定会！

```javascript
var firstMissingPositive = function(nums) {

    const N = nums.length;
    for (let i = 0; i < N; i++) {
        if (nums[i] <= 0) {
            nums[i] = N + 1;
        }
    }

    for (let i = 0; i < N; i++) {
        let num = Math.abs(nums[i]);
        if (num <= N) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return N + 1;
}
```

