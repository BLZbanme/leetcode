# 287. Find the Duplicate Number

Given an array *nums* containing *n* + 1 integers where each integer is between 1 and *n* (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

**Example 1:**

```
Input: [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: [3,1,3,4,2]
Output: 3
```

**Note:**

1. You **must not** modify the array (assume the array is read only).
2. You must use only constant, *O*(1) extra space.
3. Your runtime complexity should be less than *O*(*n*2).
4. There is only one duplicate number in the array, but it could be repeated more than once.

##### 2019.10.15

##### 	我的思路：

​		排序，找到重复值，时间复杂度O(nlogn)，空间复杂度O(n){不满足题目要求}。另外还有hash的方法，也不满足要求就不写了。

```javascript
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, N = nums.length - 1; i < N; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};
```

##### 别人的方法：

1. 先差速找到一个相同的点，此时slow走了x，fast走了2x，说明环长也为x。
2. 设到环入口距离为y，```y + c = x```,c为slow在环中走距离
3. 所以，再把fast置为0，fast和slow同速前进，fast与slow相遇时刚好在环入口，得解

```javascript
var findDuplicate = function(nums) {
    if (nums.length > 1) {
        let slow = nums[0];
        let fast = nums[nums[0]];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while (fast !== slow) {
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
    return -1;
}
```

