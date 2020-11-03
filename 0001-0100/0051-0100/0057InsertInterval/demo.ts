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

console.log(insert([[2,3],[5,5],[6,6],[7,7],[8,11]] ,[6,13])) //[[6,13],[2,3],[5,5],[6,6],[7,7],[8,11]]

console.log(insert([], [5,7])) //[[5, 7]]

console.log(insert([[1,3],[6,9]], [2,5])) //[[1, 5], [6, 9]]

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) //[[1,2],[3,10],[12,16]]