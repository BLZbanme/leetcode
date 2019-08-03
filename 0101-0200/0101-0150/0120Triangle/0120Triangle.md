# 120. Triangle

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

The minimum path sum from top to bottom is `11` (i.e., **2** + **3** + **5** + **1** = 11).

**Note:**

Bonus point if you are able to do this using only *O*(*n*) extra space, where *n* is the total number of rows in the triangle.

##### 2019.08.03

##### 	我的思路：

​		自底向上dp

```javascript
var minimumTotal = function(triangle) {
    if (!triangle) {
        return 0;
    }
    const N = triangle.length - 1;
    let dp = triangle[N];
    for (let i = N - 1; i >= 0; i--) {
        const len = triangle[i].length;
        for (let j = 0; j < len; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};
```
