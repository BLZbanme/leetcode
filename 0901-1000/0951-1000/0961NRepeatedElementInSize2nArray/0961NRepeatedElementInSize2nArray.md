In a array `A` of size `2N`, there are `N+1` unique elements, and exactly one of these elements is repeated N times.

Return the element repeated `N` times.

**Example 1:**

```
Input: [1,2,3,3]
Output: 3
```

**Example 2:**

```
Input: [2,1,2,5,3,2]
Output: 2
```

**Example 3:**

```
Input: [5,1,5,2,5,3,5,4]
Output: 5
```

**Note:**

1. `4 <= A.length <= 10000`
2. `0 <= A[i] < 10000`
3. `A.length` is even

##### 2019.06.16

##### 	我的思路：

​	一开始没注意是含有n+1个不同的元素，写了一种有map求重复n次的，和一个求中位数的

```javascript
var repeatedNTimes = function(A) {
    let map = new Map();
    for(let e of A){
        if(map.has(e)){
            map.set(e, map.get(e) + 1);
        }else{
            map.set(e, 1);
        }
    }
    for(let a of map){
        if(a[1] == A.length / 2){
            return a[0];
        }
    }
};
```

```javascript
var repeatedNTimes = function(A) {
    A.sort((a, b) => a - b);
    let length = A.length;
    if(A[0] == A[length / 2 - 1]){
        return A[0]
    }
    if(A[length / 2] == A[length - 1]){
        return A[length - 1];
    }
    return A[length / 2];
}
```

​	实则就是求重复的元素：

##### 	方法一：

​	用set，遍历数组如果set中没有就添加，如果有了就返回这个值

```javascript
var repeatedNTimes = function(A) {
    let set = new Set();
    for(let e of A){
        if(!set.has(e)){
            set.add(e);
        }else{
            return e;
        }
    }
}
```

##### 	方法2：

​	Check if `A[i] == A[i - 1]` or `A[i] == A[i - 2]`
​	If so, we return `A[i]`
​	If not, it must be `[x, x, y, z]` or `[x, y, z, x]`.
​	We return `A[0]` for the cases that we miss.
​	`O(N)` time `O(1)` space	

```javascript
var repeatedNTimes = function(A) {
    for(let i = 2; i < A.length; i++){
        if(A[i] == A[i - 1] || A[i] == A[i - 2]){
            return A[i];
        }
    }
    return A[0];
}
```

