Given an array `A` of non-negative integers, return an array consisting of all the even elements of `A`, followed by all the odd elements of `A`.

You may return any answer array that satisfies this condition.

**Example 1:**

```
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

**Note:**

1. `1 <= A.length <= 5000`
2. `0 <= A[i] <= 5000`

##### 2019.06.13

##### 	我的思路：

##### 	方法1：

​	遍历一次，碰到奇数就把下标放进一个额外队列中，碰到偶数就判断这个队列是否为空，不为空就交换。

​	时间复杂度O(n)，空间复杂度O(n)。

```javascript
var sortArrayByParity = function(A) {
    let oddIndex = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            if(oddIndex.length != 0){
                let index = oddIndex.shift();
                let tmp = A[index];
                A[index] = A[i];
                A[i] = tmp;
                oddIndex.push(i);
            }
        }else{
            oddIndex.push(i);
        }
    }
    return A;
};
```

##### 方法2：

​	直接排序，比较函数就是偶数排在奇数前

```javascript
var sortArrayByParity = function(A) {
    return A.sort((a, b) => a % 2 - b % 2);
};
```

##### 方法3：

​	分别放进两个数组中，然后两个数组合并

```javascript
var sortArrayByParity = function(A) {
    let oddRes = [];
    let evenRes = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            evenRes.push(A[i]);
        }else{
            oddRes.push(A[i]);
        }
    }
    return evenRes.concat(oddRes);
}
```

##### 方法4：

​	放进同一个数组，偶数头插，奇数尾插

```javascript
var sortArrayByParity = function(A) {
    let res = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            res.unshift(A[i]);
        }else{
            res.push(A[i]);
        }
    }
    return res;
}
```

##### 方法5：

​	两个指针，一头一尾，碰到头奇尾偶就交换

```javascript
var sortArrayByParity = function(A) {
    let i = 0, j = A.length - 1;
    while(i < j){
        if(A[i] % 2 > A[j] %2){
            let tmp = A[j];
            A[j] = A[i];
            A[i] = tmp;
        }
        if(A[i] % 2 == 0){
            i++;
        }
        if(A[j] % 2 == 1){
            j--;
        }
    }
    return A;
}
```

#### 好坏比：

​	5  > 1 > 其他