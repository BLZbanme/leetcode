/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let i = left; i <= right; i++){
        if(selfDividing(i)){
            res.push(i);
        }
    }
    return res;
};

function selfDividing(num){
    let s = num + "";
    return s.split("").every(e => e != "0" && num % parseInt(e) == 0);
}

function  isSelfDivingNum(num){
    return num.toString().split('').map(Number).every(e => e !== 0 && num % e === 0)
}

var selfDividingNumbers = function(left, right){
    return new Array(right - left + 1).fill(0).map((val, index) => (left + index)).filter(e => isSelfDivingNum(e));
}

selfDividingNumbers(1, 22)
