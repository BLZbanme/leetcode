# 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

**Example 1:**

```
Input: 1->2
Output: false
```

**Example 2:**

```
Input: 1->2->2->1
Output: true
```

**Follow up:**
Could you do it in O(n) time and O(1) space?

##### 2019.09.24

##### 	我的思路：

##### 写法1：

1. 设置两个指针，差速遍历，找到中间结点
2. 把后半段头插法逆序
3. 对比前后两段，判断是不是回文的

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }

    //利用差速遍历找到中间的结点
    let one = head;
    let two = head;
    while (two.next && two.next.next) {
        one = one.next;
        two = two.next.next;
    }
    let midHead = one.next;

    //头插法逆序后半段
    let fakerHead = new ListNode(0);
    fakerHead.next = null;
    while (midHead) {
        let tmp = midHead.next;
        midHead.next = fakerHead.next;
        fakerHead.next = midHead;
        midHead = tmp;
    }
    midHead = fakerHead.next;

    //拿逆序后的后半段和前半段相比较
    while (midHead) {
        if (midHead.val !== head.val) {
            return false;
        }
        midHead = midHead.next;
        head = head.next;
    }
    return true;
};
```

##### 写法2：

​	与1相同，只是在找中间结点的时候直接把前半段逆置了

```javascript
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    //利用差速遍历找到中间的结点
    let fakerHead = new ListNode(0);
    let one = head;
    let two = head;
    while (two && two.next) {
        two = two.next.next;
        let tmp = one.next;
        one.next = fakerHead.next;
        fakerHead.next = one;
        one = tmp;
    }
    
    //根据two是否为空判断结点总数是奇还是偶
    let midHead = two ? one.next : one;
    let newHead = fakerHead.next;
    
    //拿逆序后的后半段和前半段相比较
    while (midHead && newHead) {
        if (midHead.val !== newHead.val) {
            return false;
        }
        midHead = midHead.next;
        newHead = newHead.next;
    }
    return true;
};
```

