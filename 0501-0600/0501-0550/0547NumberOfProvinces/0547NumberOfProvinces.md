# 547. Number of Provinces

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return *the total number of **provinces***.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg)

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg)

 

**Constraints:**

- `1 <= n <= 200`
- `n == isConnected.length`
- `n == isConnected[i].length`
- `isConnected[i][j]` is `1` or `0`.
- `isConnected[i][i] == 1`
- `isConnected[i][j] == isConnected[j][i]`

#### 2021.01.07

#### 	我的思路：

没做出来

#### 别人的思路：

深度优先遍历，在联通分量

```javascript
function findCircleNum(isConnected: number[][]): number {
    const provinces = isConnected.length;
    const visited = new Set();
    let circles = 0;

    const dfs = (i: number) => {
        for (let j = 0; j < provinces; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }

    for (let i = 0; i < provinces; i++) {
        if (!visited.has(i)) {
            dfs(i);
            circles++;
        }
    }
    return circles;
};

```
