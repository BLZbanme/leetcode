# 139. Word Break

Given a **non-empty** string *s* and a dictionary *wordDict* containing a list of **non-empty** words, determine if *s* can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**

```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```

##### 2019.08.12

##### 我的方法：

​		dfs，在如下测试用例中，很遗憾超时了

```javascript
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
 ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
```

```javascript
var wordBreak = function(s, wordDict) {
    if (!s) {
        return true;
    }

    for (let word of wordDict) {
        let index = s.startsWith(word);
        if (index) {
            if (wordBreak(s.substring(word.length), wordDict)) {
                return true;
            }
        }
    }

    return false;
};
```

##### 别人的方法：

##### 		方法1：

​		dp，dp数组记录到i位置位置能否被拆分。

​		（没想到用dp，我属实菜逼）

```javascript
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    const N = s.length;
    let dp = new Array(N + 1);
    dp[0] = true;
    for (let i = 1; i <= N; i++) {
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = dp[j] && set.has(s.substring(j, i));
            if (dp[i]) {
                break;
            }
        }
    }
    return dp[N];
}
```

##### 		方法2：

​		BFS，这也是个很杰出的方法，队列中存的都是能被划分的位置。与我的dfs相比，在那种极端情况下，bfs明显能够很快运行完毕。

```javascript
var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach(e => {
        b = (b ^ e) & ~a;
        a = (a ^ e) & ~b;
    })
    return b;
}
```

# 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

 

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow up:**

Can you solve it using *O(1)* (i.e. constant) memory?

##### 2019.08.13

##### 我的方法：

​		用一个set存放遍历过的节点，若新遍历的节点已经存在于set中，就说明有环

```javascript
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};
```

##### 别人的方法：

##### 方法1：

​		用两个指针，差速便利，如果有环的话，两个指针终究会碰到

```javascript
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    let walker = head;
    let runner = head;
    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
        if (walker === runner) {
            return true;
        }
    }
    return false;
}
```

# 142. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

**Note:** Do not modify the linked list.

 

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow-up**:
Can you solve it without using extra space?

##### 2019.08.13

##### 我的方法：

​		用一个set存放遍历过的节点，若新遍历的节点已经存在于set中，就说明这个节点是环的起始

```javascript
var detectCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
};

```

##### 别人的方法：

​		用两个指针，差速便利，如果有环的话，两个指针终究会碰到。

​		判断出有环后，假设从头结点到环的起点长度为x1，从环的起点到最后相遇的节点长度是x2，从最后相遇的节点跑回环的起点距离是x3。

​		可以得到```2 * (x1 + x2 ) === x1 + x2 + x3 + x2```

​		所以x1 = x3，所以把步进慢的指针置为头节点，和步进快的节点同速为1遍历，最后相遇就是环的头节点。

```javascript
var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let fast = head;
    let slow = head;
    let isCycle = false;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            isCycle = true;
            break;
        }
    }
    if (!isCycle) {
        return null;
    }
    slow = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
```

# 143. Reorder List

Given a singly linked list *L*: *L*0→*L*1→…→*L**n*-1→*L*n,
reorder it to: *L*0→*L**n*→*L*1→*L**n*-1→*L*2→*L**n*-2→…

You may **not** modify the values in the list's nodes, only nodes itself may be changed.

**Example 1:**

```
Given 1->2->3->4, reorder it to 1->4->2->3.
```

**Example 2:**

```
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
```

##### 2019.08.17

##### 我的方法：

​		用数组把list中的项全部存起来，奇蠢无比

```javascript
var reorderList = function(head) {
    if (!head) {
        return;
    }
    let len = 0;
    let nodeArray = [];
    let cur = head;
    while (cur) {
        nodeArray[len++] = cur;
        cur = cur.next;
    }
    for (let i = 0, end = Math.floor(len / 2); i < end; i++) {
        nodeArray[i].next = nodeArray[len - 1 - i];
        nodeArray[len - 1 - i].next = nodeArray[i + 1]; 
    }
    nodeArray[Math.floor(len / 2)].next = null;
    return;
};
```

##### 别人的方法：

##### 方法1：

##### 		新套路：也不完全算新套路了，list中常见利用两个指针，一个步进，一个步进两下，利用差异来进行一些操作。这里利用两个指针，一个每次走一个项，一个每次走两个项，来找到中心节点！

​		具体思路是：

1. 找到中心节点，把中心节点的next置空
2. 把后半段利用头插法逆序
3. 然后把前半段和逆序后的后半段合并起来！

```javascript
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let p1 = head;
    let p2 = head;
    while (p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    let preCur = p1.next;
    p1.next = null;
    p2 = null;
    while (preCur) {
        let tmp = preCur.next;
        preCur.next = p2;
        p2 = preCur;
        preCur = tmp;
    }

    p1 = head;
    while (p1 && p2) {
        let tmpPre = p1.next;
        p1.next = p2;
        let tmpAft = p2.next;
        p2.next = tmpPre;
        p1 = tmpPre;
        p2 = tmpAft;
    }
    return;
}
```

##### 方法2：

​		利用栈

```javascript
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let stack = [];
    let cur = head;
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    let mid = Math.floor((stack.length - 1) / 2);
    cur = head;
    while (mid--) {
        let top = stack.pop();
        let tmp = cur.next;
        cur.next = top;
        top.next = tmp;
        cur = tmp;
    }
    stack.pop().next = null;
    return;
}
```

