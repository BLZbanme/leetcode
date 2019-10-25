# 221. Maximal Square

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

**Example:**

```
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
```

##### 2019.09.16

##### 我的思路：

没写出来

##### 别人的方法：

​		dp

```javascript
var maximalSquare = function(matrix) {
    const HEIGHT = matrix.length;
    if (!HEIGHT || !matrix[0].length) {
        return 0;
    }
    const WIDTH = matrix[0].length;
    let dp = new Array(HEIGHT + 1);
    let result = 0;
    for (let i = 0; i <= HEIGHT; i++) {
        dp[i] = new Array(WIDTH + 1).fill(0);
    }

    for (let i = 1; i <= HEIGHT; i++) {
        for (let j = 1; j <= WIDTH; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                result = Math.max(result, dp[i][j]);
            }
        }
    }
    return result * result;
};
```

# 205. Isomorphic Strings

Given two strings **s** and **t**, determine if they are isomorphic.

Two strings are isomorphic if the characters in **s** can be replaced to get **t**.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

**Example 1:**

```
Input: s = "egg", t = "add"
Output: true
```

**Example 2:**

```
Input: s = "foo", t = "bar"
Output: false
```

**Example 3:**

```
Input: s = "paper", t = "title"
Output: true
```

**Note:**
You may assume both **s** and **t** have the same length.

##### 2019.10.22

##### 我的思路：

​		没实现，我想的是把s和t的字频算出来，然后比较每一位的字频，这样会导致出现字频相同位置不同也会误判的结果。如```console.log(isIsomorphic("abba", "abab"));```

```javascript
var isIsomorphic = function(s, t) {
    const N1 = s.length;
    const N2 = t.length;
    if (N1 !== N2) {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < N1; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1);
        }
        else {
            map1.set(s[i], 1);
        }

        if (map2.has(t[i])) {
            map2.set(t[i], map2.get(t[i]) + 1);
        }
        else {
            map2.set(t[i], 1);
        }
    }

    for (let i = 0; i < N1; i++) {
        if (map1.get(s[i]) !== map2.get(t[i])) {
            return false;
        }
    }
    return true;
};

```

##### 别人的方法：

##### 方法1：在s和t中的字符间做映射

```javascript
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i  < s.length; i++) {
        const sNow = mapS.get(s[i]);
        const tNow = mapT.get(t[i]);
        if ((sNow && sNow !== t[i]) || (tNow && tNow !== s[i])) {
            return false;
        }
        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
    }
    return true;
}
```

##### 方法2：做字典序计数

```javascript
var isIsomorphic = function(s, t) {
    let m1 = new Array(256).fill(0);
    let m2 = new Array(256).fill(0);
    const N = s.length;
    for (let i = 0; i < N; i++) {
        if (m1[[s[i]]] !== m2[t[i]]) {
            return false;
        }
        m1[s[i]] = i + 1;
        m2[t[i]] = i + 1;
    }
    return true;
}
```

##### 方法3：直接判断对应字符在字符串中首次出现的下标是否相同

```javascript
var isIsomorphic = function(s, t) {
    for (let i = 0, len = s.length; i < len; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
}
```

# 202. Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Example:** 

```
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

##### 2019.10.23

##### 我的思路：

​		我的方法，空间复杂度O(n)，就是疯狂迭代，直到进入循环

```javascript
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        let newN = 0;
        let tmp;
        while (n) {
            tmp = n % 10;
            n = Math.floor(n / 10);
            newN += tmp ** 2; 
        }
        n = newN;
    }
    return true;
};
```

##### 别人的方法：

##### 弗洛伊德判圈法（龟兔赛跑法），空间复杂度O(1)

这个算法的题目已经见过很多次了，很牛逼！

```javascript
function digitSquareSum(n) {
    let sum = 0;
    let tmp;
    while (n) {
        tmp = n % 10;
        sum += tmp ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function(n) {
    let slow;
    let fast;
    slow = fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while (slow !== fast);
    if (slow === 1) {
        return true;
    }
    return false;
}
```

# 229. Majority Element II

Given an integer array of size *n*, find all elements that appear more than `⌊ n/3 ⌋` times.

**Note:** The algorithm should run in linear time and in O(1) space.

**Example 1:**

```
Input: [3,2,3]
Output: [3]
```

**Example 2:**

```
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
```

##### 2019.10.25

##### 我的思路：

```javascript
var majorityElement = function(nums) {
    let result = new Set();
    let map = new Map();
    let beyond = Math.floor(nums.length / 3);
    if (!beyond) {
        return Array.from(new Set(nums));
    }
    nums.forEach(e => {
        if (map.has(e)) {
            let num = map.get(e);
            if (num === beyond) {
                result.add(e);
            }
            else {
                map.set(e, num + 1);
            } 
        }
        else {
            map.set(e, 1);
        }
    })
    return Array.from(result);
};
```

##### 别人的方法：

​		摩尔投票算法，第一轮便利找到两个候选者，第二轮遍历验证他们是否满足

```javascript
var majorityElement = function(nums) {
    let result = [];
    if (!nums.length) {
        return result;
    }
    let num1 = nums[0];
    let num2 = nums[0];
    let count1 = 0;
    let count2 = 0;
    for (let num of nums) {
        if (num === num1) {
            count1++;
        }
        else if (num === num2) {
            count2++;
        }
        else if (!count1) {
            num1 = num;
            count1++;
        }
        else if (!count2) {
            num2 = num;
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === num1) {
            count1++;
        }
        else if (num === num2) {
            count2++;
        }
    }
    const TMP = Math.floor(nums.length / 3);
    if (count1 > TMP) {
        result.push(num1);
    }
    if (count2 > TMP) {
        result.push(num2);
    }
    return result;
}
```

​		

