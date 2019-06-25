# 43. Multiply Strings

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Example 1:**

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

**Example 2:**

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

**Note:**

1. The length of both `num1` and `num2` is < 110.
2. Both `num1` and `num2` contain only digits `0-9`.
3. Both `num1` and `num2` do not contain any leading zero, except the number 0 itself.
4. You **must not use any built-in BigInteger library** or **convert the inputs to integer** directly.

##### 2019.06.24

##### 我的思路：

​	用数组逆序存储结果（如数字123，存在数组中为[3,2,1]）,每次进位的时候递归一直算到无法进位，最后反转数组再join("")。

```javascript
var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let res = [];
    for(let j = l2; j >= 0; j--){
        for(let i = l1 ; i >= 0; i--){
            numBitAdd(res, (l1 - i + l2 - j), num1[i] * num2[j]);
        }
    }
    return res.reverse().join("");
};

function numBitAdd(arr, i, num){
    let pre = 0;
    if(num > 9){
        pre = parseInt(num / 10);
        num = num % 10;
    }
    if(!arr[i]){
        arr[i] = 0;
    }
    if(arr[i] + num > 9){
        arr[i] = arr[i] + num - 10;
        pre++;
    }else{
        arr[i] += num;
    }
    if(pre != 0){
        numBitAdd(arr, i + 1, pre);
    }
}
```

##### 借鉴别人的思路：

​	我发现，进位的时候其实不需要算到无法进位为止，只需要把上一位赋值了，因为如果还有进位的话，算到上一位判断是否进位时会处理掉

```javascript
var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let res = [];
    for(let j = l2; j >= 0; j--){
        for(let i = l1 ; i >= 0; i--){
            numBitAdd(res, (l1 - i + l2 - j), num1[i] * num2[j]);
        }
    }
    return res.reverse().join("");
};

function numBitAdd(arr, i, num){  
    if(!arr[i]){
        arr[i] = 0;
    }
    let sum = arr[i] + num;
    arr[i] = sum % 10;
    let pre = parseInt(sum / 10);
    if(pre == 0){
        return ;
    }
    if(!arr[i + 1]){
        arr[i + 1] = 0;
    }
    arr[i + 1] += parseInt(sum / 10);
}
```

##### 别人的思路：

​	直接声明了固定大小的数组，然后全部填充为0，这就减少了我写的中（！arr[i]）判断数组项是否初始化的过程，并且最后不需要逆序打印。

```javascript
var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let res = new Array(l1 + l2 + 2).fill(0);
    for(let i = l1; i >= 0; i--){
        for(let j = l2; j >= 0; j--){
            let num = num1[i] * num2[j];
            let p1 = i + j, p2 = i + j + 1;
            let sum = num + res[p2];
            res[p1] += parseInt(sum / 10);
            res[p2] = sum % 10;
        }
    }
    let index = res.findIndex((value) => value != 0);
    return res.slice(index).join("");
}
```

# 49. Group Anagrams

Given an array of strings, group anagrams together.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note:**

- All inputs will be in lowercase.
- The order of your output does not matter.

##### 2019.06.25

##### 我的思路：

​	思路，把字符串排字典序，字典序相同的就属于同一数组中。最后返回所有的这些数组。

​	 好久没写跟标准答案几乎一样的解了~，最高的答案最后一步声明个list，然后把map的values放到list里面，但是由于我是每次都直接把对应的数组对象放在结果list里面了，所以直接返回list就行

​	时间复杂度O(n * m)，n是因为遍历字符串数组所有字符串， m是字符串的长度。

#### 注：

​	还有自助借助整型数组判断的方法，我个人感觉不好使，暂时先不写。

```javascript
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];
    for(let str of strs){
        let strSort = [...str].sort().join("");
        if(!map.has(strSort)){
            let arr = [str];
            map.set(strSort, arr);
            res.push(arr);
        }else{
            map.get(strSort).push(str);
        }
    }
    return res;
};
```

