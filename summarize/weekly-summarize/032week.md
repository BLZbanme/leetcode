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

# [剑指 Offer 59 - II. 队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



#### 2020.07.08

##### 我的思路：

要实现进队和出队O(1)，想到用带头指针和尾指针的链表来实现队列。设置一个假的头节点head，head.next为真实的队列，设置尾结点tail，初始化时tail=head。

值得注意的是push_back时，如果队列为空，即（this.head.next === null)，需要重新绑定下头结点的指向。这个操作其实应该是在pop_front进行，如果pop_front后队列为空，应该重新让tail指向head。

用个max队列来维护一个单调队列记录最大值，当一个value入队时，max中比该value小的值不影响整个对列的最大值了，所以使用max.filter(e => e >= value)过滤一遍。每次调用max_value时，如果max队列中有值，返回max[0]即是最大值。当pop_front时，如果value===max[0]，则max也出对一次。

```javascript
var MaxQueue = function() {
    this.head = new ListNode();
    this.tail = this.head;
    this.max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (!this.max.length) {
        return -1;
    }
    return this.max[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    let newNode = new ListNode(value);
    if (!this.head.next) {
        this.head.next = newNode;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.max = this.max.filter(e => e >= value);
    this.max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (!this.head.next) {
        return -1;
    }

    let value = this.head.next.val;
    if (value === this.max[0]) {
        this.max.shift();
    }
    this.head.next = this.head.next.next;
    return value;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

# [面试题 17.13. 恢复空格](https://leetcode-cn.com/problems/re-space-lcci/)

哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

注意：本题相对原题稍作改动，只需返回未识别的字符数

 

示例：

输入：
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
输出： 7
解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
提示：

0 <= len(sentence) <= 1000
dictionary中总字符数不超过 150000。
你可以认为dictionary和sentence中只包含小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/re-space-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



##### 2020.07.09

##### 别人的思路，前缀树+dp

```javascript
var respace = function(dictionary, sentence) {
    const N = sentence.length;

    let root = new Trie();

    for (let word of dictionary) {
        root.insert(word);
    }

    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i - 1] + 1;
        let cur = root;
        for (let j = i; j >= 1; j--) {
            let t = sentence[j - 1].charCodeAt() - 'a'.charCodeAt();
            if (!cur.next[t]) {
                break;
            }
            else if (cur.next[t].isEnd) {
                dp[i] = Math.min(dp[i], dp[j - 1]);
            }

            if (dp[i] == 0) {
                break;
            }

            cur = cur.next[t];
        }
    }

    return dp[N];
}

class Trie {

    constructor() {
        this.next = [];
        this.isEnd = false;
    }

    insert(s) {
        let cur = this;
        for (let i = s.length - 1; i >= 0; i--) {
            let t = s[i].charCodeAt() - 'a'.charCodeAt();
            if (!cur.next[t]) {
                cur.next[t] = new Trie();
            }

            cur = cur.next[t];
        }

        cur.isEnd = true;
    }
}
```

# [剑指 Offer 51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5

限制：

0 <= 数组长度 <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



##### 2020.07.10

##### 我的思路：

没做出来

##### 别人的思路：

经典分治！归并查找！

```javascript
var reversePairs = function(nums) {
    const N = nums.length;
    if (N < 2) {
        return 0;
    }

    const copy = Array.from(nums);
    const temp = Array(N);

    return reversePairsHelper(copy, 0, N - 1, temp);
}

function reversePairsHelper(nums, left, right, temp) {
    if (left === right) {
        return 0;
    }

    let mid = left + ((right - left) >> 1);
    const leftPairs = reversePairsHelper(nums, left, mid, temp);
    const rightPairs = reversePairsHelper(nums, mid + 1, right, temp);
    if (nums[mid] <= nums[mid + 1]) {
        return leftPairs + rightPairs;
    }

    let crossPairs = mergeAndCount(nums, left, mid, right, temp);
    return leftPairs + rightPairs + crossPairs;
}

function mergeAndCount(nums, left, mid, right, temp) {
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    
    let i = left;
    let j = mid + 1;
    let count = 0;
    for (let k = left; k <= right; k++) {
        if (i == mid + 1) {
            nums[k] = temp[j++];
        }
        else if (j == right + 1) {
            nums[k] = temp[i++];
        }
        else if (temp[i] <= temp[j]) {
            nums[k] = temp[i++];
        }
        else {
            nums[k] = temp[j++];
            count += (mid - i + 1);
        }
    }

    return count;
}
```

# [剑指 Offer 43. 1～n整数中1出现的次数](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/)

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

 

示例 1：

输入：n = 12
输出：5
示例 2：

输入：n = 13
输出：6

限制：

1 <= n < 2^31
注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



##### 2020.07.10

##### 我的方法

没做出来

##### 别人的方法：

计算每一位的1的次数！。

```javascript
var countDigitOne = function(n) {
    let digit = 1;
    let res = 0;
    let high = Math.floor(n / 10);
    let cur = n % 10;
    let low = 0;

    while (high || cur) {
        if (!cur) {
            res += high * digit;
        }
        else if (cur === 1) {
            res += high * digit + low +1;
        }
        else {
            res += (high + 1) * digit;
        }

        low += cur * digit;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }

    return res;
}
```

# [剑指 Offer 65. 不用加减乘除做加法](https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/)

写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

 

示例:

输入: a = 1, b = 1
输出: 2

提示：

a, b 均可能是负数或 0
结果不会溢出 32 位整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 2020.07.10

#### 我的方法：

没做出来

#### 别人的方法：

位运算：异或操作得到二进制的加法后的无进位结果，与操作左移一位后得到进位的结果。之后今天迭代，知道第二个操作数为0时，说明无进位了，操作完成。

```javascript
var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        result = Math.max(prices[i] - min, result);
    }
    return result;
};
```

# 315. Count of Smaller Numbers After Self

You are given an integer array *nums* and you have to return a new *counts* array. The *counts* array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.

**Example:**

```
Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```



##### 2020.07.11

##### 我的思路：

​	无敌归并排序

```javascript
var countSmaller = function(nums) {
    const N = nums.length;
    if (!N) {
        return []
    }

    const newArr = Array(N);
    for (let i = 0; i < N; i++) {
        newArr[i] = {
            value: nums[i],
            index: i
        }
    }

    const count = Array(N).fill(0);
    const copy = Array(N);

    mergeSort(newArr, 0, N - 1, copy, count);

    return count;
};

function mergeSort(nums, lo, hi, tmp, count) {
    if (lo === hi) {
        return;
    }

    let mid = lo + ((hi - lo) >> 1);

    mergeSort(nums, lo, mid, tmp, count);
    mergeSort(nums, mid + 1, hi, tmp, count);

    merge(nums, lo, mid, hi, tmp, count);
}

function merge(nums, lo, mid, hi, tmp, count) {
    for (let i = lo; i <= hi; i++) {
        tmp[i] = nums[i]; 
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            nums[k] = tmp[j++];
        }
        else if (j > hi) {
            nums[k] = tmp[i++];
        }
        else if (tmp[i].value <= tmp[j].value) {
            nums[k] = tmp[i++];
        }
        else {
            for (let m = i; m <= mid; m++) {
                count[tmp[m].index]++;
            }
            nums[k] = tmp[j++];
        }
    }   
}
```

# 174. Dungeon Game

The demons had captured the princess (**P**) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (**K**) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (*negative* integers) upon entering these rooms; other rooms are either empty (*0's*) or contain magic orbs that increase the knight's health (*positive* integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

 

**Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.**

For example, given the dungeon below, the initial health of the knight must be at least **7** if he follows the optimal path `RIGHT-> RIGHT -> DOWN -> DOWN`.

| -2 (K) | -3   | 3      |
| ------ | ---- | ------ |
| -5     | -10  | 1      |
| 10     | 30   | -5 (P) |

 

**Note:**

- The knight's health has no upper bound.
- Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

##### 2020.07.12

##### 我的思路：

​	正序dp失败（虽然我提交了前就知道了肯定有问题），正序dp的问题就是你不知道判断条件中路径和，和之前的最小的初始值的优先级怎么判断。

```javascript
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;

    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1);
    }

    for (let i = 2; i <= M; i++) {
        dp[i][0] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    for (let i = 2; i <= N; i++) {
        dp[0][i] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    dp[0][1] = dp[1][0] = {
        val: 0,
        min: 0
    }

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            let min1 = dp[i - 1][j].min;
            if (dp[i - 1][j].val + dungeon[i - 1][j - 1] < 0) {
                min1 = Math.min(min1, dp[i - 1][j].val + dungeon[i - 1][j - 1])
            }
            let min2 = dp[i][j - 1].min;
            if (dp[i][j - 1].val + dungeon[i - 1][j - 1] < 0) {
                min2 = Math.min(min2, dp[i][j - 1].val + dungeon[i - 1][j - 1]);
            }

            dp[i][j] = {};
            if (min1 > min2) {
                dp[i][j].min = min1;
                dp[i][j].val = dp[i - 1][j].val + dungeon[i - 1][j - 1];
            }
            else {
                dp[i][j].min = min2;
                dp[i][j].val = dp[i][j - 1].val + dungeon[i - 1][j - 1];
            }
        }
    }

    return dp[M][N].min < 0 ? (1 - dp[M][N].min) : 1;
};
```

##### 别人的方法：

反序dp，从终点开始判断，就不需要路径和了

```javascript
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(Infinity);
    }
    dp[M][N - 1] = dp[M - 1][N] = 1;
    for (let i = M - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            let min = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(min - dungeon[i][j], 1);
        }
    }

    return dp[0][0];
}
```

