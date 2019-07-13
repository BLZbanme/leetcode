# 70. Climbing Stairs

You are climbing a stair case. It takes *n* steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given *n* will be a positive integer.

**Example 1:**

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

##### 2019.07.08

##### 我的思路：

​	这题实际就是一个斐波拉切数问题

​	递归，自底向上的dp(用数组存，两个变量存都写了)

```javascript
var climbStairs = function(n) {
    if(n < 3){
        return n;
    }else{
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};
```

```javascript
var climbStairs = function(n) {
    const opt = [];
    opt[0] = 0;
    opt[1] = 1;
    opt[2] = 2;
    for(let i = 3; i <= n; i++){
        opt[i] = opt[i - 1] + opt[i - 2];
    } 
    return opt[n];
}
```

```javascript
var climbStairs = function(n) {
    if(n < 3){
        return n;
    }
    let pre2 = 1;
    let pre1 = 2;
    let res;
    for(let i = 3; i <= n; i++) {
        res = pre2 + pre1;
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}
```

##### 别人的写法：

##### 	方法1：

​	求斐波拉切数，可以转换成计算一个矩阵的n次幂的问题,类似(0050Pow(x,n)),可以把时间复杂度降为O(logn)。

```javascript
var climbStairs = function(n) {
    if(n == 0){
        return 0;
    }
    let f = [[1, 1], [1, 0]];
    let res = pow(f, n);
    return res[0][0];
}

function pow(arr, n){
    let res = [[1, 0], [0, 1]];
    while(n > 0) {
        if((n & 1) == 1) {
            res = multiply(res, arr);
        }
        n >>= 1;
        arr = multiply(arr, arr);
    }
    return res;
}

function multiply(a, b) {
    let c = [[], []];
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
}
```

##### 	方法2：

​	求斐波拉切数的公式。(在js中似乎不对？)

```javascript
var climbStairs = function(n) {
    let sqrt5 = Math.sqrt(5);
    let fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return parseInt(fibn / sqrt5);
}
```

# 62. Unique Paths

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![img](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)
Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** *m* and *n* will be at most 100.

**Example 1:**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example 2:**

```
Input: m = 7, n = 3
Output: 28
```

##### 2019.07.09

##### 我的思路：

​	dp: 用一个名字为opArr的二维数据来存储坐标(i,j)的路径数。

```javascript
	opArr[i][j] = opArr[i - 1][j] + opArr[i][j - 1]
```

​	最优子结构就是上面这行代码。

​	时间复杂度O(mn)，空间复杂度O(mn)

```javascript
var uniquePaths = function(m, n) {
    let opArr = new Array(m);
    for(let i = 0; i < m; i++){
        opArr[i] = new Array(n);
    }
    for(let i = 0; i < n; i++){
        opArr[0][i] = 1;
    }
    for(let i = 0; i < m; i++){
        opArr[i][0] = 1;
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            opArr[j][i] = opArr[j - 1][i] + opArr[j][i - 1]; 
        }
    }
    return opArr[m - 1][n - 1];
};
```

# 63. Unique Paths II

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

![img](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

An obstacle and empty space is marked as `1` and `0` respectively in the grid.

**Note:** *m* and *n* will be at most 100.

**Example 1:**

```
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

##### 2019.07.10

##### 我的思路：

​	跟0062相同，只是需要判断下所在点是否有障碍物

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length;
    const width = obstacleGrid[0].length;
    const optArr = new Array(height);
    for(let i = 0; i < height; i++){
        optArr[i] = new Array(width);
    }
    optArr[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
    for(let i = 1; i < width; i++){
        optArr[0][i] = obstacleGrid[0][i] == 1 ? 0 : optArr[0][i - 1];
    }
    for(let i = 1; i < height; i++){
        optArr[i][0] = obstacleGrid[i][0] == 1 ? 0 : optArr[i - 1][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            optArr[i][j] = obstacleGrid[i][j] == 1 ? 0 : optArr[i - 1][j] + optArr[i][j - 1];
        }
    }
    return optArr[height - 1][width - 1];
};
```

##### 别人的写法：

​	改良，在dp存储每个的路径数的数组中，加一行一列，这样就不用初始化的时候给第一排，第一列置1了。

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length, width = obstacleGrid[0].length;
    let dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1).fill(0);
    }
    dp[0][1] = 1;
    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            if(!obstacleGrid[i - 1][j - 1]){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[height][width];
}
```

# 64. Minimum Path Sum

Given a *m* x *n* grid filled with non-negative numbers, find a path from top left to bottom right which *minimizes* the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

##### 2019.07.10

##### 我的思路：

###### 	写法1:

​	在用二维数组来记录各点的最小的路径和，给数组加了一行、一列Infinity，把dp(1,0)置为0可以直接从开始循环，不用判断边界。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1);
    }
    for(let i = 1; i <= width; i++){
        dp[0][i] = Infinity;
    }
    for(let j = 2; j <= height; j++){
        dp[j][0] = Infinity;
    }
    dp[1][0] = 0;
    for(let i = 1; i <=height; i++){
        for(let j = 1; j <= width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[height][width];
};
```

###### 写法2:

​	在用二维数组来记录各点的最小的路径和，把第一行和第一列的值先算出来，再循环。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height);
    for(let i = 0; i < height; i++){
        dp[i] = new Array(width);
    }
    dp[0][0] = grid[0][0];
    for(let i = 1; i < width; i++){
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for(let j = 1; j < height; j++){
        dp[j][0] = dp[j - 1][0] + grid[j][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[height - 1][width - 1];
};
```

##### 别人的写法:

###### 写法3:

​	直接用pre存储上一行的结果，cur存储这一行的结果。空间开销少。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    let pre = new Array(width);
    pre[0] = grid[0][0];
    for(let i = 1; i < width; i++) {
        pre[i] = pre[i - 1] + grid[0][i]; 
    }
    for(let i = 1; i < height; i++){
        cur[0] = pre[0] + grid[i][0];
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(pre[j], cur[j - 1]) + grid[i][j];
        }
        pre = cur;
    }
    return pre[width - 1];
}
```

###### 写法3:

​	直接用一个数组存储。每次cur[j]还是表示上一行对应列的值，cur[j - 1]，表示的是同一行前一个值。空间开销最小。牛逼！

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    cur[0] = grid[0][0];
    for(let i = 1; i < width; i++){
        cur[i] = cur[i - 1] + grid[0][i];
    }
    for(let i = 1; i < height; i++){
        cur[0] += grid[i][0]; 
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(cur[j], cur[j - 1]) + grid[i][j];
        }
    }
    return cur[width - 1];
}
```

# 69. Sqrt(x)

Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```

##### 2019.07.11

##### 我的思路：

​	二分查找

```javascript
var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    let lo = 0;
    let hi = parseInt(x / 2);
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let mid2 = mid ** 2;
        if (mid2 <= x) {
            if ((mid + 1) ** 2 > x) {
                return mid;
            }
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
}
```

# 71. Simplify Path

Given an **absolute path** for a file (Unix-style), simplify it. Or in other words, convert it to the **canonical path**.

In a UNIX-style file system, a period `.` refers to the current directory. Furthermore, a double period `..` moves the directory up a level. For more information, see: [Absolute path vs relative path in Linux/Unix](https://www.linuxnix.com/abslute-path-vs-relative-path-in-linuxunix/)

Note that the returned canonical path must always begin with a slash `/`, and there must be only a single slash `/` between two directory names. The last directory name (if it exists) **must not** end with a trailing `/`. Also, the canonical path must be the **shortest** string representing the absolute path.

**Example 1:**

```
Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
```

**Example 2:**

```
Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
```

**Example 3:**

```
Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
```

**Example 4:**

```
Input: "/a/./b/../../c/"
Output: "/c"
```

**Example 5:**

```
Input: "/a/../../b/../c//.//"
Output: "/c"
```

**Example 6:**

```
Input: "/a//b////c/d//././/.."
Output: "/a/b/c"
```

##### 2019.07.11

##### 我的思路：

​	使用栈，先把输入凭"/"划分，然后遍历该数组，碰到"."跳过，".."出个栈，"str"进栈。然后返回这个数组join("/")

```javascript
var simplifyPath = function(path) {
    let pathArray = path.split("/");
    let stack = [];
    for (let e of pathArray) {
        if (e) {
            if (e == ".") {
                continue;
            }
            else if (e == "..") {
                if(stack.length != 0){
                    stack.pop();
                }
            }
            else {
                stack.push(e);
            }
        }
    }
    return '/' + stack.join("/");
};
```

# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an *m* x *n* matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

**Example 1:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```

**Example 2:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

##### 2019.07.12

##### 我的思路：

​	两次二分查找

```javascript
var searchMatrix = function(matrix, target) {
    let len = matrix.length;
    let lo = 0, hi = matrix.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (matrix[mid][0] == target) {
            return true;
        }
        else if (matrix[mid][0] < target) {
            if (mid == len - 1 || matrix[mid + 1][0] > target) {
                return searchInRow(matrix[mid], target);            
            }   
            else {
                lo = mid + 1;
            }
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
};

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return true;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
}

```

###### 	改进后：

```javascript
var searchMatrix = function(matrix, target) {
    const height = matrix.length;
    if(height == 0){
        return false;
    }
    let firstCol = [];
    for (let i = 0; i < height; i++) {
        if (matrix[i][0] != undefined) {
            firstCol[i] = matrix[i][0];
        }
        else {
            return false;
        }
    }
    let row = searchInRow(firstCol, target);
    if (row < 0) { 
        return false;
    }
    let col = searchInRow(matrix[row], target);
    return matrix[row][col] == target;
}

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo - 1;
}
```

# 75. Sort Colors

Given an array with *n* objects colored red, white or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note:** You are not suppose to use the library's sort function for this problem.

**Example:**

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**

- A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?

##### 2019.07.13

##### 我的思路：

###### 	方法1：

​		遍历一次结束

​		两点法：i表示下一个0元素放的地方，j表示下一个2元素放的地方

```javascript
var sortColors = function(nums) {
    let i = 0, j = nums.length - 1;
    let index = 0;
    while (index <= j) {
        if (nums[index] == 0 && index != i) {
            [nums[index], nums[i++]] = [nums[i], nums[index]];
        }
        else if (nums[index] == 2) {
            [nums[index], nums[j--]] = [nums[j], nums[index]];
        }
        else {
            index++;
        }
    }
    return;
};
```

###### 	方法2：

​		需要遍历两次。

​		遍历第一次先记录0、1、2分别的个数，然后再遍历一次按顺序写上去

###### 		注:本来第一反应是用方法2的，觉得太low了用的两点法

```javascript
var sortColors = function(nums) {
    let tmpArr = new Array(3).fill(0)
    nums.forEach(e => tmpArr[e]++);
    let i = 0;
    tmpArr.forEach((e, index) => {
        for (let j = 0; j < e; j++) {
            nums[i++] = index;
        }
    })
    return;
}
```

# 77. Combinations

Given two integers *n* and *k*, return all possible combinations of *k* numbers out of 1 ... *n*.

**Example:**

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

##### 2019.07.13

##### 我的思路：

###### 写法1：

​		dfs的老生常谈了

```javascript
var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        res.push(arr);
        return;
    }
    for (let i = index; i <= n; i++) {
        let tmp = [...arr];
        tmp.push(i);
        dfs(i + 1, tmp, n, k - 1, res);
    }
}
```

##### 别人的写法：

###### 写法2：

​		同样是dfs，但是别人的这个写法比我好不少（这样的写法我碰到很多次，下次一定这样写！）

```javascript
var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        res.push([...arr]);
        return;
    }
    for (let i = index; i <= n; i++) {
        arr.push(i);
        dfs(i + 1, arr, n, k - 1, res);
        arr.pop();
    }
}
```