# 19. Remove Nth Node From End of List

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Follow up:** Could you do this in one pass?

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 1
Output: [1]
```

 

**Constraints:**

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

##### 2019.05.21

##### 	我的思路：

​	方法1：

​	遍历整个链表一次，经过的每个节点按顺序放入一个数组中，然后把数组中倒数第n个节点从链中断开

​	时间复杂度O(L),空间复杂度O(L),L为链表长度

```javascript
var removeNthFromEnd = function(head, n) {
    let tmp = head;
    let arr =[];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    let length = arr.length;
    if(length - n > 0){
        arr[length - n - 1].next = arr[length - n].next;
    }else{
        head = arr[0].next;
    }
    return head;
};
```

​	方法2

​	学习的新套路：由于方法1，需要考虑最后要断链的是不是头节点，所以可以在头结点前增加一个虚拟节点，就不用分情况讨论了，最后直接返回虚拟节点的下一个节点。

```javascript
var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let tmp = virNode;
    let arr =[];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    let length = arr.length;
    arr[length - n - 1].next = arr[length - n].next;
    return virNode.next;
};
```

​	方法3

​	减少空间复杂度，先一次遍历链表，计算链表长度length。再一次遍历时，直接把length - n的节点断链了。时间复杂度O(L)（但是由于是O(2L - n) 比方法1慢多了），空间复杂度O(1)。

```javascript
var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let tmp = virNode;
    let length = 0;
    while(tmp != null){
        length++;
        tmp = tmp.next;
    }
    let pre = length - n - 1;
    tmp = virNode;
    while(pre > 0){
        tmp = tmp.next;
        pre--;
    }
    tmp.next = tmp.next.next;
    return virNode.next;
}
```

方法4（最佳）

​	设置两个指针，第一个指针遍历到第n个节点时，第二个指针指向头节点，然后两个节点同步遍历，当第一个指针指向尾结点时，把第二个指针指向的节点的下一个节点断链。时间复杂度O(L)，空间复杂度O(1)。

```javascript
var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let fir = virNode;
    while(n > 0){
        fir = fir.next
        n--;
    }
    let sec = virNode;
    while(fir.next != null){
        fir = fir.next;
        sec = sec.next;
    }
    sec.next = sec.next.next;
    return virNode.next;
}
```

#### 2020.10.18

##### redo

```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let quickNode = head;
    for (let i = 0; i < n; i++) {
        quickNode = quickNode && quickNode.next;
    }
    let fakeHead: ListNode | null = new ListNode();
    fakeHead.next = head;
    let cur: ListNode | null = fakeHead;

    while (quickNode) {
        cur = cur && cur.next;
        quickNode = quickNode.next;
    }
    if (cur && cur.next) {
        cur.next = cur.next.next;
    }
    return fakeHead.next;
};
```

