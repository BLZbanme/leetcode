# 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

You may **not** modify the values in the list's nodes. Only nodes itself may be changed.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

**Example 2:**

```
Input: head = []
Output: []
```

**Example 3:**

```
Input: head = [1]
Output: [1]
```

 

**Constraints:**

- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

#### 2019.05.22

##### 	我的思路：

​	 方法1：

​	从头遍历链表，塞进数组里面再操作。时间复杂度O(n)，空间复杂度O(n)。实属最垃圾的方法

```javascript
var swapPairs = function(head) {
    let tmp = head;
    let arr = [];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    if(arr.length == 0){
        return "";
    }
    if(arr.length == 1){
        return head;
    }
    for(let i = 0; i < arr.length; i += 2){
        if(i + 3 < arr.length){
            arr[i].next = arr[i + 3];
            arr[i + 1].next = arr[i];
        }else if(i <= arr.length - 2){
            arr[i].next = arr[i + 2];
            arr[i + 1].next = arr[i];
        }
    }
    return arr[1];
};
```

​	方法2：

​	改进，直接在一次遍历中进行交换。空间复杂度O(n)。

```javascript
var swapPairs = function(head) {
    let one = head;
    if(one == null){
        return "";
    }
    let two = head.next;
    if(two == null){
        return head;
    }
    head = two;
    let tmp = head;
    while(one != null && two != null){
        if(two.next != null){
            if(two.next.next != null){
                tmp = two.next;
                two.next = one;
                one.next = tmp.next;
                one = tmp;
                two = tmp.next;
            }else{
                one.next = two.next;
                two.next = one;
                break;
            }
        }else{
            two.next = one;
            one.next = null;
            break;
        }
    }
    return head;
}
```

##### 别人的写法

​	学习的新套路：

​	同样是循环，增加虚头结点（想过用这招，但是妹想出来），相当于3个结点为一组操作，然后每次操作完把指针放3个结点中的最后一个。

​	心得：以后就算是写循环也要写的好看！

```javascript
var swapPairs = function(head) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let now = virNode;
    while(now.next != null && now.next.next != null){
        let one = now.next;
        let two = now.next.next;
        one.next = two.next;
        now.next = two;
        now.next.next = one;
        now = now.next.next;
    }
    return virNode.next;
}
```

​	最佳方法：

​	递归，空间复杂度O(n)，因为递归的栈消耗

```javascript
var swapPairs = function(head){
    if(head == null || head.next == null){
        return head;
    }
    let tmp = head.next;
    head.next = swapPairs(tmp.next);
    tmp.next = head;
    return tmp;
}
```



#### 2020.10.13

#### redo

```typescript
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};
```

