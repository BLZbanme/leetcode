# 785.Is Graph Bipartite?

Given an undirected `graph`, return `true` if and only if it is bipartite.

Recall that a graph is *bipartite* if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: `graph[i]` is a list of indexes `j` for which the edge between nodes `i` and `j` exists.  Each node is an integer between `0` and `graph.length - 1`.  There are no self edges or parallel edges: `graph[i]` does not contain `i`, and it doesn't contain any element twice.

```
Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.
```

 

**Note:**

- `graph` will have length in range `[1, 100]`.
- `graph[i]` will contain integers in range `[0, graph.length - 1]`.
- `graph[i]` will not contain `i` or duplicate values.
- The graph is undirected: if any element `j` is in `graph[i]`, then `i` will be in `graph[j]`.

##### 2020.07.16

##### 	我的思路：

广度优先遍历，set记录走过的点，如果每次循环暂存一次队列，队列里面的元素都是应该是在一个集合的，如果便利这次队列时，他们的邻接表里面有队列中的值，说明不是二分图。

```javascript
var isBipartite = function(graph) {
    let set = new Set();

    const queue = [];
    
    for (let i = 0; i < graph.length; i++) {
        if (set.has(i)) {
            continue;
        }
        queue.push(i);
        set.add(i);
        while (queue.length) {
            let tmp = Array.from(queue);
            let length = queue.length;
            while (length--) {
                let now = queue.shift();
                for (let i = 0; i < graph[now].length; i++) {
                    if (tmp.includes(graph[now][i])) {
                        return false;
                    }
    
                    if (!set.has(graph[now][i])) {
                        set.add(graph[now][i]);
                        queue.push(graph[now][i])
                    }
                }
            }
        }
    }

    return true;;
};
```

# [剑指 Offer 45. 把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



#### 2020.07.17

#### 我的方法

没做出来，字符串之间的比较有点问题

```javascript
var minNumber = function(nums) {
    nums.sort(compart);
    return nums.join("");
};

var compart = (a, b) => {
    let aStr = a.toString();
    let bStr = b.toString();
    let i = 0; 
    while (i < aStr.length && i < bStr.length) {
        if (+aStr[i] < +bStr[i]) {
            return -1;
        }
        else if (+aStr[i] > +bStr[i]) {
            return +1;
        }
        i++;
    }
    if (i === aStr.length && i === bStr.length) {
        return 0;
    }

    if (i === aStr.length) {
        return  +aStr[0] - +bStr[i] <= 0 ? -1 : 1;
    }

    if (i === bStr.length) {
        return +aStr[i] - +bStr[0] <= 0 ? -1 : 1;
    }
}
```

#### 别人的方法：

x与y，谁排在前面，就看xy和yx的大小！

```javascript
var minNumber = function(nums) {
    nums.sort(compart);
    return nums.join("");
};

var compart = (a, b) => {
    let aStr = a.toString();
    let bStr = b.toString();
    let left = aStr + bStr;
    let right = bStr + aStr;
    let i = 0;
    while (i < left.length) {
        if (left[i] !== right[i]) {
            return +left[i] - +right[i];
        }
        i++;
    }
    return 0;
}
```