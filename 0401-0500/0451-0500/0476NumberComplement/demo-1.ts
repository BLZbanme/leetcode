function findComplement111(num: number): number {
    return parseInt(num.toString(2).split('').map(e => e == '1' ? '0' : '1').join(''), 2);
};

function findComplement(num: number): number {
    let maxBitNum = 0;
    let tmpNum = num;
    while (tmpNum > 0) {
        maxBitNum++;
        tmpNum >>= 1;
    }
    return num ^ ((1 << maxBitNum) - 1);
};

console.log(findComplement(5));//2
console.log(findComplement(1));//0