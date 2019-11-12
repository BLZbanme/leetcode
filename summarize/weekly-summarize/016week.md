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

# 274. H-Index

Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the [definition of h-index on Wikipedia](https://en.wikipedia.org/wiki/H-index): "A scientist has index *h* if *h* of his/her *N* papers have **at least** *h* citations each, and the other *N − h* papers have **no more than** *h* citations each."

**Example:**

```
Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
```

**Note:** If there are several possible values for *h*, the maximum one is taken as the h-index.

##### 2019.10.12

##### 我的思路：

​		O(nlogn)的方法，先排序，然后找到一个不大于下标+1的引用数

```javascript
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let index = 0;
    while (citations[index] >= index + 1) {
        index++;
    }
    return index;
};
```

##### 别人的方法：

​		O(n)的方法

1. 第一次遍历，记录各个引用数的次数，大于n的统一记为n
2. 第二次遍历，从后往前，找到第一个应用数不大于小标的值

```javascript
var hIndex = function(citations) {
    const N = citations.length;
    let buckets = new Array(N + 1).fill(0);
    for (let c of citations) {
        if (c >= N) {
            buckets[N]++;
        }
        else {
            buckets[c]++;
        }
    }
    let count = 0;
    for (let i = N; i >= 0; i--) {
        count += buckets[i];
        if (count >= i) {
            return i;
        }
    }
    return 0;
}
```

# 287. Find the Duplicate Number

Given an array *nums* containing *n* + 1 integers where each integer is between 1 and *n* (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

**Example 1:**

```
Input: [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: [3,1,3,4,2]
Output: 3
```

**Note:**

1. You **must not** modify the array (assume the array is read only).
2. You must use only constant, *O*(1) extra space.
3. Your runtime complexity should be less than *O*(*n*2).
4. There is only one duplicate number in the array, but it could be repeated more than once.

##### 2019.10.15

##### 我的思路：

​		排序，找到重复值，时间复杂度O(nlogn)，空间复杂度O(n){不满足题目要求}。另外还有hash的方法，也不满足要求就不写了。

```javascript
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, N = nums.length - 1; i < N; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};
```

##### 别人的方法：

1. 先差速找到一个相同的点，此时slow走了x，fast走了2x，说明环长也为x。
2. 设到环入口距离为y，```y + c = x```,c为slow在环中走距离
3. 所以，再把fast置为0，fast和slow同速前进，fast与slow相遇时刚好在环入口，得解

```javascript
var findDuplicate = function(nums) {
    if (nums.length > 1) {
        let slow = nums[0];
        let fast = nums[nums[0]];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while (fast !== slow) {
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
    return -1;
}
```

# 318. Maximum Product of Word Lengths

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

**Example 1:**

```
Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
```

**Example 2:**

```
Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
```

**Example 3:**

```
Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
```

##### 2019.10.17

##### 我的思路：

​	暴力循环

```javascript
var maxProduct = function(words) {
    const N = words.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (aHasB(words[j], words[i])) {
                continue;
            }
            else {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

function aHasB(a, b) {
    for (let i = 0, len = a.length; i < len; i++) {
        if (b.indexOf(a[i]) !== -1) {
            return true;
        }
    }
    return false;
}
```

##### 别人的写法：

​		用很巧妙的方法把每个字符串，根据其中出现的字符编码成一个二进制串，如果两个字符串没有相同的字符，那么他们编码的二进制串应该交为"0"！，牛逼！

```javascript
var maxProduct = function(words) {
    if (!words || !words.length) {
        return 0;
    }
    let len = words.length;
    let value = new Array(len).fill(0);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < len; i++) {
        let tmp = words[i];
        for (let j = 0; j < tmp.length; j++) {
            value[i] |= 1 << (tmp[j].charCodeAt() - aCode);
        }
    }
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((value[i] & value[j]) === 0 && (words[i].length * words[j].length > max)) {
                max = words[i].length * words[j].length;
            }
        }
    }
    return max;
}
```