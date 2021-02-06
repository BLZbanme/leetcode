function maxTurbulenceSize1(arr: number[]): number {
    const n = arr.length;
    const add = Array(n).fill(1);
    const diff = Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            diff[i] = 1;
            add[i] = diff[i - 1] + 1
        }
        else if (arr[i] < arr[i - 1]) {
            diff[i] = add[i - 1] + 1;
            add[i] = 1
        }
        max = Math.max(max, add[i], diff[i]);
    }
    return max;
};

function maxTurbulenceSize2(arr: number[]): number {
    const n = arr.length;
    const compare = (a: number, b: number): number => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    }
    let left = 0;
    let max = 1;
    
    let c = compare(arr[1], arr[0]);
    for (let right = 2; right < n; right++) {
        if (c * compare(arr[right], arr[right - 1]) != -1) {
            left = right - 1;
        }
        c = compare(arr[right], arr[right - 1]);
        max = Math.max(right - left + 1, max);
    }
    return max;
};

function maxTurbulenceSize(arr: number[]): number {
    const n = arr.length;
    const compare = (a: number, b: number): number => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    }
    let max = 1;
    
    let left = 0;
    for (let right = 1; right < n; right++) {
        let c = compare(arr[right - 1], arr[right]);
        if (right === n - 1 || c * compare(arr[right], arr[right + 1]) != -1) {
            if (c !== 0) {
                max = Math.max(right - left + 1);
            }
            left = right;
        }
    }
    return max;
};

console.log(maxTurbulenceSize([9, 9])) //1
console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9])) //5
console.log(maxTurbulenceSize([4,8,12,16])) //2
console.log(maxTurbulenceSize([100])) //1