/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let i = 0;
    let j = citations.length - 1;
    while (j >= 0 && citations[j] >= i + 1) {
        j--;
        i++;
    }
    return i;
};

var hIndex = function(citations) {
    const N = citations.length;
    let lo = 0;
    let hi = N - 1;
    let mid;
    while (lo <= hi) {
        mid = Math.floor(lo + Math.floor((hi - lo) / 2));
        if (citations[mid] < N - mid) {
            lo = mid + 1;
        }
        else if (citations[mid] > N - mid) {
            hi = mid - 1;
        }
        else {
            return citations[mid];
        }
    }
    return N - hi - 1;
}

console.log(hIndex([0]))
console.log(hIndex([0,1,3,5,6]))