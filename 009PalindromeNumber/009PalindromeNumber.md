#### 问题描述

​	Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

```
Input: 121
Output: true
```

**Example 2:**

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

#### 我的解决方法	

##### 2019.05.14

​	我的思路：

解法1：直接把输入转成字符串，然后生成一个逆序字符串，判断是否相等。

​	优点：一行代码

​	缺点：使用了数组存字符数组，并逆序运算了。	

解法2：把输入转成字符串，然后循环判断字符串头和尾是否相同

​	优点：比解法1少了逆转字符串操作。

解法3：直接对数字进行操作，对10取模，然后把结果拼成另一个数，比较最后结果和拼出来的数

​	优点：不用进行转成string操作。

```javascript
var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('');
};

var isPalindrome = function(x) {
    var arr = x.toString().split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i++] != arr[j--]){
            return false;
        }
    }
    return true;
};
var isPalindrome = function(x){
    if(x < 0 || (x % 10 == 0 && x != 0)){
        return false;
    }
    let tmp = 0;
    while(x > tmp){
        tmp = tmp * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x == tmp || x == Math.floor(tmp / 10);
}

```

