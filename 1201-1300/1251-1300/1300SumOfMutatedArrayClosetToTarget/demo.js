/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    const N = arr.length;
    let remind = target;
    for (let i = 0; i < N; i++) {
        let tmp = remind / (N - i);
        if (tmp < arr[i]) {
            return (tmp - Math.floor(tmp)) <= 0.5 ? Math.floor(tmp) : Math.ceil(tmp); 
        }
        // else if (Math.floor(tmp) === arr[i]) {
        //     return Math.round(tmp);
        // }
        remind -= arr[i];
    }
    return arr[N - 1];
};

var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    const N = arr.length;
    let remain = target;
    for (let i = 0; i < N; i++) {
        let tmp = remain / (N - i);
        if (tmp < arr[i]) {
            return (tmp - Math.floor(tmp)) <= 0.5 ? Math.floor(tmp) : Math.ceil(tmp); 
        }
        remain -= arr[i];
    }
    return arr[N - 1];
};


var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    const N = arr.length;
    let i = 0;
    while (i < N && target > arr[i] * (N - i)) {
        target -= arr[i++];
    }
    if (i == N) {
        return arr[N - 1];
    }
    // let res = Math.floor(target / (N - i));
    // if (target - res * (N - i) > (res + 1) * (N - i) - target) {
    //     res++;
    // }
    return Math.round((target - 0.0001) / (N - i));
};

console.log(findBestValue([1547,83230,57084,93444,70879], 71237)) // 17422

console.log(findBestValue([48772,52931,14253,32289,75263], 40876)) // 8175

console.log(findBestValue([4,9,3], 10)) // 3
console.log(findBestValue([4,9,3], 11)) // 4
console.log(findBestValue([4,9,3], 12)) // 5
console.log(findBestValue([4,9,3], 13)) // 6

console.log(findBestValue([2,3,5], 10)) // 5

console.log(findBestValue([60864,25176,27249,21296,20204], 56803)) // 11361
