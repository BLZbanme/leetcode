# 138. Copy List with Random Pointer

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a [**deep copy**](https://en.wikipedia.org/wiki/Object_copying#Deep_copy) of the list.

 

**Example 1:**

**![img](https://discuss.leetcode.com/uploads/files/1470150906153-2yxeznm.png)**

```
Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
```

 

**Note:**

1. You must return the **copy of the given head** as a reference to the cloned list.

##### 2019.08.23

##### 我的方法：

##### 				丑陋的map使用方法

````javascript
var copyRandomList = function(head) {
    let map = new Map();
    let fakerHead = new Node(0);
    let cur = head;
    let fakerCur = fakerHead;
    while (cur) {
        let newNode;
        if (!map.has(cur)) {
            newNode = new Node(cur.val);
            map.set(cur, newNode);
        }
        else {
            newNode = map.get(cur);
        }
        if (cur.random) {
            if (!map.has(cur.random)) {
                let newRandomNode = new Node(cur.random.val);
                map.set(cur.random, newRandomNode);
                newNode.random = newRandomNode;
            }
            else {
                newNode.random = map.get(cur.random);
            }
        }
        fakerCur.next = newNode;
        fakerCur = fakerCur.next;
        cur = cur.next;
    }
    return fakerHead.next;
};
````

##### 别人的方法：

##### 		方法1：

​		优秀的map使用方法。（对比我的方法，他的方法遍历了两边，第一遍把所有节点都复制一份，第二遍将他们连起来。而我为了只遍历一遍，需要对遍历的每个节点判断他的random指向的元素是否存在，所以if/else比较多）

```javascript
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    let map = new Map();
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        if (cur.next) {
            map.get(cur).next = map.get(cur.next);
        }
        if (cur.random){
            map.get(cur).random = map.get(cur.random);
        }
        cur = cur.next;
    }
    return map.get(head);
}
```

##### 		方法2：

1. 遍历list，在每个节点后边添加一个他的复制节点
2. 再次遍历，将遍历节点之间的链接连起来
3. 将复制节点取出来成链，并把list恢复原状。

````javascript
var copyRandomList = function(head) {
    let iter = head;
    let next;
    while (iter) {
        next = iter.next;

        let copy = new Node(iter.val);
        iter.next = copy;
        copy.next = next;

        iter = next;
    }

    iter = head;
    while (iter) {
        if (iter.random) {
            iter.next.random = iter.random.next;
        }
        iter = iter.next.next;
    }

    iter = head;
    let fakerHead = new Node(0);
    let copy = fakerHead;
    let copyIter = fakerHead;
    while (iter) {
        next = iter.next.next;

        copy = iter.next;
        copyIter.next = copy;
        copyIter = copy;
        
        iter.next = next;
        iter = next;
    }
    return fakerHead.next;
}
````

