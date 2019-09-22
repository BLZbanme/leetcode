# 228. Summary Ranges

Given a sorted integer array without duplicates, return the summary of its ranges.

**Example 1:**

```
Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
```

**Example 2:**

```
Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
```

##### 2019.09.22

##### 	我的思路：

​	每个区间记录一个起点，然后记录终点，构成区间，加到result中。我给nums增加了一个infinity，这样最后的地方好判断一些

```javascript
var summaryRanges = function(nums) {
    let result = [];
    if (!nums || !nums.length) {
        return result;
    }
    let start = nums[0];
    let pre = nums[0];
    let str = `${nums[0]}`;
    nums.push(Infinity);
    for (let i = 1 , len = nums.length; i < len; i++) {
        if (nums[i] === pre + 1) {
            pre = nums[i];
            continue;
        }
        else {
            if (start !== pre) {
                str += "->" + pre;
            }
            result.push(str);
            start = nums[i];
            pre = nums[i];
            str = `${nums[i]}`;
        }
    }
    return result;
};
```

##### 别人的方法：

​		别人的思路跟我几乎一致，但是写的简洁一些，主要是通过判断```nums[i] === nums[i + 1] - 1```

```javascript
var summaryRanges = function(nums) {
    let result = [];
    let start = nums[0];
    let str = `${nums[0]}`;
    for (let i = 0, N = nums.length; i < N; i++) {
        if (i < N - 1 && nums[i] === nums[i + 1] - 1) {
            continue;
        }
        else {
            if (start !== nums[i]) {
                str += '->' + nums[i];
            }
            result.push(str);
            start = nums[i + 1];
            str = `${nums[i + 1]}`;
        }
    }
    return result;
}
```

​		