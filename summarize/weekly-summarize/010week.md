# 130. Surrounded Regions

Given a 2D board containing `'X'` and `'O'` (**the letter O**), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example:**

```
X X X X
X O O X
X X O X
X O X X
```

After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X
```

**Explanation:**

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

##### 2019.08.19

##### 我的方法：

##### 		失败！

​		我想的是递归判断每个点是否被围了，但是现实告诉我超出栈数量限制了

```javascript
var solve = function(board) {
    const HEIGHT = board.length - 1;
    const WIDTH = board.length - 1;

    function direction(i, j, dir) {

        if (i < 0 || i > HEIGHT || j < 0 || j > WIDTH) {
            return false;
        }

        if (board[i][j] === "X") {
            return true;
        }

        switch (dir) {
            case "left" : 
                return direction(i, j - 1, "left") && direction(i - 1, j, "top") && direction(i + 1, j, "down")
            case "right" :
                return direction(i, j + 1, "right") && direction(i - 1, j, "top") && direction(i + 1, j, "down")
            case "top" :
                return direction(i - 1, j, "top") && direction(i, j - 1, "left") && direction(i, j + 1, "right")
            case "down" :
                return direction(i + 1, j, "down") && direction(i, j - 1, "left") && direction(i, j + 1, "right")
        }
    }

    function isSorrounded(i, j) {
        return board[i][j] === "O" && direction(i, j, "top") 
            && direction(i, j, "down") && direction(i, j, "left")  && direction(i, j, "right");
    }

    for (let i = 1; i < HEIGHT ; i++) {
        for (let j = 1; j < WIDTH; j++) {
            if (isSorrounded(i, j)) {
                board[i][j] = "X";
            }
        }
    }

    return board;
};
```

##### 别人的写法：

​		dfs，主要是思路比我好，先找到边界以及边界中为"O"的点，把这些点标记起来，然后把再一次便利把为"O"的点全部改为"X"。最后一次遍历把标记的点改为"O"

```javascript
var solve = function(board) {
    const HEIGHT = board.length;
    if (HEIGHT <= 1) {
        return;
    }

    const WIDTH = board[0].length;
    if (WIDTH <= 1) {
        return;
    }

    function check(i, j) {
        if (board[i][j] === "O") {
            board[i][j] = "1";
            if (i > 1) {
                check(i - 1, j);
            }
            if (j > 1) {
                check(i, j - 1);
            }
            if (i < HEIGHT - 1) {
                check(i + 1, j);
            }
            if (j < WIDTH - 1) {
                check(i, j + 1);
            }
        }
    }

    for (let i = 0; i < HEIGHT; i++) {
        check(i, 0);
        check(i, WIDTH - 1);
    }

    for (j = 1; j < WIDTH - 1; j++) {
        check(0, j);
        check(HEIGHT - 1, j);
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === "1") {
                board[i][j] = "O";
            }
        }
    }

    return;
}
```

# 133. Clone Graph

Given a reference of a node in a **connected** undirected graph, return a [**deep copy**](https://en.wikipedia.org/wiki/Object_copying#Deep_copy) (clone) of the graph. Each node in the graph contains a val (`int`) and a list (`List[Node]`) of its neighbors.

 

**Example:**

![img](https://assets.leetcode.com/uploads/2019/02/19/113_sample.png)

```
Input:
{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.
```

**Note:**

1. The number of nodes will be between 1 and 100.

2. The undirected graph is a [simple graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Simple_graph), which means no repeated edges and no self-loops in the graph.

3. Since the graph is undirected, if node *p* has node *q* as neighbor, then node *q* must have node *p* as neighbor too.

4. You must return the **copy of the given node** as a reference to the cloned graph.

   

##### 2019.08.21

##### 我的方法：

​		bfs

```javascript
var cloneGraph = function(node) {
    let queue = [node];
    let resNode = new Node(node.val, []);
    let copyQueue = [resNode];
    let map = new Map();
    map.set(node, resNode);
    while (queue.length) {
        let tmp = queue.shift();
        let tmpCopy = copyQueue.shift();
        let tmpNeighbors = tmp.neighbors;
        for (let e of tmpNeighbors) {
            if (map.has(e)) {
                tmpCopy.neighbors.push(map.get(e));
            }
            else {
                let newNode = new Node(e.val, []);
                tmpCopy.neighbors.push(newNode);
                map.set(e, newNode);
                queue.push(e);
                copyQueue.push(newNode);
            }
        }
    }

    return resNode;
};
```

##### 别人的方法：

​		dfs

```javascript
var cloneGraph = function(node) {
    let map = new Map();

    function dfsClone(node) {
        if (!node) {
            return null;
        }

        if (map.has(node)) {
            return map.get(node);
        }
        else {
            let cloneNode = new Node(node.val, []);
            map.set(node, cloneNode);
            for (let i = 0, len = node.neighbors.length; i < len; i++) {
                cloneNode.neighbors.push(dfsClone(node.neighbors[i]));
            }
            return cloneNode;
        }
    }

    return dfsClone(node);
}
```

# 134. Gas Station

There are *N* gas stations along a circular route, where the amount of gas at station *i* is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from station *i* to its next station (*i*+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

**Note:**

- If there exists a solution, it is guaranteed to be unique.
- Both input arrays are non-empty and have the same length.
- Each element in the input arrays is a non-negative integer.

**Example 1:**

```
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```

**Example 2:**

```
Input: 
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```

##### 2019.08.22

##### 我的方法：

​		暴力循环

```javascript
var canCompleteCircuit = function(gas, cost) {
    const N = gas.length;
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            let realIndex = (i + j) % N;
            sum += gas[realIndex] - cost[realIndex];
            if (sum < 0) {
                break;
            }
        }
        if (sum < 0) {
            continue;
        }
        return i;
    }
    return -1;
};

```

##### 别人的方法：

​		O(n)的方法，如果sumGas > sumCost说明必定会有一种路线能成功走完，从头便利，能保证tank一直非负的就是起点。

```javascript
var canCompleteCircuit = function(gas, cost) {
    let sumGas = 0;
    let sumCost = 0;
    let start = 0;
    let tank = 0;
    for (let i = 0; i < gas.length; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    if (sumGas < sumCost) {
        return -1;
    }
    else {
        return start;
    }
}
```

