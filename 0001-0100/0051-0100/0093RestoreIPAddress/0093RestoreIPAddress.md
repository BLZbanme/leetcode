# 93. Restore IP Addresses

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

**Example:**

```
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
```

#### 2019.07.21

#### 	我的思路：

​		疯狂循环

```javascript
var restoreIpAddresses = function(s) {
    let result = [];
    const LENGTH = s.length;
    for (let i = 1; i < 4 && i < LENGTH - 2; i++) {
        for (let j = i + 1; j < i + 4 && j < LENGTH - 1; j++) {
            for (let k = j + 1; k < j + 4 && k < LENGTH; k++) {
                    let ip1 = s.slice(0, i);
                    let ip2 = s.slice(i, j);
                    let ip3 = s.slice(j, k);
                    let ip4 = s.slice(k, LENGTH);
                    if (isValid(ip4) && isValid(ip2)
                        && isValid(ip3) && isValid(ip1)
                    ) {
                        result.push([ip1, ip2, ip3, ip4].join("."));
                    }
            }
        }
    }
    return result;
};

function isValid(str) {
    if (str.length > 3 || str.length == 0 
        || (str[0] === '0' && str.length > 1) || +str > 255
    ) {
        return false;
    }
    return true;
}
```

#### 2020.08.09

#### redo

```javascript
var restoreIpAddresses = function(s) {
    const result = [];
    const N = s.length;
    const arr = [];

    const dfs = index => {
        if (arr.length === 4) {
            if (index === N) {
                result.push(arr.join('.'));
            }
            return;
        }
        for (let i = index + 1; i <= s.length; i++) {
            let tmp = parseInt(s.slice(index, i));
            if (tmp > 255 || (s[index] === '0' && index !== i - 1)) {
                break;
            }
            arr.push(tmp);
            dfs(i);
            arr.pop();
        }
    }

    dfs(0);
    return result;
};
```

