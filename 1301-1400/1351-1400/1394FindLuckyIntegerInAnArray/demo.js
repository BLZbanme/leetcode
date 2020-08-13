/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const N = arr.length;
    const tmpArr = Array(N + 1).fill(0);
    arr.forEach(e => {
        if (e <= N) {
            tmpArr[e]++;
        }
    })
    let j = N;
    while (j >= 1) {
        if (tmpArr[j] == j) {
            return j;
        }
        j--;
    }
    return -1;
};

console.log(findLucky([1])); //1
console.log(findLucky([2,2,3,4])); //2
console.log(findLucky([1,2,2,3,3,3])); //3
console.log(findLucky([2,2,2,3,3])); //-1
console.log(findLucky([5])); //-1
console.log(findLucky([7,7,7,7,7,7,7])); //7