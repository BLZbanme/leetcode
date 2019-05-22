​	Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**Example:**

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

##### 2019.05.22

##### 	我的思路：

​	 从t两个链表头结点比起，把更小的放入新链表中。时间复杂度O(l<sub>1</sub>)+O(l<sub>2</sub>),空间复杂度O(1)。小套路，增加一个虚拟头结点，就无须在循环外判断新链表的头结点是l<sub>1</sub>还是l<sub>2</sub>(从0019RemoveNthNodeFromEndOfList学到的)

```javascript
var isValid = function(s) {
    if(s == ""){
        return true;
    }
    if(s.length % 2 != 0){
        return false;
    }
    let set = new Set();
    set.add("(");
    set.add("{");
    set.add("[");
    let map = new Map();
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");
    let stack = [];
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            stack.push(arr[i]);
        }else{
            if(map.get(arr[i]) != stack.pop()){
                return false;
            }
        }
    }
    return stack.length == 0
};
```

​	改进，在js中最后一个判断l<sub>1</sub>还是l<sub>2</sub>为空，直接用js的语法糖tmp.next = l1 || l2

```javascript
var mergeTwoLists = function(l1, l2) {
    let tmp = virHead = new ListNode(0);
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            tmp.next = l1;
            l1 = l1.next;
        }else{
            tmp.next = l2;
            l2 = l2.next;
        }
        tmp = tmp.next;
    }
    tmp.next = l1 || l2;
    return virHead.next;
};
```

##### 别人的写法

​	学习的新套路：

​	递归，写出来的代码极其简洁

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

​	
