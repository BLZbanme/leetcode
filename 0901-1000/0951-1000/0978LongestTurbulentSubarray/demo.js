function maxTurbulenceSize1(arr) {
    var n = arr.length;
    var add = Array(n).fill(1);
    var diff = Array(n).fill(1);
    var max = 1;
    for (var i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            diff[i] = 1;
            add[i] = diff[i - 1] + 1;
        }
        else if (arr[i] < arr[i - 1]) {
            diff[i] = add[i - 1] + 1;
            add[i] = 1;
        }
        max = Math.max(max, add[i], diff[i]);
    }
    return max;
}
;
function maxTurbulenceSize2(arr) {
    var n = arr.length;
    var compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    };
    var left = 0;
    var max = 1;
    var c = compare(arr[1], arr[0]);
    for (var right = 2; right < n; right++) {
        if (c * compare(arr[right], arr[right - 1]) != -1) {
            left = right - 1;
        }
        c = compare(arr[right], arr[right - 1]);
        max = Math.max(right - left + 1, max);
    }
    return max;
}
;
function maxTurbulenceSize(arr) {
    var n = arr.length;
    var compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    };
    var max = 1;
    var left = 0;
    for (var right = 1; right < n; right++) {
        var c = compare(arr[right - 1], arr[right]);
        if (right === n - 1 || (c * compare(arr[right], arr[right + 1]) != -1)) {
            if (c !== 0) {
                max = Math.max(right - left + 1);
            }
            left = right;
        }
    }
    return max;
}
;
console.log(maxTurbulenceSize([9, 9])); //1
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])); //5
console.log(maxTurbulenceSize([4, 8, 12, 16])); //2
console.log(maxTurbulenceSize([100])); //1
