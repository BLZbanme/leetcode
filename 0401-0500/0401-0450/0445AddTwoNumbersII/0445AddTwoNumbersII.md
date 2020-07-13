# 445. Add Two Numbers II

You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Follow up:**
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

**Example:**

```
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
```

#### 2020.07.14

#### 	我的思路：

想用逆序链表做，但是不让

#### 别人的思路：

用栈来实现逆序

```javascript
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    let cur1 = l1;
    let cur2 = l2;
    
    while (cur1) {
        stack1.push(cur1);
        cur1 = cur1.next;
    }

    while (cur2) {
        stack2.push(cur2);
        cur2 = cur2.next;
    }

    let fakeHead = new ListNode();

    let carry = 0;
    while (stack1.length || stack2.length) {
        let a = stack1.length ? stack1.pop().val : 0;
        let b = stack2.length ? stack2.pop().val : 0;
        let sum = a + b + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        let node = new ListNode(sum);
        node.next = fakeHead.next;
        fakeHead.next = node;
    }

    if (carry) {
        let node = new ListNode(carry);
        node.next = fakeHead.next;
        fakeHead.next = node;
    }

    return fakeHead.next;
};
```
