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
var search = function(nums, target) {
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
var deleteDuplicates = function(head) {
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
var deleteDuplicates = function(head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let cur = head;
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        if (pre.next == cur) {
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
var deleteDuplicates = function(head) {
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
var partition = function(head, x) {
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
var partition = function(head, x) {
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

