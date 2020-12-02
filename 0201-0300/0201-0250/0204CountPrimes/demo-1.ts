function countPrimes1(n: number): number {
    const arr = Array(n).fill(false);
    arr[0] = true;
    arr[1] = true;
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            for (let j = 1; i * j < n; j++) {
                arr[i * j] = true;
            }
        }
    }
    return count;
};

function countPrimes(n: number): number {
    const arr = Array(n).fill(false);
    arr[0] = true;
    arr[1] = true;
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                arr[j] = true;
            }
        }
    }
    return count;
};

console.log(countPrimes(2)) // 0
console.log(countPrimes(10)) // 4
console.log(countPrimes(0)) // 0
console.log(countPrimes(1)) // 0