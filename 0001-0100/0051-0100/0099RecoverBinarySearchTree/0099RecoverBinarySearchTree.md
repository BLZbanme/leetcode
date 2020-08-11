# 99. Recover Binary Search Tree

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

**Example 1:**

```
Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
```

**Example 2:**

```
Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
```

**Follow up:**

- A solution using O(*n*) space is pretty straight forward.
- Could you devise a constant space solution?

#### 2020.08.08

### 	我的思路：

我一开始以为不能直接换值，所以没做出来

```javascript
var recoverTree = function(root) {
    const path = [];
    const map = new Map();
    const travel = (node) => {
        if (!node) {
            return;
        }

        travel(node.left);
        map.set(node.val, node);
        path.push(node.val);
        travel(node.right);
    }

    travel(root);

    const [one, two] = findTwo(path);
    let oneNode = map.get(one);
    let twoNode = map.get(two);
    [oneNode.val, twoNode.val] = [twoNode.val, oneNode.val];
    return root;
};

function findTwo(arr) {
    let x = -1;
    let y = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            y = arr[i + 1];
            if (x === -1) {
                x = arr[i];
            }
            else {
                break;
            }
        }
    }
    return [x, y];
}
```

##### 非递归中序

```javascript
var recoverTree = root => {
    const stack = [];
    let pre = null;
    let x = null;
    let y = null;
    
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        if (pre && root.val < pre.val) {
            y = root;
            if (x == null) {
                x = pre;
            }
            else {
                break;
            }
        }
        pre = root;
        root = root.right;
    }
    [x.val, y.val] = [y.val, x.val]
    return root;
}
```
