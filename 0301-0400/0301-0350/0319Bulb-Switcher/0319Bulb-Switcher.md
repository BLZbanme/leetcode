# 319. Bulb Switcher

There are *n* bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the *i*-th round, you toggle every *i* bulb. For the *n*-th round, you only toggle the last bulb. Find how many bulbs are on after *n* rounds.

**Example:**

```
Input: 3
Output: 1 
Explanation: 
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
```

##### 2019.10.18

##### 	我的思路：

​	暴力遍历

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

​	数学方法，由于必须要奇数次才能为亮灯，所以只有完全平方数符合。所以计算1~n中的完全平凡数即为答案

```javascript
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};
```