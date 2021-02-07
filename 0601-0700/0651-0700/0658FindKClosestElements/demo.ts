function findClosestElements1(arr: number[], k: number, x: number): number[] {
    const n = arr.length;
    
    const binarySearch = () => {
        let lo = 0;
        let hi = n - 1;
        while (lo <= hi) {
            let mid = lo + ((hi - lo) >> 1);
            if (arr[mid] === x) {
                return mid;
            }
            if (arr[mid] < x) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    let index = binarySearch();

    let i = 1;
    let j = 1
    if (arr[index] !== x) {
        if (index === n || (index > 0 && (x - arr[index - 1] <= arr[index] - x))) {
            index--;
        }
    }
    const result = [arr[index]];
    while (k > 1) {
        let leftDiff = index - i >= 0 ? x - arr[index - i] : Infinity;
        let rightDiff = index + j < n ? arr[index + j] - x : Infinity;
        if (leftDiff <= rightDiff) {
            result.unshift(arr[index - i++]);
        }
        else {
            result.push(arr[index + j++]);;
        }
        k--;
    }
    return result;
};

function findClosestElements(arr: number[], k: number, x: number): number[] {
    arr.sort((a, b) => (Math.abs(a - x) - Math.abs(b - x)));
    arr = arr.slice(0, k);
    arr.sort((a, b) => a - b);
    return arr;
}

console.log(findClosestElements([1, 3], 1, 2)); //[1]
console.log(findClosestElements([3,5,8,10], 2, 15)) //[8,10]
console.log(findClosestElements([0,1,1,1,2,3,6,7,8,9], 9, 4)) //[0,1,1,1,2,3,6,7,8]