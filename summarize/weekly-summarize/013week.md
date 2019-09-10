# 204. Count Primes

Count the number of prime numbers less than a non-negative number, **n**.

**Example:**

```
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

##### 2019.09.10

##### 我的思路：

​		蠢蠢的遍历

```javascript
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }
    let count = 1;
    for (let i = 3; i < n; i++) {
        let sqrt = Math.floor(Math.sqrt(i));
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (j > sqrt) {
            count++;
        }
    }
    return count;
};
```

##### 别人的方法：

​	把遍历到的数的倍数全部标记为非质数

```javascript
var countPrimes = function(n) {
    let notPrime = new Array(n).fill(false);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return count;
}
```