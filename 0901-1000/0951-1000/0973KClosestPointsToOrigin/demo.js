function kClosest(points, K) {
    var result = [];
    var valueArr = [];
    for (var i = 0; i < points.length; i++) {
        var nowDistance = (Math.pow(points[i][0], 2)) + (Math.pow(points[i][1], 2));
        var index = binarySearch(valueArr, nowDistance, K);
        result.splice(index, 0, points[i]);
        valueArr.splice(index, 0, nowDistance);
    }
    return result.slice(0, K);
}
;
function binarySearch(arr, target, K) {
    var lo = 0;
    var hi = Math.min(arr.length, K) - 1;
    while (lo <= hi) {
        var mid = lo + ((hi - lo) >> 1);
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
console.log(kClosest([[1, 3], [-2, 2]], 1)); //[[-2,2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)); //[[3,3],[-2,4]]
