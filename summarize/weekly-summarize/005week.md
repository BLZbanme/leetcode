# 81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

**Example 1:**

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Follow up:**

- This is a follow up problem to [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/), where `nums`may contain duplicates.
- Would this affect the run-time complexity? How and why?

##### 2019.07.15

##### 我的思路：

​		先用二分查找找到最小值，然后以最小值的坐标为偏移量再进行二分查找。

​		与**33.Search in Rotated Sorted Array**类似，但是稍微复杂一些，因为33说了没有重复元素，这样导致我们需要预处理，不然如[2,2,2,0,2,2]这种情况就找不到0。

​		时间复杂度平均O(logn)，最坏O(n)。

```javascript
var search = function (nums, target) {
    let len = nums.length;
    let lo = 0;
    let hi = len - 1;

    while (lo < hi && nums[lo] === nums[hi]) {
        lo++;
    }

    while (lo < hi) {
        let mid = parseInt((lo + hi) / 2);
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }

    let offset = lo;
    lo = 0, hi = len - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let realMid = (mid + offset) % len;
        if (nums[realMid] == target) {
            return true;
        }
        else if (nums[realMid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
};
```

# 82. Remove Duplicates from Sorted List II

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only *distinct*numbers from the original list.

**Example 1:**

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**

```
Input: 1->1->1->2->3
Output: 2->3
```

##### 2019.07.15

##### 我的思路：

​		遇到重复的元素就一直找到他后面不重复的，并把这些重复的一次性断链。

```javascript
var deleteDuplicates = function (head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let tmp = head;
    while (tmp) {
        if (tmp.next && tmp.val === tmp.next.val) {
            tmp = tmp.next;
            while (tmp.next && tmp.val === tmp.next.val) {
                tmp = tmp.next;
            }
            tmp = tmp.next
            
            if (!tmp) {
                pre.next = tmp;
            }
        }
        else {
            pre.next = tmp;
            pre = tmp;
            tmp = tmp.next;
        }
    }
    return tmpHead.next;
};
```

##### 别人的写法：

​		同样的思路，别人写的比我优美多了

```javascript
var deleteDuplicates = function (head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let cur = head;
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        
        if (pre.next === cur) {
            pre = pre.next;
        }
        else {
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return tmpHead.next;
};
```

# 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

##### 2019.07.16

##### 我的思路：

​		遇到重复的数值就一直找到不重复为止。

```javascript
var deleteDuplicates = function (head) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    let tmp = head;
    while (tmp) {
        while (tmp.next && tmp.next.val === tmp.val) {
            tmp = tmp.next;
        }
        
        pre.next = tmp;
        pre = tmp;
        tmp = tmp.next;
    }
    return fakeHead.next;
};
```

# 86. Partition List

Given a linked list and a value *x*, partition it such that all nodes less than *x* come before nodes greater than or equal to *x*.

You should preserve the original relative order of the nodes in each of the two partitions.

**Example:**

```
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
```

##### 2019.07.16

##### 我的思路：

##### 		方法1：

​		增加两个专门用来记录前一项的变量。preTmp记录当前遍历到的那一项的前一项，preAll记录插到前面去的最后一项，这样发现新的小于x的值，直接从preTmp后面断链，然后插到preAll前面。

​		值得注意的时候，当preAll == preTmp，需要判断，不然会产生bug。

```javascript
var partition = function (head, x) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let tmp = head;
    let preTmp = fakeHead;
    let preAll = fakeHead;
    while (tmp) {
        if (tmp.val < x) {
            if (preAll != preTmp) {
                preTmp.next = tmp.next;
                tmp.next = preAll.next;
                preAll.next = tmp;
                preAll = tmp;
                tmp = preTmp.next;
            }
            else {
                preAll = tmp;
                preTmp = tmp;
                tmp = tmp.next;
            }
        }
        else {
            preTmp = tmp;
            tmp = tmp.next;
        }
    }
    return fakeHead.next;
};
```

##### 		方法2：

​		用两个链表，一个存小于x的结点，一个存不小于x的结点，然后把它们连起来

```javascript
var partition = function (head, x) {
    let head1 = new ListNode(0);
    let head2 = new ListNode(0);
    let p1 = head1;
    let p2 = head2;
    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = head;
        }
        else {
            p2.next = head;
            p2 = head;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = head2.next;
    return head1.next;
};
```

# 88. Merge Sorted Array

Given two sorted integer arrays *nums1* and *nums2*, merge *nums2* into *nums1* as one sorted array.

**Note:**

- The number of elements initialized in *nums1* and *nums2* are *m* and *n*respectively.
- You may assume that *nums1* has enough space (size that is greater or equal to *m* + *n*) to hold additional elements from *nums2*.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

##### 2019.07.17

##### 我的思路：

​		算法第四版中，原地合并一个数组用的这种方式。

```javascript
var merge = function (nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    let tmp = [...nums1];
    for (let i = 0, len = nums1.length; i < len; i++) {
        if (index1 >= m) {
            nums1[i] = nums2[index2++];
        }
        else if (index2 >= n) {
            nums1[i] = tmp[index1++];
        }
        else if (tmp[index1] < nums2[index2]) {
            nums1[i] = tmp[index1++];
        }
        else {
            nums1[i] = nums2[index2++];
        };
    };
    return nums1;
}
```

##### 别人的方法：

​		从后面合并起。如果j >= 0说明nums1的排完了，继续插nums2的。若j < 0，说明i不一定插完了，但是i前面本来就是有序的，不用继续插了

```javascript
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]; 
        }
        else {
            nums1[k--] = nums2[j--];
        };
    };
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    };
    return nums1;
}
```

# 90. Subsets II

Given a collection of integers that might contain duplicates, **nums**, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

##### 2019.07.17

##### 我的思路：

​		dfs，增加一个判断i == index，这样不会把连续重复的漏了

```javascript
var subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    addResult(res, [], 0, nums);
    return res;
};

function addResult(res, arr, index, nums) {
    let tmp = [...arr];
    res.push(tmp);
    for (let i = index, len = nums.length; i < len; i++) {
        if (i == index || nums[i] !== nums[i - 1]) {
            arr.push(nums[i]);
            addResult(res, arr, i + 1, nums);
            arr.pop();
        };
    };
}
```

##### 别人的方法：

​		排序之后，计算每个重复值的个数，然后直接在之前result中的每个元素后面怼1-k个重复值。

```javascript
var subsetsWithDup = function (nums) {
    let res = [];
    let empty = [];
    res.push(empty);
    nums.sort((a, b) => a - b);
    for (let i = 0, len = nums.length; i < len; i++) {
        let duplicateCount = 1;
        while (((i + 1) < len) && nums[i + 1] === nums[i]) {
            duplicateCount++;
            i++;
        };
        
        for (let j = 0, preNum = res.length; j < preNum; j++) {
            let ele = [...res[j]];
            for (let k = 0; k < duplicateCount; k++) {
                ele.push(nums[i]);
                res.push([...ele]);
            }; 
        };
    };
    return res;
}
```

# 91. Decode Ways

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**

```
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

##### 2019.07.18

##### 我的思路：

​		dp，单单纯纯的一个动态规划的题，但是我一开始写的判断过程很复杂。值得注意的是dp的临时数组声明的下标是对应字符串下一位的，方便初始化dpArr[0]，dpArr[1]。

```javascript
var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1);
    dpArr[0] = dpArr[1] = +s[0] > 0 ? 1 : 0;
    for (let i = 2; i <= N; i++) {
        if (s[i - 1] === '0' 
            && (s[i - 2] === '0' || +s[i - 2] > 2)
        ) {
            return 0;
        }
        else if (+s.slice(i - 2, i) <= 26) {
            if (s[i - 1] === '0' || s[i - 2] === '0') {
                dpArr[i] = dpArr[i - 2];
            }
            else {
                dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
            }
        }   
        else {
            dpArr[i] = dpArr[i - 1];
        }
    }
    return dpArr[N];
};
```

##### 优化后：

​		上面写完之后，思路更清晰了。但这样跑出来并没有上面快，可能因为上面我写了什么情况下直接返回'0'。

```javascript
var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1).fill(0);
    dpArr[0] = dpArr[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= N; i++) {
        const now = +s[i - 1];
        const pre = +s.slice(i - 2, i);
        dpArr[i] += now > 0 ? dpArr[i - 1] : 0;
        dpArr[i] += pre >= 10 && pre <= 26 ? dpArr[i - 2] : 0;
    }
    return dprr[N];
};
```

# 92. Reverse Linked List II

Reverse a linked list from position *m* to *n*. Do it in one-pass.

**Note:** 1 ≤ *m* ≤ *n* ≤ length of list.

**Example:**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

##### 2019.07.18

##### 我的思路：

###### 方法1：

​		找到第m个结点mth的前一项mthPre，然后遍历m到n的结点，遍历的时候把这个结点插到mthPre与mth之间。

```javascript
var reverseBetween = function(head, m, n) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    n--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    while (n) {
        let tmp = q.next;
        q.next = tmp.next;
        tmp.next = mthPre.next;
        mthPre.next = tmp;
        n--;
    }
    return fakeHead.next;
};
```

###### 方法2：

​		找到第m个结点mth的前一项mthPre，然后遍历m到n的结点。新建一个tmpNode,遍历的时候把m-n个结点采用头插法，插到tmpNode后面，实现倒序，然后一次性插到mthPre后面。

```javascript
var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    let tmpHead = new ListNode(0);
    while (n) {
        let tmp = q;
        q = q.next;
        tmp.next = tmpHead.next;
        tmpHead.next = tmp;
        n--;
    }
    mthNode.next = q;
    mthPre.next = tmpHead.next;
    return fakeHead.next;
};
```

# 94. Binary Tree Inorder Traversal

Given a binary tree, return the *inorder* traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

##### 2019.07.19

##### 我的思路：

###### 方法1：

​		递归

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    inorder(root, result);
    return result;
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number[]} result 
 */
function inorder(node, result) {
    if (!node) {
        return;
    }
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result);
}
```

###### 方法2：

​		我的思路是用遍历的时候用栈存遍历到哪了，但是由于我这样会在有左子树的地方疯狂循环，所以我设置了一个标志栈，来记录哪些结点的左子树是遍历过了

```javascript
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let nodeStack = [];
    let logStack = [];
    nodeStack.push(root);
    logStack.push(0);
    while (nodeStack.length) {
        let len = nodeStack.length;
        let tmp = nodeStack[len - 1];
        let logtmp = logStack[len - 1];
        if (tmp.left && logtmp === 0) {
            nodeStack.push(tmp.left);
            logStack[len - 1] = 1;
            logStack.push(0);
        }
        else {
            result.push(tmp.val);
            nodeStack.pop();
            logStack.pop();
            if (tmp.right) {
                nodeStack.push(tmp.right);
                logStack.push(0);
            }
        }
    }
    return result;
}
```

##### 别人的写法：

​		遍历一个结点就一直找到他的最左结点，这样退栈的时候就不会出现方法2中如果不加标志位，疯狂循环的情况。

```javascript
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let cur = root;
    while (cur != null || stack.length) {
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
}
```

