# 56.  Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

**Example 1:**

```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**NOTE:** input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

##### 2019.07.01

##### 我的思路：

​	再次给力了一回，写了个准标答。

​	先按照每个数组项第一个元素排序，然后在reduce的回调函数的第一个参数中每次记录上一次reduce的合并结果。

​	排序O(nlogn)，reduce O(n)，总的复杂度O(nlogn);

```javascript
var merge = function(intervals) {
    if(intervals.length == 0){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals.reduce((acc, cur) => {
        if(acc[1] >= cur[0]){
            if(acc[1] < cur[1]){
                acc[1] = cur[1];
            }
            return acc;
        }else{
            res.push(acc);
            return cur;
        }
    }));
    return res;
};
```

# 59. Spiral Matrix II

Given a positive integer *n*, generate a square matrix filled with elements from 1 to *n*2 in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

##### 2019.07.01

##### 我的思路：

​	老规矩递归

```javascript
var generateMatrix = function(n) {
    let res = new Array(n);
    for(let i = 0; i < n; i++){
        res[i] = new Array(n);
    }
    circle(res, 0, n, 1);
    return res;
};

function circle(res, index, width, num){
    for(let i = 0; i < width; i++){
        res[index][index + i] = num++;
    }
    for(let i = 1; i < width; i++){
        res[index + i][index + width - 1] = num++;
    }
    for(let i = width + index - 2; i > index; i--){
        res[index + width - 1][i] = num++;
    }
    for(let i = index + width - 1; i > index; i--){
        res[i][index] = num++;
    }
    width -= 2;
    if(width > 0){
        circle(res, index + 1, width, num);
    }
}
```