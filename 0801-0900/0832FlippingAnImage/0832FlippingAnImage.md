Given a binary matrix `A`, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping `[1, 1, 0]` horizontally results in `[0, 1, 1]`.

To invert an image means that each `0` is replaced by `1`, and each `1` is replaced by `0`. For example, inverting `[0, 1, 1]` results in `[1, 0, 0]`.

**Example 1:**

```
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
```

**Example 2:**

```
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
```

**Notes:**

- `1 <= A.length = A[0].length <= 20`
- `0 <= A[i][j] <= 1`

##### 2019.06.06

##### 	我的思路：

​	把每个数组项的前面和后面交换。

​	时间复杂度O(M*N)M是数组长度，N是数组中的数组长度

```javascript
var flipAndInvertImage = function(A) {
    let tmp = 0;
    for(let i = 0; i < A.length; i++){
        let length = A[i].length;
        for(let j = 0; j < length / 2; j++){
            tmp = A[i][j];
            A[i][j] = A[i][length - 1 - j] == 0 ? 1 : 0;
            A[i][length - 1 - j] = tmp == 0 ? 1 : 0;
        }
    }
    return A;
};
```

##### 别人的思路：

##### 	优化1：

​	0变1，1变0直接用与‘1’异或的办法。

```javascript
var flipAndInvertImage = function(A) {
    let tmp = 0;
    let length = A[0].length;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < length / 2; j++){
            tmp = A[i][j] ^ 1;
            A[i][j] = A[i][length - 1 - j] ^ 1;
            A[i][length - 1 - j] = tmp;
        }
    }
    return A;
};
```

##### 	优化2：

​	在这题中，可以分析得出，如果前后两项值不同，不用交换他们就是最后的结果了！

```javascript
var flipAndInvertImage = function(A) {
    let tmp = 0;
    let length = A[0].length;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < length / 2; j++){
            if(A[i][j] == A[i][length - 1 - j]){
                A[i][j] = A[i][length - 1 -j] ^= 1;
            }
        }
    }
    return A;
};
```