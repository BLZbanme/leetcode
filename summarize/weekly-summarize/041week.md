# 915. Partition Array into Disjoint Intervals

Given an array `A`, partition it into two (contiguous) subarrays `left` and `right` so that:

- Every element in `left` is less than or equal to every element in `right`.
- `left` and `right` are non-empty.
- `left` has the smallest possible size.

Return the **length** of `left` after such a partitioning.  It is guaranteed that such a partitioning exists.

 

**Example 1:**

```
Input: [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
```

**Example 2:**

```
Input: [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
```

 

**Note:**

1. `2 <= A.length <= 30000`
2. `0 <= A[i] <= 10^6`
3. It is guaranteed there is at least one way to partition `A` as described.

#### 2020.09.20

#### 	我的思路：

两次遍历，一次从左往右，一次从右往左。

```javascript
function partitionDisjoint(A: number[]): number {
    const N = A.length;
    const dp = Array(N);
    dp[0] = A[0];
    for (let i = 1; i < N - 1; i++) {
        dp[i] = Math.max(A[i], dp[i - 1]);
    }

    let min = A[N - 1];
    let result = N - 1;
    for (let i = N - 2; i > 0; i--) {
        min = Math.min(min, A[i]);
        if (dp[i - 1] <= min) {
            result = i;
        }
    }
    return result;
};

```

#### 别人的思路：

一次遍历

- max存的是```[0, i]```的最大值，pos是left数组的分界点，leftMax存的是left数组```[0, pos]```的最大值。
- 当```A[i] < leftMax```时，为了满足left数组的数必须小于等于right中的数，必须将当前A[i]放入left数组，同时更新leftMax和pos。
- 如果```A[i] >= leftMax```，那么A[i]可以暂时放在right数组，若后面有```A[j] < leftMax```时，才必须将A[i]放入left数组

```typescript
function partitionDisjoint(A: number[]): number {
    const N = A.length;
    let max = A[0];
    let leftMax = A[0];
    let pos = 0;
    for (let i = 0; i < N; i++) {
        max = Math.max(max, A[i]);
        if (A[i] >= leftMax) {
            continue;
        }
        leftMax = max;
        pos = i;
    }
    return pos + 1;
}
```

# 968. Binary Tree Cameras

Given a binary tree, we install cameras on the nodes of the tree. 

Each camera at a node can monitor **its parent, itself, and its immediate children**.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_01.png)

#### 2020.09.22

#### 我的思路：

​	没做出来

#### 别人的思路：

```javascript
const minCameraCover = (root) => {
    const minCam = (root) => {
        if (root == null) {   // base case
            return {
                withCam: Infinity,
                noCamWatchByDad: 0,
                noCamWatchBySon: 0
            };
        }
        const left = minCam(root.left);   // 以左儿子为根的左子树的minCam
        const right = minCam(root.right); // 以右儿子为根的右子树的minCam
        // 下面相当于状态转移方程
        const withCam = 1 + Math.min(     
            left.noCamWatchByDad + right.noCamWatchByDad,
            left.withCam + right.noCamWatchByDad,
            left.noCamWatchByDad + right.withCam
        );

        const noCamWatchByDad = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam,
            left.noCamWatchBySon + right.noCamWatchBySon
        );

        const noCamWatchBySon = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam
        );

        return { withCam, noCamWatchByDad, noCamWatchBySon };
    };

    const res = minCam(root); // 相当于dp[root]
    return Math.min(res.withCam, res.noCamWatchBySon); // 相当于 dp[root][0]、dp[root][2]
};
```

