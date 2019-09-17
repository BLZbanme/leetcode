Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

![img](https://assets.leetcode.com/uploads/2018/12/28/237_example.png)

 

**Example 1:**

```
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

**Example 2:**

```
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

**Note:**

- The linked list will have at least two elements.
- All of the nodes' values will be unique.
- The given node will not be the tail and it will always be a valid node of the linked list.
- Do not return anything from your function.

##### 2019.06.04

##### 	我的思路：

​	这题一开始以为题目出错了，怎么只给一个节点就能去点这个结点，不应该知道前结点的吗。。。

后来想明白直接把这个结点的值赋值成它后一个结点。（我觉得这题还是有可取之处的）

​	时间复杂度O(1)

```javascript
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```

