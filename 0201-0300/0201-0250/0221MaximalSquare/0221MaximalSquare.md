# 221. Maximal Square

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

**Example:**

```
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
```

##### 2019.09.16

##### 	我的思路：

没写出来

##### 别人的方法：

​		dp

```javascript
var maximalSquare = function(matrix) {
    const HEIGHT = matrix.length;
    if (!HEIGHT || !matrix[0].length) {
        return 0;
    }
    const WIDTH = matrix[0].length;
    let dp = new Array(HEIGHT + 1);
    let result = 0;
    for (let i = 0; i <= HEIGHT; i++) {
        dp[i] = new Array(WIDTH + 1).fill(0);
    }

    for (let i = 1; i <= HEIGHT; i++) {
        for (let j = 1; j <= WIDTH; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                result = Math.max(result, dp[i][j]);
            }
        }
    }
    return result * result;
};
```

