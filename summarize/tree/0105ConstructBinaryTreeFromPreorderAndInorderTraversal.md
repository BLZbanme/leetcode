# 105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

##### 2019.07.26

##### 	我的思路：

###### 		第一版：

​		疯狂划分！我的思路就是递归，找到每次递归中先序数组中的第一个元素，他就是现在的根节点，然后把查到这个根节点在中序数组中的下标i，中序下标左边的值0 ~ i - 1 就是他的左子树，右边 i + 1就是他的右子树。同理在前序数组中，从左到右0 ~ i - 1就是他的左子树的前序，剩下的就是右子树的前序。

###### 		注：我一开始写的时候发生重大失误，忘了i的左边0~i - 1的长度也是在先序数组中划分的长度，还在其中判断了从i的左边结点在前序下标的最大值，用来判断左右子树的前序划分。属实铁憨憨

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 

    let indexOfPreorder = -Infinity;
    for (let i = 0; i < indexOfInorder; i++) {
        let tmp = preorder.indexOf(inorder[i]);
        if (tmp > indexOfPreorder) {
            indexOfPreorder = tmp;
        }
    }
    
    let preorderLeft = preorder.slice(0, indexOfPreorder + 1);
    let preorderRight = preorder.slice(indexOfPreorder + 1);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};
```

###### 		第一版优化：

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 
    
    let preorderLeft = preorder.slice(0, indexOfInorder);
    let preorderRight = preorder.slice(indexOfInorder);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};
```

##### 				别人的写法：

##### 		方法1：

​		递归,跟我的思路一样，但是他划分数组并没有直接物理划分，而是用的下标值来判断，大幅度减少了开销。这样操作就像之前我dfs喜欢新建数组，现在知道在dfs前先入栈，然后dfs出来再出栈。值得学习

````javascript
var buildTree = function(preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder);
}

function helper(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }
    let root = new TreeNode(preorder[preStart]);
    let inIndex = inorder.indexOf(root.val);
    root.left = helper(preStart + 1, inStart, inIndex - 1,  preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd,  preorder, inorder);
    return root;
}
````

##### 		方法2：

​		非递归，属实牛批

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    let stack = [];
    let root = new TreeNode(preorder[0]);
    let cur = root;
    for (let i = 1, j = 0; i < preorder.length; i++) {
        if (cur.val !== inorder[j]) {
            cur.left = new TreeNode(preorder[i]);
            stack.push(cur);
            cur = cur.left;
        }
        else {
            j++;
            while (stack.length && stack[stack.length - 1].val === inorder[j]) {
                cur = stack.pop();
                j++;
            }
            cur = cur.right = new TreeNode(preorder[i]);
        }
    }
    return root;
}
```

