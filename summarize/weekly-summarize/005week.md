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

