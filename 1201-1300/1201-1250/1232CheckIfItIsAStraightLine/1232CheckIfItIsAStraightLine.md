# 1232. Check If It Is a Straight Line

You are given an array `coordinates`, `coordinates[i] = [x, y]`, where `[x, y]` represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg)

```
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg)**

```
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
```

 

**Constraints:**

- `2 <= coordinates.length <= 1000`
- `coordinates[i].length == 2`
- `-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4`
- `coordinates` contains no duplicate point.

#### 2021.01.17

##### 	我的思路：

```javascript
function checkStraightLine(coordinates: number[][]): boolean {
    const N = coordinates.length;
    if (N <= 2) return true;
    coordinates.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })
    const xDiff = coordinates[1][0] - coordinates[0][0];
    const yDiff = coordinates[1][1] - coordinates[0][1];
    for (let i = 2; i < N; i++) {
        if ((!yDiff && coordinates[i][1] - coordinates[i - 1][1] === 0) 
            || ((coordinates[i][0] - coordinates[i - 1][0]) / (coordinates[i][1] - coordinates[i - 1][1]) === xDiff / yDiff)) {
                continue;
            }
        return false;
    }   
    return true;
};
```

