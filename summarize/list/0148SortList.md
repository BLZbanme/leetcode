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
