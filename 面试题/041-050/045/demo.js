/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort(compart);
    return nums.join("");
};

var compart = (a, b) => {
    let aStr = a.toString();
    let bStr = b.toString();
    let i = 0; 
    while (i < aStr.length && i < bStr.length) {
        if (+aStr[i] < +bStr[i]) {
            return -1;
        }
        else if (+aStr[i] > +bStr[i]) {
            return +1;
        }
        i++;
    }
    if (i === aStr.length && i === bStr.length) {
        return 0;
    }

    if (i === aStr.length) {
        return  +aStr[0] - +bStr[i] <= 0 ? -1 : 1;
    }

    if (i === bStr.length) {
        return +aStr[i] - +bStr[0] <= 0 ? -1 : 1;
    }
}

var minNumber = function(nums) {
    nums.sort(compart);
    return nums.join("");
};

var compart = (a, b) => {
    let aStr = a.toString();
    let bStr = b.toString();
    let left = aStr + bStr;
    let right = bStr + aStr;
    let i = 0;
    while (i < left.length) {
        if (left[i] !== right[i]) {
            return +left[i] - +right[i];
        }
        i++;
    }
    return 0;
}


console.log(minNumber([121,12])); //12112

console.log(minNumber([12,121])); //12112

console.log(minNumber([824,938,1399,5607,6973,5703,9609,4398,8247])); //"1399439856075703697382478249389609"
console.log(minNumber([128,12])); //12128
console.log(minNumber([10, 2])); //102
console.log(minNumber([3,30,34,5,9])); //3033459