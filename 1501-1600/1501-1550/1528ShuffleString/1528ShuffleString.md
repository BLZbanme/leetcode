# 1528. Shuffle String

Given a string `s` and an integer array `indices` of the **same length**.

The string `s` will be shuffled such that the character at the `ith` position moves to `indices[i]` in the shuffled string.

Return *the shuffled string*.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/07/09/q1.jpg)

**Example 2:**

```
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
```

**Example 3:**

```
Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"
```

**Example 4:**

```
Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
Output: "arigatou"
```

**Example 5:**

```
Input: s = "art", indices = [1,0,2]
Output: "rat"
```

 

**Constraints:**

- `s.length == indices.length == n`
- `1 <= n <= 100`
- `s` contains only lower-case English letters.
- `0 <= indices[i] < n`
- All values of `indices` are unique (i.e. `indices` is a permutation of the integers from `0` to `n - 1`).

#### 2020.08.13

#### 	我的思路：

```javascript
var restoreString = function(s, indices) {
    if (!s) {
        return '';
    }

    let arr = s.split('');
    for (let i = 0; i < s.length; i++) {
        let j = i;
        while (indices[j] !== j) {
            [arr[j], arr[indices[j]]] = [arr[indices[j]], arr[j]];
            let tmp = indices[j];
            [indices[tmp], indices[j]] = [indices[j], indices[tmp]];
            j = indices[j];
        }
    }
    return arr.join('');
};
```

