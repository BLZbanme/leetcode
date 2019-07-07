#  50. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

##### 2019.07.07

##### 	我的思路：

##### 	方法1：

​	dp，自底向上，dpArr存储每个点为止能到达的最远距离，如果当前点的前一点到不了它就返回false。

​	时间复杂度O(n),空间复杂度O(n)。

```javascript
var canJump = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        if(dpArr[i - 1] < i){
            return false;
        }
        dpArr[i] = Math.max(dpArr[i - 1], nums[i] + i);
    }
    return dpArr[len - 1] >= len - 1;
};
```

##### 别人的思路：

##### 	方法2：

​	dp，自底向上，只用一个distance来存储前一个值能到达的最远距离即刻。

​	时间复杂度O(n),空间复杂度O(1)。

```javascript
var canJump = function(nums) {
    let len = nums.length;
    let distance = nums[0];
    for(let i = 1; i < len; i++){
        if(distance < i){
            return false;
        }
        distance = Math.max(distance, nums[i] + i);
    }
    return distance >= len - 1;
};
```





