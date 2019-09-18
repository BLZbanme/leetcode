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

# 231. Power of Two

Given an integer, write a function to determine if it is a power of two.

**Example 1:**

```
Input: 1
Output: true 
Explanation: 20 = 1
```

**Example 2:**

```
Input: 16
Output: true
Explanation: 24 = 16
```

**Example 3:**

```
Input: 218
Output: false
```

##### 2019.09.18

##### 我的思路：

##### 方法1：

​	递归

```javascript
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }

    if (!n || n % 2 !== 0) {
        return false;
    }
    
    return isPowerOfTwo(n / 2);
};
```

##### 方法2：

​	迭代

```javascript
var isPowerOfTwo = function(n) {
    if (!n || n < 0) {
        return false;
    }
    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    return true;
}
```

##### 别人的方法：

​		位运算，2的幂肯定是正数，并且只有一位是1，所以n-1为下面每一位都是1，交的结果就是0

```javascript
var isPowerOfTwo = function(n) {
    return (n > 0) && !(n & n - 1)
}
```

