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

