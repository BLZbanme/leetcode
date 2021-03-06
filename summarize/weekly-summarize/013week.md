# 204. Count Primes

Count the number of prime numbers less than a non-negative number, **n**.

**Example:**

```
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

##### 2019.09.10

##### 我的思路：

​		蠢蠢的遍历

```javascript
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }
    let count = 1;
    for (let i = 3; i < n; i++) {
        let sqrt = Math.floor(Math.sqrt(i));
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (j > sqrt) {
            count++;
        }
    }
    return count;
};
```

##### 别人的方法：

​	把遍历到的数的倍数全部标记为非质数

```javascript
var countPrimes = function(n) {
    let notPrime = new Array(n).fill(false);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return count;
}
```

# 209. Minimum Size Subarray Sum

Given an array of **n** positive integers and a positive integer **s**, find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.

**Example:** 

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

**Follow up:**

If you have figured out the *O*(*n*) solution, try coding another solution of which the time complexity is *O*(*n* log *n*). 

##### 2019.09.12

##### 我的思路：

​		用一个数组记录，从某个点开始当前长度的序列的和，然后判断这个和是否大于等于s，若大于等于直接返回当前长度。

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums) {
        return 0;
    }
    if (nums.some(e => e >= s)) {
        return 1;
    }
    let dp = Array.from(nums);
    for (let i = 1, N = nums.length; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j] += nums[j + i];
            if (dp[j] >= s) {
                return i + 1;
            } 
        }
    }
    return 0;
};
```

##### 别人的方法：

##### 方法1：

​	双指针法，用min记录当前的长度，从0点开始扩张数组的长度，发现数组的和大于等于s后，收缩数组的左边，得到最后大于s的值对应的长度就是当前子序列的长度！

​	时间复杂度O(n)

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    let i = 0;
    let j = 0;
    let sum = 0;
    let min = Infinity;
    while (j < nums.length) {
        sum += nums[j++];
        while (sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i++];
        }
    }
    return min === Infinity ? 0 : min;
}
```

# 200. Number of Islands

Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**

```
Input:
11000
11000
00100
00011

Output: 3
```

##### 2019.09.15

##### 我的思路：

​		dfs，每找到一个为```'1'```的点计数器就加1，并且把周围的每个点都遍历，把其中为```'1'```的都置为```'0'```。这里我额外对每个点判断了他来自的方向，这样的话可以不去判断他来自的方向的点是啥了。但后来我仔细思考了一下，这并不划算，因为每个点来自的方向的那个点必然是```'0'```了。

##### 		注：中间有个小插曲， 我把```grid[i][j] = '0';```一开始写成了```grid[i][j] === '0';```，导致始终报错溢出，我想当然的以为是dfs方法行不通，直到我看了高亮答案跟我思路基本一致，才仔细看了下。

```javascript
var numIslands = function(grid) {

    function check(direction, i, j) {
        if ( i < 0 || j < 0 || i === H || j === W 
            ||grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        switch(direction) {
            case "left":                
                check("left", i, j - 1);
                check("top", i - 1, j);
                check("down", i + 1, j);
                break;
            case "right":                
                check("right", i, j + 1);
                check("top", i - 1, j);
                check("down", i + 1, j);
                break;
            case "top":                
                check("left", i, j - 1);
                check("right", i, j + 1);
                check("top", i - 1, j);
                break;
            case "down":                
                check("left", i, j - 1);
                check("right", i, j + 1);
                check("down", i + 1, j);
                break;
            default:
                check("right", i, j + 1);
                check("down", i + 1, j);
                break;
        }
    }

    let count = 0;
    const H = grid.length;
    if (!H) {
        return count;
    }
    const W = grid[0].length;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === '1') {
                count++;
                check(null,i, j);
            }
        }
    }
    return count;
};
```

##### 别人的方法：

​		dfs

```javascript
var numIslands = function(grid) {
    let count = 0;
    const H = grid.length;
    if (H === 0) {
        return count;
    }
    const W = grid[0].length;

    function dfs(i, j) {
        if (i < 0 || j < 0 || i === H || j === W 
            || grid[i][j] !== '1') {
                return;
        }
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}
```