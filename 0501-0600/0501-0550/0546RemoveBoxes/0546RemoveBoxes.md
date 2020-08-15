# 546. Remove Boxes

Given several boxes with different colors represented by different positive numbers.
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get `k*k` points.
Find the maximum points you can get.

 

**Example 1:**

```
Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----> [1, 3, 3, 3, 1] (1*1=1 points) 
----> [1, 1] (3*3=9 points) 
----> [] (2*2=4 points)
```

 

**Constraints:**

- `1 <= boxes.length <= 100`
- `1 <= boxes[i] <= 100`



#### 2020.08.15

#### 	我的思路：

没做出来

#### 别人的思路：

三维dp

```javascript
var removeBoxes = function(boxes) {
    const dp = Array(100);
    for (let i = 0; i < 100; i++) {
        dp[i] = Array(100);
        for (let j = 0; j < 100; j++) {
            dp[i][j] = Array(100).fill(0);
        }
    }
    return calcPoints(boxes, dp, 0, boxes.length - 1, 0);
};

function calcPoints(boxes, dp, l, r, k) {
    if (l > r) {
        return 0;
    }
    if (dp[l][r][k]) {
        return dp[l][r][k];
    }

    while (r > l && boxes[r] == boxes[r - 1]) {
        r--;
        k++;
    }

    dp[l][r][k] = calcPoints(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1);
    for (let i = l; i < r; i++) {
        if (boxes[i] === boxes[r]) {
            dp[l][r][k] = Math.max(dp[l][r][k], calcPoints(boxes, dp, l, i, k + 1) + calcPoints(boxes, dp, i + 1, r - 1, 0));
        }
    }
    return dp[l][r][k]
}
```

自底向上dp

```javascript
var removeBoxes = function(boxes) {
    const N = boxes.length;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(N);
        for (let j = 0; j < N; j++) {
            dp[i][j] = Array(N).fill(0);
        }
    }

    for (let j = 0; j < N; j++) {
        for (let k = 0; k <= j; k++) {
            dp[j][j][k] = (k + 1) * (k + 1);
        }
    }

    for (let l = 1; l < N; l++) {
        for (let j = l; j < N; j++) {
            let i = j - l;
            for (let k = 0; k <= i; k++) {
                let res = (k + 1) * (k + 1) + dp[i + 1][j][0];
                for (let m = i + 1; m <= j; m++) {
                    if (boxes[m] == boxes[i]) {
                        res = Math.max(res, dp[i + 1][m - 1][0] + dp[m][j][k + 1])
                    }
                }
                dp[i][j][k] = res;
            }
        }
    }
    return (N == 0 ? 0 : dp[0][N - 1][0]);
}
```

