# 763. Partition Labels

A string `S` of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

**Example 1:**

```
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
```

 

**Note:**

- `S` will have length in range `[1, 500]`.
- `S` will consist of lowercase English letters (`'a'` to `'z'`) only.



#### 2020.10.22

##### 	我的思路：

贪心，这就是最牛逼的解法

```javascript
function partitionLabels(S: string): number[] {
    const result = []
    const arr = Array(26).fill(-1)
    const aCode = 'a'.charCodeAt(0)
    const strArr = S.split("")
    strArr.forEach((e, index) => {
        arr[e.charCodeAt(0) - aCode] = index
    })
    let i = 0
    while (i < S.length) {
        let start = i
        let tmp = arr[S.charCodeAt(i) - aCode]
        while (i < tmp) {
            if (arr[S.charCodeAt(i) - aCode] > tmp) {
                tmp = arr[S.charCodeAt(i) - aCode]
            }
            i++
        }
        i++
        result.push(i - start)
    }
    return result
}
```
