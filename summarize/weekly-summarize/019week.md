# 260. Single Number III

Given an array of numbers `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

**Example:**

```
Input:  [1,2,1,3,2,5]
Output: [3,5]
```

**Note**:

1. The order of the result is not important. So in the above example, `[5, 3]` is also correct.
2. Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

##### 2019.11.04

##### 	我的思路：

​		垃圾写法，一个set(one)中放出现的元素，一个set(oneMore)中存放出现多次的元素，然后one中删掉oneMore中出现过的元素。

```javascript
var singleNumber = function(nums) {
    let oneMore = new Set();
    let one = new Set();
    nums.forEach(e => {
        if (one.has(e)) {
            oneMore.add(e);
        }
        else {
            one.add(e);
        }
    })
    Array.from(oneMore).forEach(e => {
        one.delete(e);
    })
    return Array.from(one);
};
```

##### 别人的方法：

​		我想过用异或的方法，但是没想到“最低为1位”这个操作

1. 第一轮遍历异或，得到两个单独出现的元素的异或值
2. 这个异或值与他的相反数相交的值即是，两元素的最低不同的为1的位
3. 以这个diff值区分两个数，其他重复出现的数也被diff区分在两边了

```javascript
var singleNumber = function(nums) {
    let diff = 0;
    nums.forEach(num => {
        diff ^= num;
    })
    diff &= -diff;
    let res = [0, 0];
    nums.forEach(num => {
        if (num & diff) {
            res[1] ^= num;
        }
        else{
            res[0] ^= num;
        }
    })
    return res;
}
```

