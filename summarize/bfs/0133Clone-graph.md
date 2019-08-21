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

````javascript
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
````

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

