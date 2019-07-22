# 94. Binary Tree Inorder Traversal

Given *n*, how many structurally unique **BST's** (binary search trees) that store values 1 ... *n*?

**Example:**

```
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

##### 2019.07.22

##### 我的思路：

​		看到这题感觉多半是dp的问题，但是我自己没有推导出关系来，直到看到别人这个解释

```
/*    
Hope it will help you to understand :
    
    n = 0;     null   
    
    count[0] = 1
    
    
    n = 1;      1       
    
    count[1] = 1 
    
    
    n = 2;    1__       			 __2     
    		      \					/                 
    		     count[1]	   	count[1]	
    
    count[2] = 1 + 1 = 2
    
    
    
    n = 3;    1__				      __2__	                   __3
    		      \		            /       \			      /		
    		  count[2]		  count[1]    count[1]		count[2]
    
    count[3] = 2 + 1 + 2  = 5
    
    
    
    n = 4;    1__  					__2__					   ___3___                  
    		      \				 /        \					  /		  \			
    		  count[3]		 count[1]    count[2]		  count[2]   count[1]
    
                 __4				
               /
           count[3]   
    
    count[4] = 5 + 2 + 2 + 5 = 14     
    

And  so on...
*/
```

```javascript
var numTrees = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
```

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

##### 2019.07.22

##### 我的思路：

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

###### 优化下：

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