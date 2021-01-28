# 1457. Pseudo-Palindromic Paths in a Binary Tree

Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.

*Return the number of **pseudo-palindromic** paths going from the root node to leaf nodes.*

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/05/06/palindromic_paths_1.png)

```
Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2020/05/07/palindromic_paths_2.png)**

```
Input: root = [2,1,1,1,3,null,null,null,null,null,1]
Output: 1 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).
```

**Example 3:**

```
Input: root = [9]
Output: 1
```

 

**Constraints:**

- The given binary tree will have between `1` and `10^5` nodes.
- Node values are digits from `1` to `9`.

#### 2020.08.06

#### 	我的思路：

##### 非递归后序遍历

**用一个Array来模拟map操作，最后计算Array中是否最多只有一个出现次数为奇数的元素。**

~~采用非递归后序遍历的好处：遍历到每个叶子节点的路径都存储在stack栈中。~~本来是打算用非递归，然后判断stack中存储的路径是否是伪回文值的。

后来借助一个Array模拟的map来判断回文，发现使用非递归或者递归后序无影响。只是个人习惯了写非递归。

arr是用来模拟map操作的数组，arr中每一项的值代表从跟结点到当前结点的路径中，各种值出现的次数。所以每遍历到一个结点cur时，进行```arr[cur.val]++```操作。当cur结点出栈时，说明是后序遍历要往回走了，所以需要执行```arr[cur.val]--```。

路径若是一个伪回文，则这条**路径最多只出现了一个奇数次的元素**，即```arr.filter(e => e & 1).length <= 1```，此时count代表记录的伪回文路径加1：```count++```

```javascript
var pseudoPalindromicPaths  = function(root) {
    const arr = Array(10).fill(0);
    const stack = [];
    let cur = root;
    let pre = null;

    let count = 0;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            arr[cur.val]++;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                if (arr.filter(e => e & 1).length <= 1) {
                    count++;
                }
            }
            stack.pop();
            arr[cur.val]--;
            pre = cur;
            cur = null;
        }
    }   
    
    return count;
};
```

##### 递归，前序遍历

```javascript
var pseudoPalindromicPaths  = function(root) {
    const arr = Array(10).fill(0);

    let count = 0;

    const dfs = node => {
        if (!node) {
            return;
        }

        arr[node.val]++;
        if (!node.left && !node.right && arr.filter(e => e & 1).length <= 1) {
            count++;
        }

        dfs(node.left);
        dfs(node.right);
        arr[node.val]--;
    }

    dfs(root);
    
    return count;
};
```

#### 别人的思路

位运算

```javascript
var pseudoPalindromicPaths  = function(root) {
    let count = 0;

    const dfs = (node, num) => {
        if (!node) {
            return;
        }

        num ^= (1 << node.val);
        if (!node.left && !node.right) {
            if (!num || !(num & (num - 1))) {
                count++;
            }
        }
        dfs(node.left, num);
        dfs(node.right, num);
        return;
    }   
    dfs(root);
    return count;
}
```

