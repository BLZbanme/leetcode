function maxTurbulenceSize(arr: number[]): number {
    const n = arr.length;
    let left = 0;
    const compare = (a: number, b: number): number => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    let max = 1;
    let cp = compare(arr[0], arr[1]);
    if (cp !== 0) {
        max = 2;
    }
    for (let right = 2; right < n; right++) {
        if (cp * compare(arr[right - 1], arr[right]) != -1) {
            left = right - 1;
        }
        else {
            max = Math.max(right - left + 1, max);
        }
        cp = compare(arr[right - 1], arr[right]);
    }
    return max;
};

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9])) //5
console.log(maxTurbulenceSize([4,8,12,16])) //2
console.log(maxTurbulenceSize([100])) //1