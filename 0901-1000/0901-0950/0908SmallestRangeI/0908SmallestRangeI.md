Given an array `A` of integers, for each integer `A[i]` we may choose any `x`with `-K <= x <= K`, and add `x` to `A[i]`.

After this process, we have some array `B`.

Return the smallest possible difference between the maximum value of `B` and the minimum value of `B`.

**Example 1:**

```
Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
```

**Example 2:**

```
Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
```

**Example 3:**

```
Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]
```

**Note:**

1. `1 <= A.length <= 10000`
2. `0 <= A[i] <= 10000`
3. `0 <= K <= 10000`

##### 2019.06.17

##### 	我的思路：

​	无聊的题目，判断最大值与最小值的差距在不在2 * K之内就行了。

​	时间复杂度O(n)，空间复杂度O(n)。

```javascript
var smallestRangeI = function(A, K) {
    let max = Math.max(...A), min = Math.min(...A);
    return max - min - 2 * K > 0 ?  max - min - 2 * K : 0;
};
```
