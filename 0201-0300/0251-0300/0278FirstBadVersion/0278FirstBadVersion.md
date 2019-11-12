# 278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which will return whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Example:**

```
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
```

##### 2019.10.10

##### 	我的思路：

​		二分查找，这里看别人的解释学到了不要用```let mid = Math.floor((lo + hi) / 2);```，存在溢出的风险。应当使用```let mid = Math.floor((lo + (hi - lo) / 2));```

```javascript
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 0;
        let hi = n;
        while (lo <= hi) {
            // let mid = Math.floor((lo + hi) / 2);
            let mid = Math.floor((lo + (hi - lo) / 2));
            if (!isBadVersion(mid)) {
                if (isBadVersion(mid + 1)) {
                    return mid + 1;
                }
                else {
                    lo = mid + 1;
                }
            }
            else {
                hi = mid - 1;
            }
        }
    };
};
```

##### 别人的方法：

​	别人的二分查找牛逼一点

```javascript
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 1;
        let hi = n;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (!isBadVersion(mid)) {
                lo = mid + 1;
            }
            else {
                hi = mid;
            }
        }
        return lo;
    };
};
```

