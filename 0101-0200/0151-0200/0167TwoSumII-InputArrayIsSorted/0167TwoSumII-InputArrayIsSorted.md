# 167. Two Sum II - Input array is sorted

Given an array of integers that is already **sorted in ascending order**, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

**Note:**

- Your returned answers (both index1 and index2) are not zero-based.
- You may assume that each input would have *exactly* one solution and you may not use the *same* element twice.

**Example:**

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

##### 2019.08.15

##### 	我的思路：

​	两点法

​		dp: opt[i],表示在i坐标时最大的价值，他可以分为两种情况，

 1. opt[i - 1]，表示我们不偷i坐标的财物，现在我们的累计经济就是opt[i - 1]

 2. opt[i - 2] + v[i]，表示我们会偷i坐标的财物，现在我们的累计经济就是opt[I - 2] + v[i]

    我们比较取1,2的最大值，可以递归下去。但是递归会产生很多重复子问题，所以我采用自底向上的动态规划解法。

```javascript
var twoSum = function(numbers, target) {
    let indexOne = 0;
    let indexTwo = numbers.length - 1;
    while (indexOne < indexTwo) {
        let tmp = numbers[indexOne] + numbers[indexTwo];
        if (tmp > target) {
            indexTwo--;
        }
        else if (tmp < target) {
            indexOne++;
        }
        else {
            return [indexOne + 1, indexTwo + 1];
        }
    }
};
```

