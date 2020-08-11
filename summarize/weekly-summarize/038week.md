# 696. Count Binary Substrings

Give a string `s`, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

**Example 1:**

```
Input: "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
```



**Example 2:**

```
Input: "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
```



**Note:**

`s.length` will be between 1 and 50,000.

`s` will only consist of "0" or "1" characters.

#### 2020.08.10

#### 	我的思路：

暴力，时间复杂度(O(n<sup>2</sup>))

```javascript
var countBinarySubstrings = function(s) {
    let count = 0;
    const N = s.length;

    let i = 0;
    while (i < N) {
        let tmp = s[i];
        let j = 0;
        while (i + j < N && s[i + j] == tmp) {
            j++;
        }
        if (i + 2 * j > N) {
            i++;
            continue;
        }

        let k = 0;
        while (k < j && s[i + j + k] != tmp) {
            k++;
        }
        count += k;
        i += j;
    }

    return count;
};
```

#### 别人的思路

用一个list记录连续出现的字符串长度，然后两两比较，取相邻值的较小值。时间复杂度(O(n))

```javascript
var countBinarySubstrings = function(s) {
    let arr = [];
    const N = s.length;
    let i = 0;

    while (i < N) {
        let tmp = s[i];
        let j = 1;
        while (i + j < N && s[i + j] == tmp) {
            j++;
        }
        arr.push(j);
        i += j;
    }

    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        count += Math.min(arr[i], arr[i + 1]);
    }
    return count;
}
```

