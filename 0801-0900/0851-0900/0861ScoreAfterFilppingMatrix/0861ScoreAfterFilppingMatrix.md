# 861. Score After Flipping Matrix

We have a two dimensional matrix `A` where each value is `0` or `1`.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all `0`s to `1`s, and all `1`s to `0`s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.

 



**Example 1:**

```
Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
```

 

**Note:**

1. `1 <= A.length <= 20`
2. `1 <= A[0].length <= 20`
3. `A[i][j]` is `0` or `1`.

#### 2020.12.06

#### 	我的思路：

没写出来！

#### 别人的思路：

贪心，先把最左边全部转成1，然后后面按列翻转！

```javascript
function matrixScore(A: number[][]): number {
    const M = A.length;
    const N = A[0].length;
    let ret = M * (1 << (N - 1))
    for (let j = 1; j < N; j++) {
        let nOnes = 0;
        for (let i = 0; i < M; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            }
            else {
                nOnes += (1 - A[i][j]);
            }
        }
        const k = Math.max(nOnes, M - nOnes);
        ret += k * (1 << (N - j - 1));
    }
    return ret;
};
```
