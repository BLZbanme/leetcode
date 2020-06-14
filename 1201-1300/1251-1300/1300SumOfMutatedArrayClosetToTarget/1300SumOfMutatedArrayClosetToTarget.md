# 1300. Sum of Mutated Array Closest to Target

Given an integer array `arr` and a target value `target`, return the integer `value` such that when we change all the integers larger than `value` in the given array to be equal to `value`, the sum of the array gets as close as possible (in absolute difference) to `target`.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from `arr`.

**Example 1:**

```
Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
```

**Example 2:**

```
Input: arr = [2,3,5], target = 10
Output: 5
```

**Example 3:**

```
Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361
```

**Constraints:**

- `1 <= arr.length <= 10^4`
- `1 <= arr[i], target <= 10^5`

##### 2020.06.14

##### 	我的思路：

1. 将数组arr按升序排序
2. 用remain存储与target值还差多少
3. 遍历arr过程中，计算```tmp = remain / N - i```，即达到目标值需要后面至少是N-i个tmp值，值得注意的是在js中/得到的是浮点数。
4. 当平均值tmp比当前值arr[i]小的时候，说明把当前下标i及后边的元素改成大于等于tmp的值时，最接近target。由于题目要求的是最小的value，所以tmp的小数点部位<=0.5时，都应该向下取整，反之向上取整。
5. 如果能够走完整个for循环，说明“target值很大”。所以原数组和就是距离target最近的值，所以直接返回arr[N - 1]，即原数组的最大值。

**注：**关于“target值很大”的解释：首先按照题目的意思按照某个value值，用value替换掉大于value的值，这个做最后肯定是把整个数组和变小了。如果原数组的和小于target，那么按照某个value替换后更小于target了。

```javascript
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    const N = arr.length;
    let remain = target;
    for (let i = 0; i < N; i++) {
        let tmp = remain / (N - i);
        if (tmp < arr[i]) {
            return (tmp - Math.floor(tmp)) <= 0.5 ? Math.floor(tmp) : Math.ceil(tmp); 
        }
        remain -= arr[i];
    }
    return arr[N - 1];
};
```

##### 别人的写法：

总体思路跟我差不多

```javascript
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    const N = arr.length;
    let i = 0;
    while (i < N && target > arr[i] * (N - i)) {
        target -= arr[i++];
    }
    if (i == N) {
        return arr[N - 1];
    }
    // let res = Math.floor(target / (N - i));
    // if (target - res * (N - i) > (res + 1) * (N - i) - target) {
    //     res++;
    // }
    return Math.round((target - 0.0001) / (N - i));
};
```

