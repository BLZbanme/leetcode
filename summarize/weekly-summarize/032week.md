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

