/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (!k) {
        return [];
    }

    const N = arr.length;
    arr.unshift(null);
    for (let i = N >> 1; i >= 1; i--) {
        sink(arr, i, N);
    }

    const result = [];
    let tmp = N;
    
    while (k--) {
        result.push(arr[1]);
        [arr[1], arr[tmp]] = [arr[tmp], arr[1]];
        sink(arr, 1, --tmp);
    }
    return result;
};

function sink(arr, index, length) {
    let i = index;
    while (i * 2 <= length) {
        let j = i << 1;
        if (j < length && arr[j] > arr[j + 1]) {
            j++;
        }
        if (arr[i] < arr[j]) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = j;
    }
}

console.log(getLeastNumbers([0,0,2,3,2,1,1,2,0,4], 10)); //[0,0,0,1,1,2,2,2,3,4]

console.log(getLeastNumbers([3,2,1], 2)); //[1, 2]
console.log(getLeastNumbers([0,1,2,1], 1)); //[0]