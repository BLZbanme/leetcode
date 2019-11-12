/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let index = 0;
    while (citations[index] >= index + 1) {
        index++;
    }
    return index;
};

var hIndex = function(citations) {
    const N = citations.length;
    let buckets = new Array(N + 1).fill(0);
    for (let c of citations) {
        if (c >= N) {
            buckets[N]++;
        }
        else {
            buckets[c]++;
        }
    }
    let count = 0;
    for (let i = N; i >= 0; i--) {
        count += buckets[i];
        if (count >= i) {
            return i;
        }
    }
    return 0;
}

console.log(hIndex([0]));

console.log(hIndex([3, 0, 6, 1, 5]));

console.log(hIndex([3, 0, 3, 1, 5]));