# 338. Counting Bits

Given a non negative integer number **num**. For every numbers **i** in the range **0 ≤ i ≤ num** calculate the number of 1's in their binary representation and return them as an array.

**Example 1:**

```
Input: 2
Output: [0,1,1]
```

**Example 2:**

```
Input: 5
Output: [0,1,1,2,1,2]
```

**Follow up:**

- It is very easy to come up with a solution with run time **O(n\*sizeof(integer))**. But can you do it in linear time **O(n)** /possibly in a single pass?
- Space complexity should be **O(n)**.
- Can you do it like a boss? Do it without using any builtin function like **__builtin_popcount** in c++ or in any other language.

##### 2019.11.11

##### 	我的思路：

​	知道多半是用dp做，但是没想出状态转移方程

##### 别人的写法：

​	dp，观察最低有效位，观察x和x' = x / 2的关系:可以发现x和x‘只有一位不同，可以得到状态转移方程

​																*P*(*x*)=*P*(*x* / 2)+(*x* mod 2)

```javascript
var countBits = function(num) {
    let result = new Array(num + 1);
    result[0] = 0;
    for (let i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
```

# 191. Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

 

**Example 1:**

```
Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

**Example 2:**

```
Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

**Example 3:**

```
Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

 

**Note:**

- Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two's_complement). Therefore, in **Example 3** above the input represents the signed integer `-3`.

 

**Follow up**:

If this function is called many times, how would you optimize it?

##### 2019.11.12

##### 我的思路：

当时理解错了输入，没写出来

##### 别人的方法：

##### 方法1：

​	判断从最低位开始有多少位1

```javascript
var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        ones = ones + (n & 1);
        n >>>= 1;
    }
    return ones;
};
```

##### 方法2：

```n  &= n - 1```可以把n的最低为1位置为0，直到n==0，置了多少次，就是有多少个1

```javascript
var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        n &= n - 1;
        ones++;
    }
    return ones;
}
```

# 190. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

**Example 1:**

```
Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

**Example 2:**

```
Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

**Note:**

- Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two's_complement). Therefore, in **Example 2** above the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

**Follow up**:

If this function is called many times, how would you optimize it?

##### 2019.11.13

##### 我的思路：

​		转成二进制字符串，然后逆置字符串，0分。

```javascript
var reverseBits = function(n) {
    let str = n.toString(2);
    let len = str.length;
    while (len < 32) {
        str = "0" + str;
        len++;
    }
    let arr = str.split("");
    let i = 0, j = 31;
    while (i < j) {
        [arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
    return parseInt(arr.join(""), 2);
};
```

##### 别人的方法：

​		位运算，把n的最低位加到result中，然后result左移，n右移。

值得学习的有两点：

1. 判断最低位为0还是1，直接与1相交
2. ```>>>```为无符号右移，js中```>>>0```可以直接把当前值转成无符号数

```javascript
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result += n & 1;
        n >>>= 1;
    }
    return result >>> 0;
}
```

# 210. Course Schedule II

There are a total of *n* courses you have to take, labeled from `0` to `n-1`.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: `[0,1]`

Given the total number of courses and a list of prerequisite **pairs**, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

**Example 1:**

```
Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
```

**Example 2:**

```
Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
```

**Note:**

1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices. Read more about [how a graph is represented](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs).
2. You may assume that there are no duplicate edges in the input prerequisites.

##### 2019.11.18

##### 我的思路：

​		一开始没理解题意，我以为是约束条件里面的数组里面给的是所有可能的前序条件，写错了

```javascript
var findOrder = function(numCourses, prerequisites) {
    if (!prerequisites.length) {
        let result = [];
        while (numCourses--) {
            result.push(numCourses);
        }
        return result;
    }
    let arr = new Array(numCourses);
    for (let i = 0; i <= numCourses; i++) {
        arr[i] = new Set();
    }

    let high = 0;
    for (let i = 0, len = prerequisites.length; i < len; i++) {
        let pre = prerequisites[i][1];
        let aft = prerequisites[i][0];
        let tmp = high;
        let pos = -Infinity;
        while (tmp >= 0) {
            if (arr[tmp].has(aft)) {
                pos = tmp;
            }
            if (arr[tmp].has(pre)) {
                arr[Math.max(pos, tmp + 1)].add(aft);
                high = Math.max(high, tmp + 1);
                while (--tmp >= 0) {
                    if (arr[tmp].has(aft)) {
                        return [];
                    }
                }
            }
            else if (!tmp) {
                arr[0].add(pre);
                arr[Math.max(pos, 1)].add(aft);
                high = Math.max(high, 1);
            }
            tmp--;
        }
    }

    let result = [];
    for (let i = 0; i < numCourses; i++) {
        Array.from(arr[i]).forEach(e => {
            result.push(e);
        });
    }
    return result;
};
```

##### 别人的方法：

​	这是个典型的拓扑排序题

##### 方法1：

​		dfs，参考leetcode的[参考答案](https://leetcode-cn.com/problems/course-schedule-ii/solution/ke-cheng-biao-ii-by-leetcode/)

​	算法：

1. 初始化栈 S，它将存储图中课程的拓扑排序。
2. 使用输入中提供的边构建邻接表。注意输入中如 [a, b] 的边代表课程 b是课程 a的先修课程。这代表边 b ➔ a。在实现算法时，请记住这一点。
3. 对于图中的每个结点，都运行一次深度优先搜索，以防该结点没有在其他结点的深度优先搜索中被访问到过。
4. 假设我们正在执行结点 N的深度优先搜索。我们将递归地遍历结点 N 所有未被处理过的邻接结点。
5. 处理完了所有邻接结点后，将结点N入栈。我们利用栈来模拟所需要的顺序。当结点 N入栈时，所有以N 为先修的课程结点均已经入栈。
6. 在所有的结点被处理过后，从栈顶到栈底顺序依次返回结点元素。

​	时间复杂度O(n)	空间复杂度O(n)

```javascript
var findOrder = function(numCourses, prerequisites) {
    const WHITE = 1;
    const GRAY = 2;
    const BLACK = 3;

    let isPossible = true;
    const color = new Map();
    const adjList = new Map();
    let result = []; 
    for (let i = 0; i < numCourses; i++) {
        color.set(i, WHITE);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let dest = prerequisites[i][0];
        let src = prerequisites[i][1];
        let tmp = adjList.get(src) || [];
        tmp.push(dest);
        adjList.set(src, tmp);
    }

    function dfs(node) {
        if (!isPossible) {
            return;
        }
        color.set(node, GRAY);
        let list = adjList.get(node) || [];
        for (let neighbor of list) {
            let nowColor = color.get(neighbor);
            if (nowColor === WHITE) {
                dfs(neighbor);
            }
            else if (nowColor === GRAY) {
                isPossible = false;
            }
        }
        color.set(node, BLACK);
        result.unshift(node);
    }

    for (let i = 0; i < numCourses; i++) {
        if (color.get(i) === WHITE) {
            dfs(i);
        }
    }

    return isPossible ? result : [];
}
```

##### 方法2：

bfs遍历

算法

1. 初始化一个队列 Q来记录图中0入度的所有结点。
2. 遍历输入中的所有边，创建邻接表并存储每个结点的入度。
3. 将所有入度为0的边加入 Q.
4. 执行以下操作直到 Q为空。
   从 Q中弹出一个元素。不妨称为 N。
   对 N的所有邻接节点, 将其入度减去1。若任意结点的入度变为0，将其加入Q。
   将节点N加入到存储拓扑排序的列表中。

```javascript
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map();
    const indegree = new Array(numCourses).fill(0);
    const result = [];
    for (let i = 0, len = prerequisites.length; i < len; i++) {
        let dest = prerequisites[i][0];
        let src = prerequisites[i][1];
        const list = adjList.get(src) || [];
        list.push(dest);
        adjList.set(src, list);
        indegree[dest]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (!indegree[i]) {
            queue.push(i);
        }
    }

    while (queue.length) {
        let node = queue.shift();
        result.push(node);
        if (adjList.has(node)) {
            for (let tmp of adjList.get(node)) {
                indegree[tmp]--;
                if (!indegree[tmp]) {
                    queue.push(tmp);
                }
            }
        }
    }
    
    return result.length === numCourses ? result : [];
}
```

