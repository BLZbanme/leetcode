# 313. Super Ugly Number

Write a program to find the `nth` super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list `primes` of size `k`.

**Example:**

```
Input: n = 12, primes = [2,7,13,19]
Output: 32 
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
             super ugly numbers given primes = [2,7,13,19] of size 4.
```

**Note:**

- `1` is a super ugly number for any given `primes`.
- The given numbers in `primes` are in ascending order.
- 0 < `k` ≤ 100, 0 < `n` ≤ 106, 0 < `primes[i]` < 1000.
- The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

##### 2019.11.08

##### 	我的思路：

​	跟之前做的0264的思路一致，这次我自己写出来的

```javascript
var nthSuperUglyNumber = function(n, primes) {
    let N = primes.length;
    if (!N) {
        return 0;
    }
    let result = [1];
    let countArr = new Array(N).fill(0);
    for (let i = 1; i < n; i++) {
        let tmp = getNewMin(countArr);
        for (let i = 0; i < N; i++) {
            if ((primes[i] * result[countArr[i]]) === tmp) {
                countArr[i]++;
            }
        }
        result.push(tmp);
    }

    function getNewMin() {
        let min = Infinity;
        for (let i = 0; i < N; i++) {
            min = Math.min(min, primes[i] * result[countArr[i]]);
        }
        return min;
    }

    return result[n - 1];
};
```

#### 2020.09.02

redo

```typescript
function nthSuperUglyNumber(n: number, primes: number[]): number {
    const N = primes.length;
    const arr = (Array(N) as any).fill(0);
    const dp = (Array(n) as any).fill(Infinity);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < N; j++) {
            dp[i] = Math.min(dp[i], dp[arr[j]] * primes[j]);
        }
        for (let j = 0; j < N; j++) {
            if (dp[i] == dp[arr[j]] * primes[j]) {
                arr[j]++;
            }
        }
    }

    return dp[n - 1];
};
```

