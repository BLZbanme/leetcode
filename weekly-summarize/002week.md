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

#### ~~注：~~

​	~~还有借助整型数组判断的字符相同方法，我个人感觉不好使，暂时先不写。~~

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

##### 别人的思路：

​	因为排序的复杂度最快为O(nlogn)，所有采用整型数组来记录字符出现的频率可以免去排序字符串的步骤，这个过程的复杂度为O(n)。

```javascript
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];
    for(let str of strs){
        let arr = new Array(26).fill(0);
        let strArr = [...str];
        strArr.forEach(v => arr[v.charCodeAt() - 'a'.charCodeAt()] += 1);
        let strSort = arr.join("");
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

# 50. Pow(x, n)

Implement [pow(*x*, *n*)](http://www.cplusplus.com/reference/valarray/pow/), which calculates *x* raised to the power *n* (xn).

**Example 1:**

```
Input: 2.00000, 10
Output: 1024.00000
```

**Example 2:**

```
Input: 2.10000, 3
Output: 9.26100
```

**Example 3:**

```
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

**Note:**

- -100.0 < *x* < 100.0
- *n* is a 32-bit signed integer, within the range [−2<sup>31</sup>, 2<sup>31</sup> − 1]

##### 2019.06.26

##### 我的思路：

##### 	方法1：

​	直接调幂运算。。

```javascript
var myPow = function(x, n) {
    return x ** n;
};
```

##### 别人的思路：

##### 	方法2：

​	递归，把幂运算x的n次幂转换成的 x*2 的n/2次幂之类的，n/2不能整除就提出一个x来

​	时间复杂度O(logn)

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n < 0){
        n = -n;
        x = 1 / x;
    }
    return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, parseInt(n / 2));
}
```

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    let res = myPow(x, parseInt(n / 2));
    return (n % 2 == 0) ? res * res : n < 0 ? res * res * (1 / x) : res * res * x;
}
```

##### 	方法3：

​	位运算，实际上也是用位运算来实现判断N是奇数还是偶数，把x慢慢翻倍。由于取n的绝对值时会整形移除，所以单独判断了-2147483648

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n == -2147483648){
        x = Math.abs(x);
        n = 2147483647;
        let res = 1;
        while(n > 0){
            if(n & 1){
                res *= x;
            }
            x *= x;
            n >>= 1;
        }
        return 1 / (res * x);
    }
    let N = Math.abs(n);
    let res = 1;
    while(N > 0){
        if(N & 1){
            res *= x;
        }
        x *= x;
        N >>= 1;
    }
    return n < 0 ? 1 / res : res;
}
```

# 47. Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

##### 2019.06.27

##### 我的思路：

​	dfs,有两点要注意的：

​	1.去重，每种相同的值只有遍历到第一个的时候计算可能值，后面的值都会和第一个重复。

​	2.判断是否使用了某个值，在这里我疯狂的浅复制数组，并删掉使用过的那个值（重复值也只删当前用的那一个），估计内存开销会很大。

```javascript
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    while(i < nums.length){
        if(nums.length == 1){
            return [nums];
        }
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        permute([nums[i]], tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
    return res;
};

function permute(arr, nums, res){
    let i = 0;
    while(i < nums.length){
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        let arrNew = [...arr];
        arrNew.push(nums[i]);
        if(nums.length == 1){
            res.push(arrNew);
            return;
        }
        permute(arrNew, tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
}
```

##### 别人的思路：

##### 	方法1：

​	同样是dfs，这位选手的思路是用一个used数组标记使用了的值。

##### 	还有值得借鉴的地方是：

​	我自己写的代码中，主函数里面不应该写第一次迭代的（这样代码和上面permute中重复了很多），应该把全部迭代的运算都在dfs方法里面。

```javascript
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let used = new Array(nums.length).fill(false);
    let list = [];
    dfs(nums, used, list, res);
    return res;
};

function dfs(nums, used, list, res){
    if(list.length == nums.length){
        res.push([...list]);
        return;
    }

    for(let i = 0; i < nums.length; i++){
        if(used[i]){
            continue;
        }
        if(i > 0 && nums[i - 1] == nums[i] && !used[i - 1]){
            continue;
        }
        used[i] = true;
        list.push(nums[i]);
        dfs(nums, used, list, res);
        used[i] = false;
        list.pop();
    }
}
```

# 48. Rotate Image

You are given an *n* x *n* 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

**Note:**

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

```
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**Example 2:**

```
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

##### 2019.06.29

##### 我的思路：

​	从最里层开始直接旋转，如果这个矩阵长度是奇数，最里层是一个点，不需要转，从此外层开始转。

​	时间复杂度O(n<sup>2</sup>)

```javascript
var rotate = function(matrix) {
    let len = matrix.length;
    if(len == 1){
        return matrix;
    }
    let index = parseInt(len / 2) - 1;
    let nowLen = len % 2 == 0 ? 2 : 3;
    while(nowLen <= len){
        let tmp = new Array(nowLen);
        for(let i = 0; i < nowLen; i++){
            tmp[i] = matrix[index][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index][index + i] = matrix[index + nowLen - 1 - i][index];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index] = matrix[index + nowLen - 1][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + nowLen - 1][index + i] = matrix[index + nowLen - 1 - i][index + nowLen - 1];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index + nowLen - 1] = tmp[i];
        }
        nowLen += 2;
        index--;
    }
    return matrix;
};
```

##### 别人的思路：

​	顺时针旋转矩阵可以通过把矩阵按行颠倒，然后求转置。

```
/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/
```

```javascript
var rotate = function(matrix){
    matrix.reverse();
    for(let i = 0; i < matrix.length; i++){
        for(let j = i + 1; j < matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
```

##### 	注:

​	逆时针旋转矩阵可以通过把矩阵按列颠倒，然后求转置

```javascript
var rotate = function(matrix){
    for(let arr of matrix){
        arr.reverse();
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = i + 1; j < matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
```

