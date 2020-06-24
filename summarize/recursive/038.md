# [剑指 Offer 38. 字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

 输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]


限制：

1 <= s 的长度 <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

##### 2020.06.24

#### 我的方法

##### 经典回朔！

```javascript
var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = new Set();

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.add(str);
            return;
        }

        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i]) {
                continue;
            }
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return Array.from(result);
};
```

改进，如何去重的方式，在每一个dfs中增加set判断

```javascript
var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = [];

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.push(str);
            return;
        }

        const set = new Set();
        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i] || set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i])
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return result;
};
```

#### 别人的写法：

##### 经典交换字符（值得学！）

```javascript
var permutation = function(s) {
    const result = [];
    let strArr = s.split("");

    dfs(0);
    
    function dfs(index) {

        if (index === s.length - 1) {
            result.push(strArr.join(""));
            return;
        }

        const set = new Set();

        for (let i = index; i < s.length; i++) {
            if (set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i]);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
            dfs(index + 1);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
        }
    }

    return result;
};
```
