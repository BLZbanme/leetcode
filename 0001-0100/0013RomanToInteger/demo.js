/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let strArray = s.split('');
    let one = false;
    let ten = false;
    let hunred = false;
    let result = 0;
    for(let i = 0; i < strArray.length; i++){
        switch(strArray[i]){
            case 'M':
                if(hunred){
                    result -= 200;
                    hunred = false;
                }
                result += 1000;
                break; 
            case 'D':
                if(hunred){
                    result -= 200;
                }
                result += 500;
                break;   
            case 'C':
                if(ten){
                    result -= 20;
                    ten = false;
                }
                hunred = true;
                result += 100;
                break; 
            case 'L':
                if(ten){
                    result -= 20;
                }
                result += 50;
                break;
            case 'X':
                if(one){
                    result -= 2;
                    one = false;
                }
                ten = true;
                result += 10;
                break;  
            case 'V':
                if(one){
                    result -= 2;
                }
                result += 5;
                break; 
            case 'I':
                one = true;
                result += 1;
                break; 
        }
    }
    return result;
};



var romanToInt = function(s){
    let m = new Map();
    m.set("I", 1);
    m.set("V", 5);
    m.set("X", 10);
    m.set("L", 50);
    m.set("C", 100);
    m.set("D", 500);
    m.set("M", 1000);
    let result = 0;
    let i = 0
    for(; i < s.length - 1; i++){
        if(m.get(s.charAt(i)) < m.get(s.charAt(i + 1))){
            result -= m.get(s.charAt(i));
        }else{
            result += m.get(s.charAt(i));
        }
    }
    return result + m.get(s.charAt(i));
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));