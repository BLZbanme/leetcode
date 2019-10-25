# 229. Majority Element II

Given an integer array of size *n*, find all elements that appear more than `⌊ n/3 ⌋` times.

**Note:** The algorithm should run in linear time and in O(1) space.

**Example 1:**

```
Input: [3,2,3]
Output: [3]
```

**Example 2:**

```
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
```

##### 2019.10.25

##### 	我的思路：

```javascript
var majorityElement = function(nums) {
    let result = new Set();
    let map = new Map();
    let beyond = Math.floor(nums.length / 3);
    if (!beyond) {
        return Array.from(new Set(nums));
    }
    nums.forEach(e => {
        if (map.has(e)) {
            let num = map.get(e);
            if (num === beyond) {
                result.add(e);
            }
            else {
                map.set(e, num + 1);
            } 
        }
        else {
            map.set(e, 1);
        }
    })
    return Array.from(result);
};
```

##### 别人的方法：

​		摩尔投票算法，第一轮便利找到两个候选者，第二轮遍历验证他们是否满足

```javascript
var majorityElement = function(nums) {
    let result = [];
    if (!nums.length) {
        return result;
    }
    let num1 = nums[0];
    let num2 = nums[0];
    let count1 = 0;
    let count2 = 0;
    for (let num of nums) {
        if (num === num1) {
            count1++;
        }
        else if (num === num2) {
            count2++;
        }
        else if (!count1) {
            num1 = num;
            count1++;
        }
        else if (!count2) {
            num2 = num;
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === num1) {
            count1++;
        }
        else if (num === num2) {
            count2++;
        }
    }
    const TMP = Math.floor(nums.length / 3);
    if (count1 > TMP) {
        result.push(num1);
    }
    if (count2 > TMP) {
        result.push(num2);
    }
    return result;
}
```

​		