# 61. Rotate List

Given a linked list, rotate the list to the right by *k* places, where *k* is non-negative.

**Example 1:**

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```

**Example 2:**

```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```

##### 2019.07.03

##### 	我的思路：

##### 		方法1：

​	先遍历一遍，计算长度。然后再遍历一次找到k所在的位置，并标记他的前一项，然后改变链表。

​	时间复杂度O(n),实际是O(2n)=O(n),空间复杂度O(1).

```javascript
var rotateRight = function(head, k) {
    if(k == 0 || !head){
        return head;
    }
    let p = head, pre = null, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
    }
    k %= len;
    if(k == 0){
        return head;
    }
    let index = len - k + 1, res;
    p = head, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
        if(len == index){
            res = pre;
        }
    }
    p.next = head;
    head = res.next;
    res.next = null;
    return head;
};
```

##### 	方法2:

​	遍历一遍计算长度，顺便把链表项存在一个数组里面，然后直接操作k对应的项。

​	时间复杂度O(n),空间复杂度O(n).

```javascript
var rotateRight = function(head, k){
    if(k == 0 || !head){
        return head;
    }
    let nodeArr = [];
    let p = head, i = 0;
    while(!!p){
        nodeArr[i++] = p;
        p = p.next;
    }
    k %= i;
    if(k == 0){
        return head;
    }
    let index = i - k;
    nodeArr[i - 1].next = head;
    head = nodeArr[index];
    nodeArr[index - 1].next = null;
    return head;
}
```

##### 	方法3：

​	这是方法1的优化，第一次遍历完之后把链表的尾结点指向头结点成环。

​	然后，找到k对应项的前一项，进行处理。

​	优点是第二次遍历不用遍历完了，因为第一次成环时，把尾结点直接处理了。还有一处优化的部分是没设置前一项的指针（因为本来就没必要）

​	时间复杂度O(n),实际是O(n + k % n)=O(n),空间复杂度O(1).

```javascript
var rotateRight = function(head, k) {
    if(!head || k == 0){
        return head;
    }
    let p = head;
    let len = 1;
    while(!!p.next){
        p = p.next;
        len++;
    }
    p.next = head;
    k %= len;
    if(k != 0){
        for(let i = len - k; i > 0; i--){
            p = p.next;
        }
    }
    head = p.next;
    p.next = null;
    return head;
}
```
