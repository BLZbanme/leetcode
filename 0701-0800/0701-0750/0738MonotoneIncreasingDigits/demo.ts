function monotoneIncreasingDigits(N: number): number {
    const arr = N.toString().split('').map(e => +e);
    const numMap = Array(10).fill(-1);
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        numMap[arr[i]] == -1 && (numMap[arr[i]] = i)
        if (arr[i] > arr[i + 1]) {
            let j = numMap[arr[i]]
            arr[j]--;
            while (j + 1 < n) {
                arr[j + 1] = 9;
                j++;
            }
            break;
        }
    }
    return +arr.join('')
};

console.log(monotoneIncreasingDigits(10)) // 9
console.log(monotoneIncreasingDigits(1234)) // 1234
console.log(monotoneIncreasingDigits(332)) // 299