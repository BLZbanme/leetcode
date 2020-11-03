# 57. Insert Interval

Given a set of *non-overlapping* intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

 

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Example 3:**

```
Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
```

**Example 4:**

```
Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
```

**Example 5:**

```
Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
```

 

**Constraints:**

- `0 <= intervals.length <= 104`
- `intervals[i].length == 2`
- `0 <= intervals[i][0] <= intervals[i][1] <= 105`
- `intervals` is sorted by `intervals[i][0]` in **ascending** order.
- `newInterval.length == 2`
- `0 <= newInterval[0] <= newInterval[1] <= 105`

##### 2020.11.04

##### 	我的思路：

先二分查找，找到该插入的位置

然后便历一遍，合并区间

```javascript
function insert1(intervals: number[][], newInterval: number[]): number[][] {
    const N = intervals.length;
    let lo = 0;
    let hi = N - 1;
    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) >> 1);
        if (intervals[mid][0] < newInterval[0]) {
            lo = mid + 1;
        }
        else if (intervals[mid][0] > newInterval[0]) {
            hi = mid - 1;
        }
        else {
            lo = mid;
            break;
        }
    }

    intervals.splice(lo, 0, newInterval);

    const result = [intervals[0]];
    let i = 0;
    for (let j = 1; j <= N; j++) {
        if (result[i][0] <= intervals[j][0] && result[i][1] >= intervals[j][0]) {
            if (result[i][1] < intervals[j][1]) {
                result[i][1] = intervals[j][1];
            }
        }
        else {
            result[++i] = intervals[j];
        }
    }
    return result;
};
```

#### 别人的思路

直接遍历，合并区间

```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let left = newInterval[0];
    let right = newInterval[1];
    let placed = false;
    const result = [];
    for (let interval of intervals) {
        if (interval[0] > right) {
            if (!placed) {
                result.push([left, right]);
                placed = true;
            }
            result.push(interval);
        }
        else if (interval[1] < left) {
            result.push(interval);
        }
        else {
            left = Math.min(left, interval[0]);
            right = Math.max(right, interval[1]);
        }
    }
    if (!placed) {
        result.push([left, right]);
    }
    return result;
}
```

