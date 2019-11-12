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

##### 	我的思路：

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

##### 	别人的方法：

##### 	弗洛伊德判圈法（龟兔赛跑法），空间复杂度O(1)

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
