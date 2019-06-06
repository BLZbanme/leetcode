​	Given *n* pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

​	For example, given *n* = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

##### 2019.05.23

##### 	我的思路：

​	 先生成所有可能的字符串，然后判断字符串是不是符合规则。时间复杂度O(2<sup>2n</sup>n)

```javascript
var generateParenthesis = function(n) {
    if(n == 1){
        return ["()"]
    }
    let arr = ["(", ")"];
    let all = [];
    let tmp = ["(", ")"];
    let l = 2 * n;
    while(l > 3){
        all = [];
        for(let i = 0; i < tmp.length; i++){
            for(let j = 0; j < arr.length; j++){
                all.push(tmp[i] + arr[j]);
            }
        }
        tmp = all;
        l--;
    }
    let result = [];
    for(let i = 0; i < all.length; i++){
        let now = "(" + all[i] + ")";
        if(isValid(now)){
            result.push(now);
        }
    }
    return result;
};

var isValid = function(s) {
    var stack = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] == "("){
            stack++;
        }else {
            stack--;
        }
        if(stack < 0){
            return false;
        }
    }
    return stack === 0;
};
```

##### 别人的写法

​	学习的新套路：

​	回溯，每次生成的序列是满足条件的。O(4<sup>n</sup>/n<sup>1/2</sup>)

```javascript
var generateParenthesis = function(n) {
    let res = [];
    backTrack(res, "", 0, 0, n);
    return res;
}

function backTrack(arr, str, left, right, max){
    if(str.length == max * 2){
        arr.push(str);
        return;
    }
    if(left < max){
        backTrack(arr, str + "(", left + 1, right, max);
    }
    if(right < left){
        backTrack(arr, str + ")", left, right + 1, max);
    }
}
```

​	
