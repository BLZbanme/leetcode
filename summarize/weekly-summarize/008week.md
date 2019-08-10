# 122. Best Time to Buy and Sell Stock II

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

**Note:** You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

##### 2019.08.05

##### 别人的写法：

​	我太蠢了，没写出来

```javascript
var maxProfit = function(prices) {
    let res = 0;
    const N = prices.length;
    for (let i = 1; i < N; i++) {
        res += Math.max(prices[i] - prices[i - 1], 0);
    }
    return res;
};
```

# 123. Best Time to Buy and Sell Stock III

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete at most *two* transactions.

**Note:** You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

##### 2019.08.06

##### 我的方法：

​		失败内存溢出了.

​		我的思路是：用一个二维dp数组存储，```dp[i][j]```表示从i到j的只买卖一次的利润，这样dp里面能存储所以i到j的一次买卖的利润。然后最后一次遍历，把prices划分为两边，得到两边和最大的值就是结果。

```javascript
var maxProfit = function(prices) {
    if (!prices || !prices.length) {
        return 0;
    }
    const N = prices.length;
    let dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = 0;
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i - 1], prices[j + i] - Math.min(...prices.slice(j, j + i))); 
        }
    }

    let result = prices[N - 1] - prices[0];
    for (let i = 0; i < N - 1; i++) {
        result = Math.max(result, dp[0][i] + dp[i + 1][N - 1]);
    }
    return result;
};
```

##### 别人的写法：

##### dp类：

​	递推关系：(我自己写的问题就是判断后半块写的太复杂了)

​	```dp[k, i] = max(dp[k, i-1], prices[i] - prices[j] + dp[k-1, j-1]), j=[0..i-1]```

###### 	写法1：

​		这种写法的min取值非常巧妙

​		时间复杂度O(kn^2)，空间复杂度 O(kn).

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        for (let i = 1; i < N; i++) {
            let min = prices[0];
            for (let j = 1; j <= i; j++) {
                min = Math.min(min, prices[j] - dp[k - 1][j - 1]);
            }
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}
```

​	写法2：

​		时间复杂度O(kn)，空间复杂度 O(kn).

```javascript

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        let min = prices[0];
        for (let i = 1; i < N; i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}

```

​	写法3：

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3);
    for (let i = 0; i < 3; i++) {
        dp[i] = new Array(N).fill(0);
    }
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min[k]);
        }
    }
    return dp[2][N - 1];
}
```

​	写法4：

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3).fill(0);
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1]);
            dp[k] = Math.max(dp[k], prices[i] - min[k]);
        }
    }
    return dp[2];
}
```

​	写法5：终极进化，最优美的

```javascript
var maxProfit = function(prices) {
    let buyOne = -Infinity;
    let butTwo = -Infinity;
    let sellOne = 0;
    let sellTwo = 0;
    for (let price of prices) {
        buyOne = Math.max(buyOne, -price);
        sellOne = Math.max(sellOne, buyOne + price);
        butTwo = Math.max(butTwo, sellOne - price);
        sellTwo = Math.max(sellTwo, butTwo + price);
    }
    return sellTwo;
}
```

#### 总结：这题看完别人的所以写法感觉很怀疑人生，非常沮丧。

##### 遍历划分类：

​		写法1：暴力划分

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let res = 0;
    let cutMax = 0;
    for (let cut = 0; cut < N; cut++) {
        let preMin = prices[0];
        let preMax = 0;
        for (let i = 1; i < cut; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax = preMax;
        
        preMin = prices[cut];
        preMax = 0;
        for (let i = cut + 1; i < N; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax += preMax;
        res = Math.max(res, cutMax);
    }
    return res;
}
```

​		写法2： 先分别缓存从前到后，从后到前的利润。然后遍历一遍把prices划分为前后两边，算出前后两边的最大和

###### 注：这种写法跟我自己写的思路是一值的，但是由于我这次的dp写的很烂，导致最后内存爆了

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let maxPre = new Array(N);
    let maxLast = new Array(N);
    maxPre[0] = 0;
    let minCur = prices[0];
    for (let i = 1; i < N; i++) {
        maxPre[i] = Math.max(maxPre[i - 1], prices[i] - minCur);
        minCur = Math.min(minCur, prices[i]);
    }

    maxLast[N - 1] = 0;
    let maxCur = prices[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        maxLast[i] = Math.max(maxLast[i + 1], maxCur - prices[i]);
        maxCur = Math.max(maxCur, prices[i]);
    }

    let res = maxLast[0];
    for (let cut = 1; cut < N; cut++) {
        res = Math.max(res, maxPre[cut - 1] + maxLast[cut]);
    }
    return res;
}
```

# 127. Word Ladder

Given two words (*beginWord* and *endWord*), and a dictionary's word list, find the length of shortest transformation sequence from *beginWord* to *endWord*, such that:

1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that *beginWord* is *not* a transformed word.

**Note:**

- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume *beginWord* and *endWord* are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

##### 2019.08.07

##### 别人的方法：

​		这题由于我BFS的题目练习的比较少，并且一开始理解错题目意思了，没写出来，就直接学习了别人的思路。

巧妙地是永远都是把beginSet交换成beginSet和endSet中较少元素的那一个。

```javascript
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) {
        return 0;
    }
    let beginSet = new Set();
    let endSet = new Set();

    let len = 1;
    let visited = new Set();
    let a = 'a'.charCodeAt();
    let z = 'z'.charCodeAt();
    let dict = new Set(wordList);

    beginSet.add(beginWord);
    endSet.add(endWord);

    while (beginSet.size) {
        if (beginSet.size > endSet.size) {
            let set = beginSet;
            beginSet = endSet;
            endSet = set;
        }

        let tmp = new Set();
        for (let word of beginSet) {
            let chs = word.split("");
            for (let i = 0; i < chs.length; i++) {
                for (let c = a; c <= z; c++) {
                    let old = chs[i];
                    chs[i] = String.fromCharCode(c);
                    let target = chs.join("");
                    if (endSet.has(target)) {
                        return len + 1;
                    }
                    if (!visited.has(target) && dict.has(target)) {
                        tmp.add(target);
                        visited.add(target);
                    }
                    chs[i] = old;
                }
            }
        }
        beginSet = tmp;
        len++;
    }
    return 0;
}
```

# 129. Sum Root to Leaf Numbers

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

**Note:** A leaf is a node with no children.

**Example:**

```
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**

```
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

##### 2019.08.08

##### 我的方法：

​		dfs非递归

```javascript
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let stack = [];
    let numStack = [];
    let cur = root;
    let pre = null;
    let sum = 0;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            numStack.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        
        if (cur.right && cur.right !== pre) {
            pre = cur;
            cur = cur.right;
            continue;
        }
        if (!cur.right && !cur.left) {
            sum += +numStack.join("");
        }
        pre = cur;
        stack.pop();
        numStack.pop();
        cur = null;
    }
    return sum;
};
```

​		递归

```javascript
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    function helper(node, stack) {
        stack.push(node.val);
        if (node.left) {
            helper(node.left, stack);
            stack.pop();
        }
        if (node.right) {
            helper(node.right, stack);
            stack.pop();
        }
        if (!node.left && !node.right) {
            sum += +stack.join("");
        }
    }

    helper(root, []);
    return sum;
}
```

##### 别人的方法：

​		别人的递归比我写的好一些

```javascript
var sumNumbers = function(root) {
    return sum(root, 0);
}

function sum(node, s) {
    if (!node) {
        return 0;
    }
    if (!node.right && !node.left) {
        return s * 10 + node.val;
    }
    return sum(node.left, s * 10 + node.val) + sum(node.right, s * 10 + node.val);
}
```

# 131. Palindrome Partitioning

Given a string *s*, partition *s* such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of *s*.

**Example:**

```
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
```

##### 2019.08.09

##### 我的方法：

​		回溯

```javascript
var partition = function(s) {
    let result = [];
    let arr = [];
    helper(arr, 0, 0, s.length, s, result);  
    return result;
};

function helper(array, start, end, length, s, result) {
    if (end > length) {
        return;
    }
    if (start === length) {
        result.push(Array.from(array));
        return;
    }

    let tmp = s.slice(start, end + 1);
    let palindrome = isPalindrome(tmp);
    if (palindrome) {
        helper(array, start, end + 1, length, s, result);
        array.push(tmp);
        helper(array, end + 1, end + 1, length, s, result);
        array.pop();
    }
    else {
        helper(array, start, end + 1, length, s, result);
        return;
    }
}

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
```

​		由于几个本来可以用全局变量传递的参数，在递归里面传了很多次，所以我选择使用闭包来写

```javascript
var partition = function(s) {
    let result = [];
    let arr = [];
    const N = s.length;

    function helper(array, start, end) {
        if (end > N) {
            return;
        }
        if (start === N) {
            result.push(Array.from(array));
            return;
        }
    
        let tmp = s.slice(start, end + 1);
        let palindrome = isPalindrome(tmp);
        if (palindrome) {
            helper(array, start, end + 1);
            array.push(tmp);
            helper(array, end + 1, end + 1);
            array.pop();
        }
        else {
            helper(array, start, end + 1);
            return;
        }
    }

    helper(arr, 0, 0);  
    return result;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
```

##### 别人的方法：

​		dp，二维```dp[i][j]```来存储字符串的i到j是不是回文串

```javascript
var partition = function(s) {
    const N = s.length;
    let result = [];
    result[0] = [];
    result[0].push([]);
    let pair = new Array(N);
    for (let i = 0; i < N; i++) {
        pair[i] = new Array(N);
    }

    for (let i = 0; i < N; i++) {
        result[i + 1] = [];
        for (let left = 0; left <= i; left++) {
            if ((s[left] === s[i]) && (i - left <= 1 || pair[left + 1][i - 1])) {
                pair[left][i] = pair[left][i] = true;
                let str = s.substring(left, i + 1);
                for (let r of result[left]) {
                    let tmp = Array.from(r);
                    tmp.push(str);
                    result[i + 1].push(tmp);
                }
            }
        }
    }
    return result[N];
}
```