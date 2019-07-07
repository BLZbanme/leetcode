# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

**Example 1:**

```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
```

**Example 2:**

```
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
```

##### 2019.07.07

##### 	我的思路：

##### 	方法1:

​		dp: opt[i],表示在i坐标时最大的价值，他可以分为两种情况，

 1. opt[i - 1]，表示我们不偷i坐标的财物，现在我们的累计经济就是opt[i - 1]

 2. opt[i - 2] + v[i]，表示我们会偷i坐标的财物，现在我们的累计经济就是opt[I - 2] + v[i]

    我们比较取1,2的最大值，可以递归下去。但是递归会产生很多重复子问题，所以我采用自底向上的动态规划解法。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let opt = [];
    opt[0] = nums[0];
    opt[1] = Math.max(nums[0], nums[1]);
    for(var i = 2; i < len; i++){
        opt[i] = Math.max(opt[i - 2] + nums[i], opt[i - 1]);
    };
    return opt[len - 1];
};
```

##### 	方法2:

​	优化用两个变量分别存储前一项和前第二项的位置的最大财产值。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let max = pre1;
    for(var i = 2; i < len; i++){
        max = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = max;
    };
    return max;
};
```
