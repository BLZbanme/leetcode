function maxTurbulenceSize(arr) {
    var n = arr.length;
    var left = 0;
    var compare = function (a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    };
    var max = 1;
    var cp = compare(arr[0], arr[1]);
    for (var right = 2; right < n; right++) {
        if (cp * compare(arr[right - 1], arr[right]) != -1) {
            left = right - 1;
        }
        max = Math.max(right - left + 1, max);
        cp = compare(arr[right - 1], arr[right]);
    }
    return max;
}
;
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])); //5
console.log(maxTurbulenceSize([4, 8, 12, 16])); //2
console.log(maxTurbulenceSize([100])); //1
