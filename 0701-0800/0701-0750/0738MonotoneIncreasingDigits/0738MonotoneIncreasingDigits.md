# 738. Monotone Increasing Digits

Given a non-negative integer `N`, find the largest number that is less than or equal to `N` with monotone increasing digits.

(Recall that an integer has *monotone increasing digits* if and only if each pair of adjacent digits `x` and `y` satisfy `x <= y`.)



**Example 1:**

```
Input: N = 10
Output: 9
```



**Example 2:**

```
Input: N = 1234
Output: 1234
```



**Example 3:**

```
Input: N = 332
Output: 299
```



**Note:** `N` is an integer in the range `[0, 10^9]`.



#### 2020.12.15

#### 	我的思路：

1. 用一个numMap记录某个数字出现的第一个位置
2. 当碰到arr[i] > arr[i + 1]时，直接通过numMap找到连续相同的值出现的第一个位置，这个位置的值-1，然后之后的值全部置为9

```typescript
function monotoneIncreasingDigits(N: number): number {
    const arr = N.toString().split('').map(e => +e);
    const numMap = Array(10).fill(-1);
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        numMap[arr[i]] == -1 && (numMap[arr[i]] = i)
        if (arr[i] > arr[i + 1]) {
            let j = numMap[arr[i]]
            arr[j]--;
            while (j + 1 < n) {
                arr[j + 1] = 9;
                j++;
            }
            break;
        }
    }
    return +arr.join('')
};
```

