# 279. Perfect Squares

Given a positive integer *n*, find the least number of perfect square numbers (for example, `1, 4, 9, 16, ...`) which sum to *n*.

**Example 1:**

```
Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
```

**Example 2:**

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```

##### 2019.10.11

##### 	我的思路：

​		垃圾的dp：我的思路是，自底向上，计算每一个数最少由几个完全平方数的和

```javascript
var numSquares = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        if (isSquares(i)) {
            dp[i] = 1;
            continue;
        }
        let min = Infinity;
        for(let j = 1; j <= i / 2; j++) {
            min = Math.min(dp[j] + dp[i - j], min);
        }
        dp[i] = Math.min(min, dp[i - 1] + 1);
    }
    return dp[n];
};

function isSquares(n) {
    let tmp = Math.floor(Math.sqrt(n));
    return n === tmp ** 2;
}
```

##### 		改良：

​		我发觉```isSquares```方法太麻烦，于是我增加了一个标识，用于标识下一个完全平方数，但是虽然优化了一丢丢，我的方法还是很垃圾

```javascript
var numSquares = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    let nextNum = 4;
    for (let i = 2; i <= n; i++) {
        if (i === nextNum) {
            dp[i] = 1;
            nextNum = (Math.sqrt(nextNum) + 1) ** 2;
            continue;
        }
        let min = Infinity;
        for(let j = 1; j <= i / 2; j++) {
            min = Math.min(dp[j] + dp[i - j], min);
        }
        dp[i] = Math.min(min, dp[i - 1] + 1);
    }
    return dp[n];
};
```

##### 别人的方法：

##### 	方法1：dp

他们主要的思路还是跟我一样，好的地方是内循环的划分，我是每次增加1划的，它们是增加一个完全平方数！

```javascript
var numSquares = function(n) {
    let list = new Array(n + 1).fill(Infinity);
    list[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j ** 2 <= i; j++) {
            list[i] = Math.min(list[i], list[i - j ** 2] + 1);
        }
    }
    return list[n];
}
```

##### 	方法1的优化：

```javascript
var numSquares = function(n) {
    let list =[0];
    while (list.length <= n) {
        let m = list.length;
        let tmp = Infinity;
        for (let i = 1; i * i <= m; i++) {
            tmp = Math.min(tmp, list[m - i * i] + 1);
        }
        list.push(tmp);
    }
    return list[n];
}
```

##### 	方法2：BFS

```javascript
var numSquares = function(n) {
    let queue = [0];
    let visited = new Set([0]);
    let depth = 0;
    while (queue.length) {
        let size = queue.length;
        depth++;
        while (size--) {
            let u = queue.shift();
            for (let i = 1; i * i <= n; i++) {
                let v = u + i * i;
                if (v === n) {
                    return depth;
                }
                if (v > n) {
                    break;
                }
                if (!visited.has(v)) {
                    queue.push(v);
                    visited.add(v);
                }
            }
        }
    }
    return depth;
}
```

