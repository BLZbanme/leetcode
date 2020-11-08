function kClosest(points: number[][], K: number): number[][] {
    let result: Array<Array<number>> = [];
    let valueArr: Array<number> = [];
    for (let i = 0; i < points.length; i++) {
        let nowDistance = (points[i][0] ** 2) + (points[i][1] ** 2);
        let index = binarySearch(valueArr, nowDistance, K);
        result.splice(index, 0, points[i]);
        valueArr.splice(index, 0, nowDistance);
    }
    return result.slice(0, K);
};

function binarySearch(arr: Array<number>, target: number, K: number): number {
    let lo = 0;
    let hi = Math.min(arr.length, K) - 1;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            hi = mid - 1;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            return mid;
        }
    }
    return lo;
}

console.log(kClosest([[1,3],[-2,2]], 1)); //[[-2,2]]

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); //[[3,3],[-2,4]]