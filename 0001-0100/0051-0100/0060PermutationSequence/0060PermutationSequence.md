# 60. Permutation Sequence

The set `[1,2,3,...,n]` contains a total of *n*! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for *n* = 3:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

Given *n* and *k*, return the *k*th permutation sequence.

**Note:**

- Given *n* will be between 1 and 9 inclusive.
- Given *k* will be between 1 and *n*! inclusive.

**Example 1:**

```
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```
Input: n = 4, k = 9
Output: "2314"
```

##### 2019.07.02

##### 	我的思路：

##### 		方法1：

​	写了一遍0031NextPermutation，但是由于当时可能没完全掌握，很多细节的地方没有写好，鲜血险些超时。

​	复杂度O(n<sup>2</sup>logn),遍历n次复杂度O(n),每次便利里面查找和排序O(nlogn),所以为O(n<sup>2</sup>logn）

```javascript
var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        arr = findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let index = permutation.length - 2;
    while(index >= 0 && permutation[index] > permutation[index + 1]){
        index--;
    }
    let tmp = permutation[index];
    let pre = permutation.slice(0, index + 1);
    let aft = permutation.slice(index + 1);
    aft.sort((a, b) => a - b);
    for(var i = 0; i < aft.length; i++){
        if(aft[i] > tmp){
            break;
        }
    }
    permutation = pre.concat(aft);
    [permutation[index], permutation[index + i + 1]] = [permutation[index + i + 1], permutation[index]];
    return permutation;
}
```

##### 	方法1优化:

​	用当时31题最优的思路实现，复杂度O(n<sup>2</sup>)，遍历n次复杂度O(n),每次遍历里面查找，交换，和逆序O(n)，得到O(n<sup>2</sup>)

```javascript
var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let len = permutation.length;
    let i = len - 2, j;
    while(i >= 0 && permutation[i] > permutation[i + 1]){
        i--;
    }
    for(j = len - 1; j > i; j--){
        if(permutation[j] > permutation[i]){
            break;
        }
    }
    [permutation[j], permutation[i]] = [permutation[i], permutation[j]];
    let start = i + 1, end = len - 1;
    while(start < end){
        [permutation[start++], permutation[end--]] = [permutation[end], permutation[start]];
    }
}
```

##### 	方法2：

​	瞟了眼最高亮的思路的开头，理解之后自己写的。可以根据k判断一次次/(n-1)!，判断当前这个排列的开头是什么，然后从初始化存储已经未被使用的数字数组中去掉它。

​	时间复杂度O(n<sup>2</sup>)，遍历n次，每次里面要计算n次阶乘值。

```javascript
var getPermutation = function(n, k) {
    let res = [];
    let num = new Array(n).fill(0).map((v, i)=> i + 1);
    while(n > 1) {
        let fac = factorial(--n);
        let now = Math.ceil((k / fac)) - 1;
        res.push(num[now]);
        num.splice(now, 1);
        k -= fac * now;
    }
    res.push(num[0]);
    return res.join("");
}

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}
```

##### 	方法2优化：

​	最后看了下最高亮的答案，它有一个很亮眼的地方就是用一个阶乘数组存储了对应的阶乘值。这样复杂度就变成了O(n),求阶乘数组O(n),遍历n次O(n)，O(n) + O(n) 得到O(n)

```javascript
var getPermutation = function(n, k) {
    let res = [];
    let facArr = new Array(n);
    facArr[0] = 1;
    let sum = 1;
    for(let i = 1; i < n; i++){
        sum *= i;
        facArr[i] = sum;
    }
    let num = new Array(n).fill(0).map((v, i)=> i + 1);
    while(n > 1) {
        let fac = facArr[--n];
        let now = Math.ceil((k / fac)) - 1;
        res.push(num[now]);
        num.splice(now, 1);
        k -= fac * now;
    }
    res.push(num[0]);
    return res.join("");
}
```

