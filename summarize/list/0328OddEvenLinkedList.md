# 328. Odd Even Linked List

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

**Example 1:**

```
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
```

**Example 2:**

```
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
```

**Note:**

- The relative order inside both the even and odd groups should remain as it was in the input.
- The first node is considered odd, the second node even and so on ...

##### 2019.10.19

##### 	我的思路：

​		丑陋的

```javascript
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }

    let oddHead = new ListNode(0);
    let evenHead = new ListNode(0);
    let oddCur = oddHead;
    let evenCur = evenHead;
    let p = head;
    let q = head.next;
    while (p && q) {
        oddCur.next = p;
        oddCur = p;
        p = q.next;
        
        evenCur.next = q;
        evenCur = q;
        if (q.next) {
            q = q.next.next;
        }
    }
    if (p) {
        oddCur.next = p;
        oddCur = p;
        evenCur.next = null;
    }
    oddCur.next = evenHead.next;
    return oddHead.next;
};

```

##### 别人的写法：

好看的

```javascript
var oddEvenList = function(head) {
    if (head) {
        let odd = head;
        let even = head.next;
        let evenHead = even;
        while (even && even.next) {
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
}
```