# 136. Single Number

Given a **non-empty** array of integers, every element appears *three* times except for one, which appears exactly once. Find that single one.

**Note:**

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**

```
Input: [2,2,3,2]
Output: 3
```

**Example 2:**

```
Input: [0,1,0,1,0,1,99]
Output: 99
```

##### 2019.08.11

##### 我的方法：

##### 		方法1：

​		把数组中的每种元素乘以3，然后减去数组的和，得到就是最后结果的两倍。

​		时间复杂度O(n)，但这种方法实际上需要便利3次数组，new Set一次，set和nums分别reduce一次

````javascript
var singleNumber = function(nums) {
    let set = new Set(nums);
    let sum = Array.from(set).reduce(add) * 3;
    return (sum - nums.reduce(add)) / 2;
};

function add(a, b) {
    return a + b;
}
````

​		方法2：

​		用了两个set，时间复杂度O(nlogn)，遍历是n，set中查找应该是logn，所以总的是nlogn

```javascript
var singleNumber = function(nums) {
    let setOne = new Set();
    let setTwo = new Set();
    nums.forEach(e => {
        if (setOne.has(e)) {
            if (setTwo.has(e)) {
                setTwo.delete(e);
            }
        }
        else {
            setOne.add(e);
            setTwo.add(e);
        }
    })
    return setTwo.keys().next().value;
}
```

##### 别人的写法：

​		终极位运算

​		举例说明：[参考别人的博客解释](https://cloud.tencent.com/developer/article/1131945)

数组为[2,2,2,3]，一共有四个元素，进行四次循环。

第一次循环，b=(0000^0010)&1111=0010=2，a=(0000^0010)&1101=0000=0

第二次循环，b=(0010^0010)&1111=0000=0，a=(0000^0010)&1111=0010=2

第三次循环，b=(0000^0010)&1101=0000=0，a=(0010^0010)&1111=0000=0

第四次循环，b=(0000^0011)&1111=0011=3，a=(0000^0011)&1100=0000=0

某个值nums[i]第一次出现的时候，b把它记录了下来，这时候a=0；接着第二次出现的时候，b被清空了，记录到了a里面；接着第三次出现的时候，b和a都被清空了。

如果一个数组中，所有的元素除了一个特殊的只出现一次，其他都出现了三次，那么根据我们刚刚观察到的结论，最后这个特殊元素必定会被记录在b中。

````javascript
var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach(e => {
        b = (b ^ e) & ~a;
        a = (a ^ e) & ~b;
    })
    return b;
}
````

