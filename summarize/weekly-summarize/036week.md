# 583. Delete Operation for Two Strings

Given two words *word1* and *word2*, find the minimum number of steps required to make *word1* and *word2* the same, where in each step you can delete one character in either string.

**Example 1:**

```
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
```



**Note:**

1. The length of given words won't exceed 500.

2. Characters in given words can only be lower-case letters.

   

#### 2020.07.29

#### 	我的思路：

​	nums排序 然后把奇数位的和加起来

​	时间复杂度O(n)

​	第一种简写的写法是为了练下reduce()的用法= =

#### 别人的写法：

主要的思路就是找到两个字符串的最长公共子序列，出去公共子序列后剩下的长度就是要被删除的字符数量。

##### 递归

```javascript
var minDistance = function(word1, word2) {
    return word1.length + word2.length - 2 * lcs(word1, word2, word1.length, word2.length);
};

function lcs(word1, word2, m, n) {
    if (m == 0 || n == 0) {
        return 0;
    }
    if (word1[m - 1] == word2[n - 1]) {
        return 1 + lcs(word1, word2, m - 1, n - 1)
    }
    else {
        return Math.max(lcs(word1, word2, m, n - 1), lcs(word1, word2, m - 1, n));
    }
}
```

##### 带记忆数组的递归

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const memo = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        memo[i] = Array(N + 1).fill(0);
    }

    function dfs(i, j) {
        if (i == 0 || j == 0) {
            return 0;
        }
        if (memo[i][j] > 0) {
            return memo[i][j];
        }
        if (s1[i - 1] === s2[j - 1]) {
            memo[i][j] = 1 + dfs(i - 1, j - 1);
        }
        else {
            memo[i][j] = Math.max(dfs(i, j - 1), dfs(i - 1, j));
        }
        return memo[i][j];
    }

    return M + N - 2 * dfs(M, N);
}
```

##### 动态规划1

求最长公共子序列的思路

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(0);
    }

    for(let i = 0; i <= M; i++) {
        for (let j = 0; j <= N; j++) {
            if (!i || !j) {
                continue;
            }
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return M + N - 2 * dp[M][N];
}
```

##### 动态规划2

直接硬怼

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(0);
    }

    for (let i = 0; i <= M; i++) {
        for (let j = 0; j <= N; j++) {
            if (!i || !j) {
                dp[i][j] = i + j;
            }
            else if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[M][N];
}
```

# 632.Smallest Range Covering Elements from K Lists

You have `k` lists of sorted integers in ascending order. Find the **smallest** range that includes at least one number from each of the `k` lists.

We define the range [a,b] is smaller than range [c,d] if `b-a < d-c` or `a < c` if `b-a == d-c`.

 

**Example 1:**

```
Input: [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
```

 

**Note:**

1. The given list may contain duplicates, so ascending order means >= here.
2. 1 <= `k` <= 3500
3. -105 <= `value of elements` <= 105.



##### 2020.08.01

##### 我的思路：

优先队列

```javascript
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const pq = new MinPQ();
    let max = -Infinity;
    let result;
    let Len;

    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i].shift();
        pq.insert({
            index: i,
            val: tmp
        });
        max = Math.max(max, tmp);
    }

    result = [pq.pq[1].val, max];
    Len = max - pq.pq[1].val;

    while (true) {
        let tmp = pq.pop();
        let index = tmp.index;
        if (!nums[index].length) {
            break;
        }
        tmp = nums[index].shift();
        if (tmp > max) {
            max = tmp;
        }
        
        pq.insert({
            val: tmp,
            index
        });
        pq.swim(pq.size);
        if (max - pq.pq[1].val < Len) {
            Len = max - pq.pq[1].val;
            result = [pq.pq[1].val, max];
        }
    }
    
    return result;
};

class MinPQ {
    constructor() {
        this.pq = [null];
        this.size = 0;
    }

    pop() {
        if (!this.size) {
            return;
        }
        let tmp = this.pq[1];
        [this.pq[1], this.pq[this.size]] = [this.pq[this.size], this.pq[1]];
        this.size--;
        this.sink(1);
        return tmp;
    }

    swim(k) {
        while (k > 1 && this.pq[k].val < this.pq[k >> 1].val) {
            let kHalf = k >> 1;
            [this.pq[k], this.pq[kHalf]] = [this.pq[kHalf], this.pq[k]];
            k = kHalf;
        }
    }

    insert(obj) {
        this.pq[++this.size] = obj;
        this.swim(this.size);
    }

    sink(index) {
        let i = index;
        while (i * 2 <= this.size) {
            let j = i * 2;
            if (j < this.size && this.pq[j].val > this.pq[j + 1].val) {
                j++;
            }
            if (this.pq[i].val < this.pq[j].val) {
                break;
            }
            [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
            i = j;
        }
    }
}
```