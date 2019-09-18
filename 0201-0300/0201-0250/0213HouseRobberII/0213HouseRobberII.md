# 0213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle.** That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

**Example 1:**

```
Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
```

**Example 2:**

```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
```

##### 2019.07.07

##### 	我的思路：

​	本题是0198House Robber的修改版，我的思路就是分两种情况考虑，然后比较这两种情况的大小：

​	1:如果偷了第一家，就不能偷到最后一家。dp的下标范围就是0->len-2.

​	2:如果要偷最后一家的话，就从第二家开始偷起。dp的下标范围就是1->len-1.

​	最后比较这两种情况的大小，返回最大值。

​	时间复杂度O(n)

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    if(len == 2){
        return Math.max(...nums);
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let res1 = pre1;
    for(let i = 2; i < len - 1; i++){
        res1 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res1;
    }
    pre2 = nums[1];
    pre1 = Math.max(nums[1], nums[2]);
    let res2 = pre1;
    for(let i = 3; i < len; i++){
        res2 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res2;
    }
    return Math.max(res1, res2);
};
```

##### 	改进

​	把dp的过程抽成一个函数。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    if(len == 2){
        return Math.max(...nums);
    }
    return Math.max(dp(nums, 2, len - 1), dp(nums, 3, len));
};

function dp(nums, index, end) {
    let pre2 = nums[index - 2];
    let pre1 = Math.max(nums[index - 2], nums[index - 1]);
    let res = pre1;
    for(let i = index; i < end; i++){
        res = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}
```

