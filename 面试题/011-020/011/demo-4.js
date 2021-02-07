function minArray(numbers) {
    var lo = 0;
    var n = numbers.length;
    var hi = n - 1;
    while (lo < hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        }
        else if (numbers[mid] < numbers[hi]) {
            hi = mid;
        }
        else {
            hi--;
        }
    }
    return numbers[lo];
}
;
console.log(minArray([1, 3, 3])); //1
console.log(minArray([3, 1, 3])); //1
console.log(minArray([1, 3, 5])); //1
console.log(minArray([3, 4, 5, 1, 2])); //1
console.log(minArray([2, 2, 2, 0, 1])); //0
