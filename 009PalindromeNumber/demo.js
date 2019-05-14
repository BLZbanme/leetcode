var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('');
};

var isPalindrome = function(x) {
    var arr = x.toString().split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i++] != arr[j--]){
            return false;
        }
    }
    return true;
};
var isPalindrome = function(x){
    if(x < 0 || (x % 10 == 0 && x != 0)){
        return false;
    }
    let tmp = 0;
    while(x > tmp){
        tmp = tmp * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x == tmp || x == Math.floor(tmp / 10);
}


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));