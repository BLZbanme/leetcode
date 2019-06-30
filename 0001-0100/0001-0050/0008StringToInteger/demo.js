var myAtoi = function(str) {
    var num = parseInt(str);
    if(!isNaN(num)){
        if(num >= 2147483647){
            return 2147483647;
        }else if(num <= -2147483648){
            return -2147483648;
        }
        return num;
    }
    return 0;
};

console.log(myAtoi("42"));
console.log(myAtoi("    -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));

