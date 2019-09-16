# 219. Contains Duplicate II

Given an array of integers and an integer *k*, find out whether there are two distinct indices *i* and *j* in the array such that **nums[i] = nums[j]** and the **absolute** difference between *i* and *j* is at most *k*.

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

**Example 3:**

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

##### 2019.09.16

##### 我的思路：

​		用hashmap存储出现的值的下标，判断是否有重复值的下标差小于等于k

```javascript
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i]) && (i - map.get(nums[i]) <= k)) {
            return true;
        }
        map.set(nums[i], i)
    }
    return false;
};

```

##### 别人的方法：

​		有点类似滑动窗口，非常牛逼

```javascript
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        else {
            set.add(nums[i]);
        }
    }
    return false;
}
```

