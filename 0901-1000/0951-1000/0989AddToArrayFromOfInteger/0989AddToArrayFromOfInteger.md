# 989. Add to Array-Form of Integer

For a non-negative integer `X`, the *array-form of X* is an array of its digits in left to right order.  For example, if `X = 1231`, then the array form is `[1,2,3,1]`.

Given the array-form `A` of a non-negative integer `X`, return the array-form of the integer `X+K`.

 



**Example 1:**

```
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
```

**Example 2:**

```
Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
```

**Example 3:**

```
Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
```

**Example 4:**

```
Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
```

 

**Note：**

1. `1 <= A.length <= 10000`
2. `0 <= A[i] <= 9`
3. `0 <= K <= 10000`
4. If `A.length > 1`, then `A[0] != 0`

#### 2021.01.22

#### 	我的思路：

```javascript
function addToArrayForm1(A: number[], K: number): number[] {
    const KArr = K.toString().split('').map(e => +e);
    const N = Math.max(KArr.length, A.length);
    const result = Array(N);
    let flag = 0;
    for (let i = 0; i < N; i++) {
        let ACur = A.length - i - 1 >= 0 ? A[A.length - i - 1] : 0;
        let KCur = KArr.length - i - 1 >= 0 ? KArr[KArr.length - i - 1] : 0;
        let tmp = ACur + KCur + flag;
        result[N - i - 1] = tmp % 10;
        flag = Math.floor(tmp / 10);
    }
    if (flag) {
        result.unshift(flag);
    }
    return result;
};
```

#### 别人的思路：

```typescript
function addToArrayForm(A: number[], K: number): number[] {
    const ALen = A.length;
    const result = [];
    let flag = K;
    for (let i = 0; i < ALen || flag > 0; i++, flag = Math.floor(flag / 10)) {
        if (i < ALen) {
            flag += A[ALen - 1 - i];
        }
        result.push(flag % 10);
    }
    result.reverse();
    return result;
};
```

