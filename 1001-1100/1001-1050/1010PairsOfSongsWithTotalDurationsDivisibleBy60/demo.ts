function numPairsDivisibleBy60(time: number[]): number {
    const map = Array(60).fill(0);
    time.forEach(e => map[e % 60]++);
    let count = Cm2(map[0]) + Cm2(map[30]);
    for (let i = 1; i < 30; i++) {
        count += map[i] * map[60 - i];
    }
    return count;
};

function Cm2(m: number): number {
    return (m * (m - 1)) >> 1;
}

console.log(numPairsDivisibleBy60([30,20,150,100,40])); //3
console.log(numPairsDivisibleBy60([60, 60, 60])); //3