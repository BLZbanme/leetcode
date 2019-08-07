# 125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Note:** For the purpose of this problem, we define empty string as valid palindrome.

**Example 1:**

```
Input: "A man, a plan, a canal: Panama"
Output: true
```

**Example 2:**

```
Input: "race a car"
Output: false
```

##### 2019.08.07

##### 我的方法：

​		用两个指针标明前后

​		我的思路是：用一个二维dp数组存储，```dp[i][j]```表示从i到j的只买卖一次的利润，这样dp里面能存储所以i到j的一次买卖的利润。然后最后一次遍历，把prices划分为两边，得到两边和最大的值就是结果。

```javascript
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let reg = /\W/;
    while (i < j) {
        while (reg.test(s[i])) {
            i++;
        }
        while (reg.test(s[j])) {
            j--;
        }
        if (i >= j) {
            return true;
        }
        if (s[i].toUpperCase() !== s[j].toUpperCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
```
