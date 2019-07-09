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