#### 问题描述

​	Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

```
Input: "()"
Output: true
```

**Example 2:**

```
Input: "()[]{}"
Output: true
```

**Example 3:**

```
Input: "(]"
Output: false
```

**Example 4:**

```
Input: "([)]"
Output: false
```

**Example 5:**

```
Input: "{[]}"
Output: true
```

##### 2019.05.21

##### 	我的思路：

​	最基础的栈的应用题了，时间复杂度O(n),空间复杂度O(n)

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

##### 别人的写法

​	学习的新套路：

​	1.js的字符串可以直接用下标访问每个字符。

​	2.这个代码只用了一个map判断，简介。

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
