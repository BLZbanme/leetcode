# [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]


限制：

2 <= nums.length <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

##### 2020.07.06

#### 	我的思路：

没写出来。。。

#### 别人的思路：

如果是一个数组内只有一个数只出现了1次的，用异或可以很容易找出来。

因此我们可以用异或，得到两个只出现一次的数的异或值。然后找到这个异或值第一个为1的位。

然后以这一位将数组划分成两种。一种与a异或，一种与b异或

```javascript
var singleNumbers = function(nums) {
    let tmp = 0;
    nums.forEach(e => {
        tmp ^= e;
    })

    let bit = 1;
    while (!(tmp & bit)) {
        bit <<= 1;
    }

    let a = 0;
    let b = 0;

    nums.forEach(e => {
        if (e & bit) {
            a ^= e;
        }
        else {
            b ^= e;
        }
    })

    return [a, b];

};
```

# [剑指 Offer 57 - II. 和为s的连续正数序列](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

限制：

1 <= target <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

##### 2020.07.07

##### 我的思路：

没做出来

#### 别人的思路：

滑动窗口

```javascript
var findContinuousSequence = function(target) {

    const result = [];
    let lo = 1;
    let hi = 2;
    const arr = [lo, hi];
    let sum = lo + hi;
    let middle = target >> 1;
    while (lo <= middle) {
        
        if (sum <= target) {
            if (sum === target) {
                result.push(Array.from(arr));
            }
            hi++;
            sum += hi;
            arr.push(hi);
        }
        else {
            sum -= lo;
            lo++;
            arr.shift();
        }
    }

    return result;
};
```

