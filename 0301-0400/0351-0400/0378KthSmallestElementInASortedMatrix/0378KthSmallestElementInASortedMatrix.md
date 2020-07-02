# 378. Kth Smallest Element in a Sorted Matrix

Given a *n* x *n* matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

**Example:**

```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```



**Note:**
You may assume k is always valid, 1 ≤ k ≤ n2.

##### 2020.07.02

#### 	我的思路：

堆排序，复杂度O(n<sup>2</sup>logn<sup>2</sup>)

```javascript
var kthSmallest = function(matrix, k) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return;
    }
    const N = matrix.length;
    const LEN = N * N;
    for (let i = LEN >> 1; i >= 1; i--) {
        sink(i, LEN, N, matrix)
    }

    let tmp = 1;
    while (tmp < k) {
        let a = Math.floor((LEN - tmp) / N);
        let b = (LEN - tmp) % N;
        [matrix[0][0], matrix[a][b]] =  [matrix[a][b], matrix[0][0]];
        sink(1, LEN - tmp, N, matrix);
        tmp++;
    }
    return matrix[0][0];
};

function sink(index, length, N, matrix) {
    while ((index << 1) <= length) {
        let j = index << 1;
        let a1 = Math.floor((j - 1) / N);
        let b1 = (j - 1) % N;
        
        if (j < length) {
            let a2 = Math.floor(j / N);
            let b2 = j % N;
            if (matrix[a1][b1] > matrix[a2][b2]) {
                j++;
                a1 = a2;
                b1 = b2;
            }
        }
        let c = Math.floor((index - 1) / N);
        let d = (index - 1) % N;
        if (matrix[c][d] <= matrix[a1][b1]) {
            break;
        }
        [matrix[c][d], matrix[a1][b1]] = [matrix[a1][b1], matrix[c][d]];
        index = j;
    }
}
```

#### 别人的方法：

值域二分查找

```javascript
var kthSmallest = function(matrix, k) {
    const N = matrix.length;
    let left = matrix[0][0];
    let right = matrix[N - 1][N - 1];
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (check(matrix, mid, k, N)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

function check(matrix, mid, k, n) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            num += i + 1;
            j++;
        }
        else {
            i--;
        }
    }
    return num >= k;
}
```

