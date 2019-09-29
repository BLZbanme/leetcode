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

# 258. Add Digits

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

**Example:**

```
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
```

**Follow up:**
Could you do it without any loop/recursion in O(1) runtime?

##### 2019.09.28

##### 我的思路：

​		递归的写法

```javascript
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};
```

##### 别人的方法：

 O(1)，和有如下几种可能

1. dr(n) = 0，当数字为0时
2. 当数字为9的非0倍数时，dr(n) = 9；
3. 当数组为其他数时，dr(n) = n mod 9

所以得到如下结果：

```javascript
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
}
```

# 268. Missing Number

Given an array containing *n* distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

**Example 1:**

```
Input: [3,0,1]
Output: 2
```

**Example 2:**

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

**Note**:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

##### 2019.09.29

##### 我的思路：

​		因为已知条件1~N的和是固定的，然后减去现有数组的值，得到的就是缺失值。

```javascript
var missingNumber = function(nums) {
    const N = nums.length;
    return (1 + N) * N / 2 - nums.reduce((total, num) => total + num);
};
```

##### 别人的方法：

​		跟我的思路相同，利用```a ^ b ^ b = a```更加牛逼！

```javascript
var missingNumber = function(nums) {
    let xor = 0;
    let i = 0;
    for (; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ i;
}
```

