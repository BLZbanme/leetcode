# 216. Combination Sum III

Find all possible combinations of ***k*** numbers that add up to a number ***n***, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

**Note:**

- All numbers will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: k = 3, n = 7
Output: [[1,2,4]]
```

**Example 2:**

```
Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
```

##### 2019.09.13

##### 	我的思路：

​		回溯，写了很多遍了，不解释！。（和高亮答案几乎一样）

```javascript
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    let arr = [];

    function recursion(k, n, min) {
        if (k === 0) {
            if (n === 0) {
                result.push(Array.from(arr));
            }
            return;
        }

        for (let i = min; i < 10 && i <= n; i++) {
            arr.push(i);
            recursion(k - 1, n - i, i + 1);
            arr.pop();
        }
    }

    recursion(k, n, 1);
    return result;
};
```
