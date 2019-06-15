Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

**Example 1:**

```
Input: [1,1,4,2,1,3]
Output: 3
Explanation: 
Students with heights 4, 3 and the last 1 are not standing in the right positions.
```

**Note:**

1. `1 <= heights.length <= 100`
2. `1 <= heights[i] <= 100`

##### 2019.06.10

##### 	我的思路：

​	复制数组，对于数组排序，对比前后的结果，有多少项不同就是至少需要移动多少项

​	时间复杂度O(n)

```javascript
var heightChecker = function(heights) {
    let arr = [];
    heights.forEach((a) => arr.push(a));
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};
```

##### 心得：

​	浅拷贝数组的方法（以本题为例）：

​	1.Array.from()

```javascript
let arr = Array.from(heights);
```

​	2.[...arr]

```javascript
let arr = [...heights];
```

​	3.Array.slice() || concat() ;

```javascript
let arr = heights.slice();
```

​	4.JSON.parse();

```javascript
let arr = JSON.parse(JSON.stringify(heights));
```

