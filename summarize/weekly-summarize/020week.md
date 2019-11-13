# 338. Counting Bits

Given a non negative integer number **num**. For every numbers **i** in the range **0 ≤ i ≤ num** calculate the number of 1's in their binary representation and return them as an array.

**Example 1:**

```
Input: 2
Output: [0,1,1]
```

**Example 2:**

```
Input: 5
Output: [0,1,1,2,1,2]
```

**Follow up:**

- It is very easy to come up with a solution with run time **O(n\*sizeof(integer))**. But can you do it in linear time **O(n)** /possibly in a single pass?
- Space complexity should be **O(n)**.
- Can you do it like a boss? Do it without using any builtin function like **__builtin_popcount** in c++ or in any other language.

##### 2019.11.11

##### 	我的思路：

​	知道多半是用dp做，但是没想出状态转移方程

##### 别人的写法：

​	dp，观察最低有效位，观察x和x' = x / 2的关系:可以发现x和x‘只有一位不同，可以得到状态转移方程

​																*P*(*x*)=*P*(*x* / 2)+(*x* mod 2)

```javascript
var countBits = function(num) {
    let result = new Array(num + 1);
    result[0] = 0;
    for (let i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
```

