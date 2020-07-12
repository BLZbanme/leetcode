# 174. Dungeon Game

The demons had captured the princess (**P**) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (**K**) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (*negative* integers) upon entering these rooms; other rooms are either empty (*0's*) or contain magic orbs that increase the knight's health (*positive* integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

 

**Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.**

For example, given the dungeon below, the initial health of the knight must be at least **7** if he follows the optimal path `RIGHT-> RIGHT -> DOWN -> DOWN`.

| -2 (K) | -3   | 3      |
| ------ | ---- | ------ |
| -5     | -10  | 1      |
| 10     | 30   | -5 (P) |

 

**Note:**

- The knight's health has no upper bound.
- Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

#### 2020.07.12

#### 	我的思路：

​	正序dp失败（虽然我提交了前就知道了肯定有问题），正序dp的问题就是你不知道判断条件中路径和，和之前的最小的初始值的优先级怎么判断。

```javascript
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;

    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1);
    }

    for (let i = 2; i <= M; i++) {
        dp[i][0] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    for (let i = 2; i <= N; i++) {
        dp[0][i] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    dp[0][1] = dp[1][0] = {
        val: 0,
        min: 0
    }

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            let min1 = dp[i - 1][j].min;
            if (dp[i - 1][j].val + dungeon[i - 1][j - 1] < 0) {
                min1 = Math.min(min1, dp[i - 1][j].val + dungeon[i - 1][j - 1])
            }
            let min2 = dp[i][j - 1].min;
            if (dp[i][j - 1].val + dungeon[i - 1][j - 1] < 0) {
                min2 = Math.min(min2, dp[i][j - 1].val + dungeon[i - 1][j - 1]);
            }

            dp[i][j] = {};
            if (min1 > min2) {
                dp[i][j].min = min1;
                dp[i][j].val = dp[i - 1][j].val + dungeon[i - 1][j - 1];
            }
            else {
                dp[i][j].min = min2;
                dp[i][j].val = dp[i][j - 1].val + dungeon[i - 1][j - 1];
            }
        }
    }

    return dp[M][N].min < 0 ? (1 - dp[M][N].min) : 1;
};
```

#### 	别人的方法：

##### 反序dp

从终点开始判断，就不需要路径和了

```javascript
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(Infinity);
    }
    dp[M][N - 1] = dp[M - 1][N] = 1;
    for (let i = M - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            let min = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(min - dungeon[i][j], 1);
        }
    }

    return dp[0][0];
}
```

##### dfs

```javascript
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;

    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(0);
    }

    function dfs(i, j) {
        if (i == M - 1 && j == N - 1) {
            return dungeon[i][j] > 0 ? 1 : 1 - dungeon[i][j];
        }

        if (visited[i][j]) {
            return visited[i][j]
        }

        let goDown = Infinity;
        let goRight = Infinity;
        if (i < M - 1) {
            goDown = dfs(i + 1, j);
        }
        if (j < N - 1) {
            goRight = dfs(i, j + 1);
        }

        if (goDown < goRight) {
            if (goDown - dungeon[i][j] <= 0) {
                visited[i][j] = 1;
            }
            else {
                visited[i][j] = goDown - dungeon[i][j];
            }
        }
        else {
            if (goRight - dungeon[i][j] <= 0) {
                visited[i][j] = 1;
            }
            else {
                visited[i][j] = goRight - dungeon[i][j];
            }
        }

        return visited[i][j];
    }

    return dfs(0, 0);
}
```



##### 