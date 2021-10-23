Given a string `S` that **only** contains "I" (increase) or "D" (decrease), let `N = S.length`.

Return **any** permutation `A` of `[0, 1, ..., N]` such that for all `i = 0, ..., N-1`:

- If `S[i] == "I"`, then `A[i] < A[i+1]`
- If `S[i] == "D"`, then `A[i] > A[i+1]`

**Example 1:**

```
Input: "IDID"
Output: [0,4,1,3,2]
```

**Example 2:**

```
Input: "III"
Output: [0,1,2,3]
```

**Example 3:**

```
Input: "DDI"
Output: [3,2,0,1]
```

**Note:**

1. `1 <= S.length <= 10000`
2. `S` only contains characters `"I"` or `"D"`.

##### 2019.06.11

##### 	我的思路：

​	写法1：

​	设置最小值为0，最大值为N。每碰到一次I就拿出当前最小的值放进数字，如果碰到'D'就拿出当前最大值放进数组。与此同时把相应值--。

​	时间复杂度O(n)

​	ps:写完这么优美的代码结果只打败了20%的js写法。。于是有了写法2.

```javascript
var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = [];
    for(let i = 0; i <= N; i++){
        res.push(S[i] == "I" ? min++ : max--);
    }
    return res;
};
```

​	写法2：

​	难道是由于i=N的时候多判断了一次s[i]==I?(因为这个时候应该可以直接插入的)，那就改！很遗憾，还是20%。继续写法3

```javascript
var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = [];
    for(let i = 0; i < N; i++){
        res.push(S[i] == "I" ? min++ : max--);
    }
    res.push(min);
    return res;
};
```

写法3：

​	把res设置为固定大小应该可以减少动态分配内存的开销。结果提升了5%

```javascript
var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = new Array(N + 1);
    for(let i = 0; i < N; i++){
        res[i] = S[i] == "I" ? min++ : max--;
    }
    res[N] = min;
    return res;
};
```

##### 	于是，我点开solution，看看高手们都是怎么写的！结果发现跟我写的一样啊！(中间还试了下不用ES6的s[i]用s.charAt(i),没啥作用)。心灰意冷下重新提交了一遍写法3，结果99.78%。坑爹呢leetcode



#### 2021.10.24

#### redo

没做出来，没想到两年之后人直接傻逼了

```python
class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        N = len(s)
        min, max = 0, N
        result = []
        for c in s:
            if c == 'D':
                result.append(max)
                max -= 1
            else:
                result.append(min)
                min += 1
        result.append(min)
        return result
```

