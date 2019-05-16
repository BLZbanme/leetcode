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

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**

```
Input: "III"
Output: 3
```

**Example 2:**

```
Input: "IV"
Output: 4
```

**Example 3:**

```
Input: "IX"
Output: 9
```

**Example 4:**

```
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 5:**

```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

我的解决方法	

##### 2019.05.16

​	我的思路：

​	方法1：遍历字符串，设置3个开关 one,ten,hundred，来判断是否有900,400,90,40,9,4等。时间复杂度O(n),但是采用的是先加，再减两倍这种思路，而且判断语句过多。此方法不可取!

```javascript
var romanToInt = function(s) {
    let strArray = s.split('');
    let one = false;
    let ten = false;
    let hundred = false;
    let result = 0;
    for(let i = 0; i < strArray.length; i++){
        switch(strArray[i]){
            case 'M':
                if(hundred){
                    result -= 200;
                    hundred = false;
                }
                result += 1000;
                break; 
            case 'D':
                if(hundred){
                    result -= 200;
                }
                result += 500;
                break;   
            case 'C':
                if(ten){
                    result -= 20;
                    ten = false;
                }
                hundred = true;
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

```

​	方法2：遍历数组根据是否有前一个字符对应的数值比后一个小来判断是否存在900,400,90,40,9,4等。

时间复杂度O(n)。比方法1代码优美，且逻辑判断较少。

```javascript
let m = new Map();
m.set("I", 1);
m.set("V", 5);
m.set("X", 10);
m.set("L", 50);
m.set("C", 100);
m.set("D", 500);
m.set("M", 1000);
var romanToInt = function(s){
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
```

