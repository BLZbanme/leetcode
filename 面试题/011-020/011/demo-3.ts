function minArray(numbers: number[]): number {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (numbers[mid] < numbers[hi]) {
            hi = mid;
        }
        else if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        }
        else {
            hi--;
        }
    }
    return numbers[lo];
};