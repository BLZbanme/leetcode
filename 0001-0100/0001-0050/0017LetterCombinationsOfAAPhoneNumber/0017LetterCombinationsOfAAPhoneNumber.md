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

#### 2021.03.22

##### redo

```javascript
var letterCombinations = function(digits) {
    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    
    const result = [];
    const length = digits.length;
    const arr = [];

    const dfs = (index) => {
        if (length === index) {
            result.push(arr.join(''));
            return;
        }
        const cur = map.get(digits[index]);
        for (let char of cur) {
            arr.push(char);
            dfs(index + 1);
            arr.pop();
        }
    }
    length && dfs(0);
    return result;
};
```

