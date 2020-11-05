function sortByBits1(arr: number[]): number[] {
    const map = new Map();
    return arr.sort((a, b) => a - b).sort((a, b) => {
        let aCount = map.get(a);
        let bCount = map.get(b);
        if (!aCount) {
            aCount = a.toString(2).split("").filter(e => e == '1').length;
            map.set(a, aCount);
        }
        if (!bCount) {
            bCount = b.toString(2).split("").filter(e => e == '1').length;
            map.set(b, bCount);
        }
        return aCount - bCount;
    })
};

function sortByBits2(arr: number[]): number[] {
    const map = new Map();
    return arr.sort((a, b) => {
        let aCount = map.get(a);
        let bCount = map.get(b);
        if (!aCount) {
            aCount = a.toString(2).split("").filter(e => e == '1').length;
            map.set(a, aCount);
        }
        if (!bCount) {
            bCount = b.toString(2).split("").filter(e => e == '1').length;
            map.set(b, bCount);
        }
        if (aCount == bCount) {
            return a - b
        }
        return aCount - bCount;
    })
};

function sortByBits3(arr: number[]): number[] {
    const map = Array(10001).fill(0);
    for (let i = 1; i <= 10000; i++) {
        map[i] = map[i >> 1] + (i & 1);
    }
    return arr.sort((a, b) => {
        if (map[a] == map[b]) {
            return a - b;
        }
        return map[a] - map[b];
    })
};

function sortByBits(arr: number[]): number[] {
    const map = new Map();
    return arr.sort((a, b) => {
        let aCount = map.get(a);
        let bCount = map.get(b);
        if (!aCount) {
            aCount = countOne(a);
            map.set(a, aCount);
        }
        if (!bCount) {
            bCount = countOne(b);
            map.set(b, bCount);
        }
        if (aCount == bCount) {
            return a - b
        }
        return aCount - bCount;
    })
};

function countOne(num: number) {
    let res = 0;
    while (num) {
        res += num & 1;
        num >>= 1;
    }
    return res;
}


console.log(sortByBits([0,1,2,3,4,5,6,7,8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])); // [1,2,4,8,16,32,64,128,256,512,1024]

console.log(sortByBits([10000,10000])); // [10000,10000]

console.log(sortByBits([2,3,5,7,11,13,17,19])); // [2,3,5,17,7,11,13,19]

console.log(sortByBits([10,100,1000,10000])); // [10,100,1000,10000]
