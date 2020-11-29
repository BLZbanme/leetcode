# 767. Reorganize String

Given a string `S`, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result. If not possible, return the empty string.

**Example 1:**

```
Input: S = "aab"
Output: "aba"
```

**Example 2:**

```
Input: S = "aaab"
Output: ""
```

**Note:**

- `S` will consist of lowercase letters and have length in range `[1, 500]`.

#### 2020.11.30

#### 	我的思路：

想着用优先队列做，但是js写个优先队列太麻烦，直接不写了！

#### 别人的思路：

```javascript
function reorganizeString(S: string): string {
    const N = S.length;
    const aCode = 'a'.charCodeAt(0);
    const arr = Array(26).fill(0);
    for (let i = 0; i < N; i++) {
        arr[S.charCodeAt(i) - aCode]++;
    }
    let max = Math.max(...arr);
    if (max > ((N + 1) >> 1)) return '';
    
    const reorganizeArray = Array(N);
    let evenIndex = 0;
    let oddIndex = 1;
    const half = N >> 1;
    for (let i = 0; i < 26; i++) {
        const c = String.fromCharCode(aCode + i);
        while (arr[i] > 0 && arr[i] <= half && oddIndex < N) {
            reorganizeArray[oddIndex] = c;
            arr[i]--;
            oddIndex += 2;
        }
        while (arr[i] > 0) {
            reorganizeArray[evenIndex] = c;
            arr[i]--;
            evenIndex += 2;
        }
    }
    return reorganizeArray.join('')
};
```
