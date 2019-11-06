# 260. Single Number III

Given an array of numbers `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

**Example:**

```
Input:  [1,2,1,3,2,5]
Output: [3,5]
```

**Note**:

1. The order of the result is not important. So in the above example, `[5, 3]` is also correct.
2. Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

##### 2019.11.04

##### 	我的思路：

​		垃圾写法，一个set(one)中放出现的元素，一个set(oneMore)中存放出现多次的元素，然后one中删掉oneMore中出现过的元素。

```javascript
var singleNumber = function(nums) {
    let oneMore = new Set();
    let one = new Set();
    nums.forEach(e => {
        if (one.has(e)) {
            oneMore.add(e);
        }
        else {
            one.add(e);
        }
    })
    Array.from(oneMore).forEach(e => {
        one.delete(e);
    })
    return Array.from(one);
};
```

##### 别人的方法：

​		我想过用异或的方法，但是没想到“最低为1位”这个操作

1. 第一轮遍历异或，得到两个单独出现的元素的异或值
2. 这个异或值与他的相反数相交的值即是，两元素的最低不同的为1的位
3. 以这个diff值区分两个数，其他重复出现的数也被diff区分在两边了

```javascript
var singleNumber = function(nums) {
    let diff = 0;
    nums.forEach(num => {
        diff ^= num;
    })
    diff &= -diff;
    let res = [0, 0];
    nums.forEach(num => {
        if (num & diff) {
            res[1] ^= num;
        }
        else{
            res[0] ^= num;
        }
    })
    return res;
}
```

# 263. Ugly Number

Write a program to find the `n`-th ugly number.

Ugly numbers are **positive numbers** whose prime factors only include `2, 3, 5`. 

**Example:**

```
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
```

**Note:**  

1. `1` is typically treated as an ugly number.
2. `n` **does not exceed 1690**.

##### 2019.11.05

##### 我的思路：

没写出来

##### 别人的方法：

动态规划，每次判断2，3，5指针分别只向的那个丑数的倍数的最小值。

时间复杂度O(n)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n);
    dp[0] = 1;
    let twoNum = 0;
    let threeNum = 0;
    let fiveNum = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[twoNum] * 2, dp[threeNum] * 3, dp[fiveNum] * 5);
        if (dp[i] === dp[twoNum] * 2) {
            twoNum++;
        }
        if (dp[i] === dp[threeNum] * 3) {
            threeNum++;
        }
        if (dp[i] === dp[fiveNum] * 5) {
            fiveNum++;
        }
    }
    return dp[n - 1];
};
```

# 283. Move Zeroes

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Example 1:**

```
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

**Example 2:**

```
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```

**Example 3:**

```
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

**Example 4:**

```
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```

**Notes:**
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters that may be separated by a single space.

##### 2019.11.06

##### 我的思路：

1. 用一个map记录pattern中出现的字符
2. 遍历pattern，对于map中没出现的字符，进行记录对应的str中的字符串，并用一个set记录该字符串
3. 对于出现过的字符就判断对应str中的字符串，是否等于map中的值
4. set中记录出现过的字符串是防止出现Example4中的情况

```javascript
var wordPattern = function(pattern, str) {
    let map = new Map();
    let set = new Set();
    let arr = str.split(" ");
    const N = pattern.length;
    if (arr.length !== N) {
        return false;
    }
    for (let i = 0; i < N; i++) {
        if (!map.has(pattern[i])) {
            if (!set.has(arr[i])) {
                set.add(arr[i]);
                map.set(pattern[i], arr[i]);
            }
            else {
                return false;
            }
        }
        else if (map.get(pattern[i]) !== arr[i]) {
            return false;
        }
    }
    return true;
};
```