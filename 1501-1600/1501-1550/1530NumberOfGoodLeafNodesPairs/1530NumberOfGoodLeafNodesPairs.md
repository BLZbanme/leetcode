# 1530. Number of Good Leaf Nodes Pairs

Given the `root` of a binary tree and an integer `distance`. A pair of two different **leaf** nodes of a binary tree is said to be good if the length of **the shortest path** between them is less than or equal to `distance`.

Return *the number of good leaf node pairs* in the tree.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/07/09/e1.jpg)

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/07/09/e2.jpg)

**Example 3:**

```
Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].
```

**Example 4:**

```
Input: root = [100], distance = 1
Output: 0
```

**Example 5:**

```
Input: root = [1,1,1], distance = 2
Output: 1
```

 

**Constraints:**

- The number of nodes in the `tree` is in the range `[1, 2^10].`
- Each node's value is between `[1, 100]`.
- `1 <= distance <= 10`

#### 2020.09.02

#### 	我的思路：

```javascript
function countPairs(root: TreeNode | null, distance: number): number {

    //初始满足条件的结点对数为0
    let num = 0;
    const dfs = (node: TreeNode | null): Array<number> => {
        if (!node) {
            return [];
        }

        
        if (!node.left && !node.right) {
            //如果是叶子节点，那么它距离它最近的父结点长度为1
            return [1];
        }

        //左子树的叶子节点数组，数组每一项为那个叶子节点距离当前结点的距离
        let leftArr = dfs(node.left);
        //右子树的叶子节点数组，数组每一项为那个叶子节点距离当前结点的距离
        let rightArr = dfs(node.right);
        for (let i = 0; i < leftArr.length; i++) {
            for (let j = 0; j < rightArr.length; j++) {
                //左边的距离加右边的距离小于等于distance时，为好结点对，num++
                leftArr[i] + rightArr[j] <= distance && num++;
            }
        }
        //当前结点的后序遍历结束，左右子树合并，为上一层结点的左（或右）子树叶子节点数组，并且距离全要加1
        return [...leftArr, ...rightArr].map(e => e + 1);;
    }

    dfs(root);

    return num;
};
```

