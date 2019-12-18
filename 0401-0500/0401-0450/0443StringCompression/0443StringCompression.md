# 443. String Compression

Given an array of characters, compress it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a **character** (not int) of length 1.

After you are done **modifying the input array in-place**, return the new length of the array.

**Follow up:**
Could you solve it using only O(1) extra space?

**Example 1:**

```
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
```

**Example 2:**

```
Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.
```

**Example 3:**

```
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
```

**Note:**

1. All characters have an ASCII value in `[35, 126]`.
2. `1 <= len(chars) <= 1000`.

##### 2019.12.18

#### 	我的思路：

```javascript
var compress = function(chars) {
    let num = 0;
    let tmp = "";
    let index = 0;
    for (let i = 0; i < chars.length; i++) {
        if (tmp !== chars[i]) {
            let stack = [];
            if (num > 1) {
                while (num) {
                    stack.push(num % 10);
                    num = Math.floor(num / 10);
                }
                let len = stack.length;
                while (len) {
                    chars[index++] = "" + stack[--len];
                }
            }
            tmp = chars[i];
            chars[index++] = tmp;
            num = 1;
        }
        else {
            num++;
        }
    }
    if (num != 1) {
        let stack = [];
        while (num) {
            stack.push(num % 10);
            num = Math.floor(num / 10);
        }
        let len = stack.length;
        while (len) {
            chars[index++] = "" + stack[--len];
        }
    }
    return index;
};
```

#### 别人的方法：

​	实际思路跟我一样的，优化了一下

```javascript
var compress = function(chars) {
    let indexAns = 0;
    let index = 0;
    while (index < chars.length) {
        let cur = chars[index];
        let count = 0;
        while (index < chars.length && chars[index] == cur) {
            count++;
            index++;
        }
        chars[indexAns++] = cur;
        if (count != 1) {
            let tmp = count.toString();
            for (let i = 0; i < tmp.length; i++) {
                chars[indexAns++] = tmp[i];
            }
        }
    }
    return indexAns;
}

```