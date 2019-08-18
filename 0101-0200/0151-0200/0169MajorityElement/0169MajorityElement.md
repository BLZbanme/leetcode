# 169. Majority Element

Given an array of size *n*, find the majority element. The majority element is the element that appears **more than** `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

**Example 1:**

```
Input: [3,2,3]
Output: 3
```

**Example 2:**

```
Input: [2,2,1,1,1,2,2]
Output: 2
```

##### 2019.08.18

##### 	我的思路：

​		hashMap

```javascript
var majorityElement = function(nums) {
    const HALF = Math.ceil(nums.length / 2);
    let map = new Map();
    for (let num of nums) {
        let tmp = map.get(num) || 0;
        if (tmp + 1 >= HALF) {
            return num;
        }
        if (tmp) {
            map.set(num, tmp + 1);
        }
        else {
            map.set(num, 1);
        }
    }
};
```

##### 别人的思路：

​		摩尔投票算法（用来算数组中出现最多的项）

```javascript
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            count++;
            major = nums[i];
        }
        else if (major === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return major;
}
```

