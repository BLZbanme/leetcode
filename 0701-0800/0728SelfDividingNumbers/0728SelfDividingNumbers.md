A *self-dividing number* is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

**Example 1:**

```
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

**Note:**

The boundaries of each input argument are `1 <= left <= right <= 10000`.

##### 2019.06.12

##### 	我的思路：

​	暴力循环，用了下数组的every方法

​	时间复杂度O(R - L)

```javascript
var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let i = left; i <= right; i++){
        if(selfDividing(i)){
            res.push(i);
        }
    }
    return res;
};

function selfDividing(num){
    let s = num + "";
    return s.split("").every(e => e != "0" && num % parseInt(e) == 0);
}
```

##### 高手的写法

​	思路：

​	1.生成一个大小为（right - left + 1）的数组

​	2.全部赋初值0，然后map返回一个同样大小然后数值为right => left的数组

​	3.用filter过滤返回全是自除数的数组

```javascript
function  isSelfDivingNum(num){
    return num.toString().split('').map(Number).every(e => e !== 0 && num % e === 0)
}

var selfDividingNumbers = function(left, right){
    return new Array(right - left + 1).fill(0)
        .map((val, index) => (left + index)).filter(e => isSelfDivingNum(e));
}

```

##### 另外的思路

​	判断是否是自除数用除法和mod运算（懒得写这种）