# 54. Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(*n*) solution, try coding another solution using the divide and conquer approach, which is more subtle.

##### 2019.07.06

##### 	我的思路：

##### 方法1：

​	dp:

遍历的每项的当前最大值有两种情况：

​	1.如果它前一项的最大值小于0的话，当前项的最大值就是它本身。

​	2.如果它前一项的最大值大于0的话，当前项的最大值就是它本身+前一项的最大值。

然后每次求完当前项的最大值，就和max比较，把max赋成更大的值。

```javascript
var maxSubArray = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    let max = dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        dpArr[i] = nums[i] + (dpArr[i - 1] > 0 ? dpArr[i - 1] : 0);
        max = Math.max(max, dpArr[i]);
    }
    return max;
};
```

##### 方法2：

（这题的实际情况也可以不用dp数组存，用一个临时变量就可用存储前一项的最大值了）。

```javascript
var maxSubArray = function(nums) {
    let max = sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(sum < 0){
            sum = nums[i];
        }else{
            sum += nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}
```

#### 2021.01.28

##### redo

用前缀和做了一遍

```typescript
function maxSubArray(nums: number[]): number {
    if (!nums || !nums.length) return 0;
    let min = 0;
    let max = -Infinity;
    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        tmp += nums[i];
        max = Math.max(max, tmp - min);
        min = Math.min(tmp, min);
    }
    return max;
};
```

