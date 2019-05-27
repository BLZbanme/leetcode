The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer *n* where 1 ≤ *n* ≤ 30, generate the *n*th term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

**Example 1:**

```
Input: 1
Output: "1"
```

**Example 2:**

```
Input: 4
Output: "1211"
```

##### 2019.05.27

##### 	我的思路：

​	 循环，然后判断当前字符串有多少个连续相同的字符，生成下次循环所需的字符串。

​	时间复杂度O(n<sup>2</sup>)

```javascript
var countAndSay = function(n) {
    let result = tmp = "1";
    while(n > 1){
        let i = 0;
        result = "";
        while(i < tmp.length){
            let j = 1;
            let now = tmp[i];
            while(i + j < tmp.length && tmp[i + j] == now){
                j++;
            }
            result += j + now;
            i = i + j;
        }
        n--;
        tmp = result;
    }
    return result;
};
```
