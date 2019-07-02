/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        arr = findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let index = permutation.length - 2;
    while(index >= 0 && permutation[index] > permutation[index + 1]){
        index--;
    }
    let tmp = permutation[index];
    let pre = permutation.slice(0, index + 1);
    let aft = permutation.slice(index + 1);
    aft.sort((a, b) => a - b);
    for(var i = 0; i < aft.length; i++){
        if(aft[i] > tmp){
            break;
        }
    }
    permutation = pre.concat(aft);
    [permutation[index], permutation[index + i + 1]] = [permutation[index + i + 1], permutation[index]];
    return permutation;
}

var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let len = permutation.length;
    let i = len - 2, j;
    while(i >= 0 && permutation[i] > permutation[i + 1]){
        i--;
    }
    for(j = len - 1; j > i; j--){
        if(permutation[j] > permutation[i]){
            break;
        }
    }
    [permutation[j], permutation[i]] = [permutation[i], permutation[j]];
    let start = i + 1, end = len - 1;
    while(start < end){
        [permutation[start++], permutation[end--]] = [permutation[end], permutation[start]];
    }
}


console.log(getPermutation(1, 1))
console.log(getPermutation(2, 1))
console.log(getPermutation(3, 1))
console.log(getPermutation(3, 2))
console.log(getPermutation(3, 3))
console.log(getPermutation(3, 4))
console.log(getPermutation(3, 5))
console.log(getPermutation(3, 6))

console.log(getPermutation(4, 5))