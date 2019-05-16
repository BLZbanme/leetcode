/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let qian = Math.floor(num / 1000);
    let tmp = num % 1000;
    for(let i = 0; i < qian; i++){
        result += 'M';
    }
    if(tmp >= 900){
        result += 'CM';
        tmp -= 900;
    }else if(tmp >= 500){
        result += 'D';
        tmp -= 500;
        let bai = Math.floor(tmp / 100);
        for(let i = 0; i < bai; i++){
            result += 'C';
        }
        tmp = tmp % 100;
    }else if(tmp >= 400){
        result += 'CD';
        tmp -= 400;
    }else{
        let bai = Math.floor(tmp / 100);
        for(let i = 0; i < bai; i++){
            result += 'C';
        }
        tmp = tmp % 100;
    }

    if(tmp >= 90){
        result += 'XC';
        tmp -= 90;
    }else if(tmp >= 50){
        result += 'L';
        tmp -= 50;
        let bai = Math.floor(tmp / 10);
        for(let i = 0; i < bai; i++){
            result += 'X';
        }
        tmp = tmp % 10;
    }else if(tmp >= 40){
        result += 'XL';
        tmp -= 40;
    }else{
        let bai = Math.floor(tmp / 10);
        for(let i = 0; i < bai; i++){
            result += 'X';
        }
        tmp = tmp % 10;
    }

    
    if(tmp == 9){
        result += 'IX';
    }else if(tmp >= 5){
        result += 'V';
        tmp -= 5;
        for(let i = 0; i < tmp; i++){
            result += 'I';
        }
    }else if(tmp == 4){
        result += 'IV';
    }else{
        for(let i = 0; i < tmp; i++){
            result += 'I';
        }
    }
    return result;
};

var intToRoman = function(num) {
    let i = 3;
    let remain = num, now;
    const set = [
        ['X','V','I'],
        ['C','L','X'],
        ['M','D','C']
    ];
    let result = '';
    while(i >= 0){
        now = Math.floor(remain / (10 ** i));
        if(now > 0){
            remain = remain % (10 ** i);
            if(i == 3){
                for(let i = 0; i < now; i++){
                    result += 'M';
                } 
            }else{
                if(now == 9){
                    result += set[i][2] + set[i][0];
                    i--;
                    continue;
                }else if(now >= 5){
                    result += set[i][1];
                    now -= 5;
                }else if(now == 4){
                    result += set[i][2] + set[i][1];
                    i--;
                    continue;
                }
                for(let j = 0; j < now; j++){
                    result += set[i][2];
                }
            }
        }
        i--;
    }
    return result;
}

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
