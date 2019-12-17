# 415. Add Strings

Find the sum of all left leaves in a given binary tree.

**Example:**

```
    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
```

##### 2019.12.04

#### 	我的思路：

##### 方法1：

```javascript
var addStrings = function(num1, num2) {
    let N1 = num1.length - 1;
    let N2 = num2.length - 1;
    if (N1 < N2) {
        [num1, num2] = [num2, num1];
        [N1, N2] = [N2, N1];
    }
    let result = "";
    let tmp = 0;
    let i = 0;
    while (i <= N2) {
        tmp = (+num1[N1 - i] + +num2[N2 - i] + tmp);
        if (tmp > 9) {
            result = (tmp - 10) + result;
            tmp = 1;
        }
        else {
            result = tmp + result;
            tmp = 0;
        }
        i++;
    }

    while (i <= N1) {
        tmp = +num1[N1 - i] + tmp;
        if (tmp > 9) {
            result = (tmp - 10) + result;
            tmp = 1;
        }
        else {
            result = tmp + result;
            tmp = 0;
        }
        i++
    }

    return tmp ? tmp + result : result;
};
```

​	优化：

```javascript
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = "";
    let tmp = 0;
    const zeroCode = '0'.charCodeAt();
    while (i >= 0 || j >= 0 || tmp) {
        let x = i < 0 ? 0 : num1[i].charCodeAt() - zeroCode;
        let y = j < 0 ? 0 : num2[j].charCodeAt() - zeroCode;
        result += (x + y + tmp) % 10;
        tmp = (x + y + tmp) > 9 ? 1 : 0;
        i--;
        j--;
    }
    return result.split("").reverse().join("");
}
```
