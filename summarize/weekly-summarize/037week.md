# 337. House Robber III

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

**Example 1:**

```
Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
```

**Example 2:**

```
Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
```

#### 2020.08.05

#### 	我的思路：

​		dfs

1. 首先map中存的是每个结点的邻接链表，由于要按字典序，所以用的优先队列（js中没有现成的优先队列，我又懒得自己写，所以每插入一次排次序）
2. 然后dfs搜索每个结点（我的dfs和标准的深度优先遍历图有点区别，主要是因为我现在对图的算法不熟，所以强行写的），我判断的是出口方法是result数组中的长度等于tickets的长度加1，这样表示遍历了所有节点。又由于我为了标识已经遍历的节点，所以我用map2记录了每个节点的遍历数，极度麻烦！

```javascript
var rob = function(root) {
    
    if (!root) {
        return 0;
    }

    let sum1 = 0;
    if (root.left) {
        sum1 = rob(root.left.left) + rob(root.left.right);
    }

    let sum2 = 0;
    if (root.right) {
        sum2 = rob(root.right.left) + rob(root.right.right);
    }

    return Math.max(root.val + sum1 + sum2, rob(root.left) + rob(root.right));
};
```

##### 别人的写法：

动态规划

```javascript
var rob = function(root) {
    const f = new Map();
    const g = new Map();
    const dfs = node => {
        if (!node) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
        g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) +  Math.max(f.get(node.right) || 0, g.get(node.right) || 0))
    }
    dfs(root);
    return Math.max(f.get(root) || 0, g.get(root) || 0);
}
```

```javascript
var rob = function(root) {
    
    const dfs = node => {
        if (!node) {
            return [0, 0];
        }

        const left = dfs(node.left);
        const right = dfs(node.right);
        const selected = node.val + left[1] + right[1];
        const notSelected = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [selected, notSelected];
    }

    const rootStatus = dfs(root);
    return Math.max(...rootStatus);
};
```

# 336. Palindrome Pairs

Given a list of **unique** words, find all pairs of **distinct** indices `(i, j)` in the given list, so that the concatenation of the two words, i.e. `words[i] + words[j]` is a palindrome.

**Example 1:**

```
Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
```

**Example 2:**

```
Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
```

#### 2020.08.06

#### 我的思路：

​		暴力

```javascript
var palindromePairs = function(words) {
    const N = words.length;
    const result = [];

    const dfs = (index) => {
        if (index === N) {
            return;
        }
        let now = words[index];
        for (let i = index + 1; i < N; i++) {
            if (isPalindrome(now + words[i])) {
                result.push([index, i]);
            }
            if (isPalindrome(words[i] + now)) {
                result.push([i, index]);
            }
        }
        dfs(index + 1);
    }

    dfs(0);

    return result;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
```

#### 别人的写法：

​		每次分割字符串，看看能不能找到对称轴！

复杂度O(nL<sup>2</sup>)

```javascript
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}

var palindromePairs = function(words) {
    const reversedMap = new Map();
    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split('').reverse().join('');
        reversedMap.set(reversed, i);
    }

    const res = [];

    for (let i = 0; i < words.length; i++) {
        const curWord = words[i];
        if (isPalindrome(curWord) && reversedMap.has('') && curWord !== '') {
            res.push([reversedMap.get(''), i]);
          }
      
        for (let j = 0; j < curWord.length; j++) {
            const left = curWord.substring(0, j);
            const right = curWord.substring(j);
            if (isPalindrome(left) && reversedMap.has(right) && reversedMap.get(right) !== i) {
                res.push([reversedMap.get(right), i]);
            }

            if (isPalindrome(right) && reversedMap.has(left) && reversedMap.get(left) !== i) {
                res.push([i, reversedMap.get(left)]);
            }
        }
    }

    return res;
}
```