# 100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example 1:**

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

**Example 2:**

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

**Example 3:**

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

#### 2019.07.22

#### 	我的思路：

​		递归

```javascript
var isSameTree = function(p, q) {
    if ((!p && !q) || (p && q && p.val === q.val)) {
        if (!p && !q) {
            return true;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    else {
        return false;
    }    
};
```

###### 		优化下：

```javascript
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    };
    if (!p || !q) {
        return false;
    }
    return p.val === q.val ? isSameTree(p.left, q.left) 
        && isSameTree(p.right, q.right) : false;
};
```

#### 2020.07.13

##### redo

```javascript
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

