# 179. Largest Number

Given a list of non negative integers, arrange them such that they form the largest number.

**Example 1:**

```
Input: [10,2]
Output: "210"
```

**Example 2:**

```
Input: [3,30,34,5,9]
Output: "9534330"
```

**Note:** The result may be very large, so you need to return a string instead of an integer.

##### 2019.09.06

##### 	我的思路：

​		按照题目规定的顺序排序，然后拼起来

```javascript
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.cur = root;
    this.stack = [];
    while (this.cur) {
        this.stack.push(this.cur);
        this.cur = this.cur.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        while (this.cur) {
            this.stack.push(this.cur);
            this.cur = this.cur.left;
        }
        this.cur = this.stack.pop();
        let result = this.cur.val;
        this.cur = this.cur.right;
        return result;
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (!this.cur && !this.stack.length) {
        return false;
    }    
    return true;
};
```

##### 	别人的方法：

​		和我思路一样，写的更简洁一些

```javascript
var largestNumber = function(nums) {
    nums = nums.map(e => "" + e);
    nums.sort((a, b) => {
        const N1 = a.length;
        const N2 = b.length;
        for (var i = 0; i < N1 && i < N2; i++) {
            if (a[i] < b[i]) {
                return 1;
            }
            else if (a[i] > b[i]) {
                return -1;
            }
        }
        if (i === N1) {
            return a[i - 1] - b[i];
        }
        if (i === N2) {
            return b[i - 1] - a[i];
        }
    });
    return nums.join("");
};
```

神奇的事情发生，同样的程序在chrome上运行和leetcode上运行结果不同

![](../../../pic/0179-1.png)

![](../../../pic/0179-2.png)

最神奇的还是，我在node环境上运行，跟上诉两种结果都不同

![](../../../pic/0179-3.png)

##### 别人的方法：

##### 		思路(来源leetcode官方解释)：

首先，我们将每个整数变成字符串。然后进行排序。

如果仅按降序排序，有相同的开头数字的时候会出现问题。比方说，样例 2 按降序排序得到的数字是 95343303 ，然而交换 33 和 30 的位置可以得到正确答案 9534330 。因此，每一对数在排序的比较过程中，我们比较两种连接顺序哪一种更好。我们可以证明这样的做法是正确的：

假设（不是一般性），某一对整数 a 和 b ，我们的比较结果是 aa 应该在 bb 前面，这意味着 a⌢ b > b⌢a ，其中 ⌢ 表示连接。如果排序结果是错的，说明存在一个 c ， b 在 c 前面且 c 在 a 的前面。这产生了矛盾，因为 a⌢b > b⌢a和 b⌢c > c⌢b 意味着 a⌢c > c⌢a。换言之，我们的自定义比较方法保证了传递性，所以这样子排序是对的。

一旦数组排好了序，最“重要”的数字会在最前面。有一个需要注意的情况是如果数组只包含 0 ，我们直接返回结果 0 即可。否则，我们用排好序的数组形成一个字符串并返回。

```javascript
var largestNumber = function(nums) {
    if (!nums || !nums.length) {
        return "";
    }
    nums = nums.map(e => "" + e);
    nums.sort((a, b) => {
        return (b + a) - (a + b);
    });
    return nums[0][0] === "0" ? "0" : nums.join("");
};
```



