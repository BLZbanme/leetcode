# 17. Letter Combinations of a Phone Number

#### 问题描述

​	Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

​	A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![pic](1.png)

**Example:**

```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

##### 我的解决方法	

##### 2019.05.20

##### 	我的思路：

​	无话可说，简单的循环。别人的思路也就是把循环别递归

```javascript
var letterCombinations = function(digits) {
    const arr = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ];
    let tmp = [];
    let result = [];
    let nums = digits.split("");
    for(let i = 0; i < nums.length; i++){
        result = []
        let now = arr[nums[i]];
        if(tmp.length != 0){
            for(let i = 0; i < tmp.length; i++){
                for(let j = 0; j < now.length; j++){
                    result.push(tmp[i] + now[j]);
                }
            }
        }else{
            result = arr[nums[i]];
        }
        tmp = result;
    }
    return result;
};
```

