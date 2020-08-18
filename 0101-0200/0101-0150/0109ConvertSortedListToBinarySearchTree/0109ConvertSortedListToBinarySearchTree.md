# 109. Convert Sorted List to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example:**

```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```

#### 2020.08.18

#### 	我的思路：

用数组存list，然后根据下标找。。。

时间O(n)，空间O(n)

```javascript
var sortedListToBST = function(head) {
    let arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    return partition(arr, 0, arr.length - 1);
};

function partition(arr, lo, hi) {
    if (lo > hi) {
        return null;
    }
    let mid = lo + ((hi - lo) >> 1)
    let newNode = new TreeNode(arr[mid]);
    newNode.left = partition(arr, lo, mid - 1);
    newNode.right = partition(arr, mid + 1, hi);
    return newNode;
}
```

#### 别人的思路：

用中序遍历的思路

时间O(n)，空间O(logn)

```javascript
var sortedListToBST = head => {
    if (!head) return null;
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = head;

    const buildBST = (start, end) => {
        if (start > end) return null;
        const mid = start + ((end - start) >> 1);
        const left = buildBST(start, mid - 1);
        const root = new TreeNode(cur.val);
        cur = cur.next;
        root.left = left;
        root.right = buildBST(mid + 1, end);
        return root;
    }

    return buildBST(0, len - 1);
}
```

