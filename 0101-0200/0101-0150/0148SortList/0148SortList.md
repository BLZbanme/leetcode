# 147. Insertion Sort List

Sort a linked list in *O*(*n* log *n*) time using constant space complexity.

**Example 1:**

```
Input: 4->2->1->3
Output: 1->2->3->4
```

**Example 2:**

```
Input: -1->5->3->4->0
Output: -1->0->3->4->5
```

##### 2019.08.27

##### 我的方法：

​		*O*(*n* log *n*)满足要求的只要快排，归并和堆排序，由于快排和堆排序在链表中的不是很好操作。所以我第一反应就是用归并排序。而自底向上的归并排序我感觉边界条件不是很好写，所以我选择写的自顶向下的递归版，效果还不错。

##### 		注：思路基本跟高亮答案一样，可喜可贺，使用了之前刷题学到的用两个指针，其中一个每次遍历两步长，来找到中间结点。然后我把中间结点的next置为null，这样递归的时候边界容易判断是否遍历到终点了

````javascript
var sortList = function(head) {
    let result = up2downMergeSort(head);
    return result;
};

function up2downMergeSort(head) {
    if (!head || !head.next) {
        return head;
    }
    let cur = head;
    let twoPace = head;
    while (twoPace.next && twoPace.next.next) {
        cur = cur.next;
        twoPace = twoPace.next.next;
    }
    twoPace = cur.next;
    cur.next = null;
    head = up2downMergeSort(head);
    twoPace = up2downMergeSort(twoPace);
    return merge(head, twoPace);
}

function merge(head1, head2) {
    let fakerHead = new ListNode(-Infinity);
    let cur = fakerHead;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            cur.next = head1;
            head1 = head1.next;
        }
        else {
            cur.next = head2;
            head2 = head2.next;
        }
        cur = cur.next;
    }

    if (head1) {
        cur.next = head1;
    }

    if (head2) {
        cur.next = head2;
    }

    return fakerHead.next;
}
````

#### 2020.10.21

##### redo

```typescript
const mergeOrderList = (L1: ListNode | null, L2: ListNode | null) => {
    let fakeHead = new ListNode();
    let cur: ListNode | null = fakeHead;
    while (L1 || L2) {
        let now1 = Infinity;
        let now2 = Infinity;
        L1 && (now1 = L1.val);
        L2 && (now2 = L2.val);
        if (now1 < now2) {
            cur!.next = L1;
            L1 = L1!.next;
        }
        else {
            cur!.next = L2;
            L2 = L2!.next;
        }
        cur = cur!.next;
    }
    return fakeHead.next;
}

const findMid = (list: ListNode | null) => {
    let slow: ListNode | null = list;
    let fast = list;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }
    let res = slow!.next;
    slow!.next = null;
    return res;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let mid = findMid(head);
    let left = sortList(head);
    let right = sortList(mid);
    return mergeOrderList(left, right);
};
```

