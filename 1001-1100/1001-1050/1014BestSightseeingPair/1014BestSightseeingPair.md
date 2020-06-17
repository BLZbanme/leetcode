# 1014. Best Sightseeing Pair

Given an array `A` of positive integers, `A[i]` represents the value of the `i`-th sightseeing spot, and two sightseeing spots `i` and `j` have distance `j - i` between them.

The *score* of a pair (`i < j`) of sightseeing spots is (`A[i] + A[j] + i - j)` : the sum of the values of the sightseeing spots, **minus** the distance between them.

Return the maximum score of a pair of sightseeing spots.

**Example 1:**

```
Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
```

**Note:**

1. `2 <= A.length <= 50000`
2. `1 <= A[i] <= 1000`

##### 2020.06.17

##### 	我的思路：

​	失败的男人

```javascript
var maxScoreSightseeingPair = function(A) {
    let max = -Infinity;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            max = Math.max(max, A[j] + A[i] + i - j);
        }
    }
    return max;
};
```

##### 别人的思路：

把A[i] + A[j] + i - j拆分成A[i] + i 和 A[j] + j两部分，对于统计景点的 A[j] - j 是固定的，因此最大化就是切[0, j - 1]中的 A[i] + i 的最大值。

时间复杂度O(n)

```javascript
var maxScoreSightseeingPair = function(A) {
    let res = 0;
    let mx = A[0] + 0;
    
    for (let j = 1; j < A.length; j++) {
        res = Math.max(res, mx + A[j] - j);
        mx = Math.max(mx, A[j] + j)
    }
    return res;
};
```
