# 147. Insertion Sort List

Sort a linked list using insertion sort.



![img](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)
A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 



**Algorithm of Insertion Sort:**

1. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
3. It repeats until no input elements remain.


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

##### 2019.08.24

##### 我的方法：

​		我没有把排好序的链再单独拿出来，直接在原来的链上排序的。所以中间多了判断（左边已排好序的终点）和断链的操作。

````javascript
var insertionSortList = function(head) {
    let fakerHead = new ListNode(-Infinity);
    fakerHead.next = head;
    let cur = head;
    let curPre = fakerHead;
    while (cur) {
        let pre = fakerHead;
        let start = fakerHead.next;
        while (start != cur) {
            if (start.val < cur.val) {
                pre = start;
                start = start.next;
            }
            else {
                curPre.next = cur.next;
                pre.next = cur;
                cur.next = start;
                break;
            }
        }
        if (start === cur) {
            curPre = cur;
        }
        cur = curPre.next;
    }
    return fakerHead.next;
};
````

##### 别人的方法：

​		他直接把每次要排序的拿出来了，我以为题目要求是不可以这样，所以没这样做。

````javascript
var insertionSortList = function(head) {
    if (!head) {
        return head;
    }
    let fakerHead = new ListNode(0);
    let cur = head;
    let pre = fakerHead;
    let next = null;
    while (cur) {
        next = cur.next;
        while (pre.next && pre.next.val < cur.val) {
            pre = pre.next;
        }
        cur.next = pre.next;
        pre.next = cur;
        pre = fakerHead;
        cur = next;
    }
    return fakerHead.next;
}
````

