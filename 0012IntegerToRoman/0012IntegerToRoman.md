#### 问题描述

​	Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**

```
Input: 3
Output: "III"
```

**Example 2:**

```
Input: 4
Output: "IV"
```

**Example 3:**

```
Input: 9
Output: "IX"
```

**Example 4:**

```
Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

**Example 5:**

```
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

#### 我的解决方法	

##### 2019.05.15

​	我的思路：蠢方法，从头条件判断到尾，写的时候我的改进思路是把每次循环封装起来

```javascript
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


```

##### 	别人的思路：

​	比封装更优美，两个字：牛逼。和我的比较时间，空间复杂度都差不多，但是优美多了

```javascript
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
```

