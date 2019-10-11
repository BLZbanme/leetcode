# 299.Bulls and Cows

You are playing the following [Bulls and Cows](https://en.wikipedia.org/wiki/Bulls_and_Cows) game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use `A` to indicate the bulls and `B` to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

**Example 1:**

```
Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
```

**Example 2:**

```
Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
```

**Note:** You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

##### 2019.10.19

##### 	我的思路：

​	两次便历，第一次存储secert中各元素出现的次数，如果secert和guess当前位相同，则不增加次数。第二次遍历，计算出多次guess中有多少个在secert存在，但是位置不同的元素。

```javascript
var getHint = function(secret, guess) {
    if (!secret) {
        return '0A0B';
    }
    let map = new Map();
    const N = secret.length;
    let bulls = 0;
    let gArr = guess.split("");
    for (let i = 0; i < N; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
            gArr[i] = "*";
        }else {
            let tmp = map.get(secret[i]);
            map.set(secret[i], tmp ? tmp + 1 : 1);
        }
    }
    
    let cows = 0;
    for (let i = 0; i < N; i++) {
        let tmp = map.get(gArr[i]);
        if (tmp) {
            map.set(gArr[i], --tmp);
            cows++;
        }
    }
    return `${bulls}A${cows}B`;
};

```

##### 别人的思路：

一次便历,用一个数组存储0~9出现的次数，如果在secret中出现就加1，在guess中出现就减一。

```javascript
var getHint = function(secret, guess) {
    let count = new Array(10).fill(0);
    let bulls = 0;
    let cows = 0;
    const N = secret.length;
    const zero = '0'.charCodeAt();
    for (let i = 0; i < N; i++) {
        let a = secret[i].charCodeAt() - zero;
        let b = guess[i].charCodeAt() - zero;
        if (a === b) {
            bulls++;
        }
        else {
            if (count[a] < 0) {
                cows++;//如果在i处s和g不相等，并且s在已经出现过在g中的其他位置，cows++
            }
            if (count[b] > 0) {
                cows++;//如果在i处s和g不相等，并且g已经出现过在s中的其他位置，cows++
            }
            count[a]++;
            count[b]--;
        }
    }
    return `${bulls}A${cows}B`;
}
```

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

##### 我的思路：

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

​	广度优先遍历，每次给当前值，增加一个完全平方数，并把深度加一，直到找到最后的结果。值得注意的是需要增加一个set判断已经计算过的值，简化次数。

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

