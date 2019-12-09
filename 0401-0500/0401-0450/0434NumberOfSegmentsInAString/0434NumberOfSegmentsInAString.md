# 434. Number of Segments in a String

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any **non-printable** characters.

**Example:**

```
Input: "Hello, my name is John"
Output: 5
```

##### 2019.12.09

#### 	我的思路：

##### 方法1：

​	\s+代表正则里面一个或多个空格

```javascript
var countSegments = function(s) {
    return s.split(/\s+/).filter(e => e).length;
};
```

##### 方法2：

```javascript
var countSegments = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " " && (i === 0 || s[i - 1] === " ")) {
            res++;
        }
    }
    return res;
}
```
