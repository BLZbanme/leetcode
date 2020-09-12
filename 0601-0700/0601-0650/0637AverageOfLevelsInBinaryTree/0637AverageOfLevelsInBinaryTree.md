# 637. Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

**Example 1:**

```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
```



**Note:**

1. The range of node's value is in the range of 32-bit signed integer.

#### 2020.09.12

##### 	我的思路：

```javascript
function averageOfLevels(root: TreeNode | null): number[] {
    const result: Array<number> = [];
    if (!root) {
        return result;
    }
    
    const queue = [root];
    while (queue.length) {
        let nowLen = queue.length;
        let now = 0;
        for (let i = 0; i < nowLen; i++) {
            let cur = queue.shift();
            if (cur) {
                now += cur.val;
                if (cur.left) {
                    queue.push(cur.left);
                }
                if (cur.right) {
                    queue.push(cur.right);
                }
            }
        }
        result.push(now / nowLen);
    }
    return result;
};
```
