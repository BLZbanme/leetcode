function numPairsDivisibleBy60(time) {
    var map = Array(60).fill(0);
    time.forEach(function (e) { return map[e % 60]++; });
    var count = Cm2(map[0]) + Cm2(map[30]);
    for (var i = 1; i < 30; i++) {
        count += map[i] * map[60 - i];
    }
    return count;
}
;
function Cm2(m) {
    return (m * (m - 1)) >> 1;
}
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])); //3
console.log(numPairsDivisibleBy60([60, 60, 60])); //3
