You're given strings `J` representing the types of stones that are jewels, and `S`representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

**Example 1:**

```
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

**Example 2:**

```
Input: J = "z", S = "ZZ"
Output: 0
```

##### 2019.06.03

##### 	我的思路：

​	遍历j一次，把字符全部放入一个set中，然后遍历一次s 判断s中的字符存在于set中的次数。

​	时间复杂度O(J+S)

```javascript
var numJewelsInStones = function(J, S) {
  let set = new Set(J.split(""));
  let res = 0;
  for(let i = 0; i < S.length; i++){
    if(set.has(S[i])){
        res++;
    }
  }  
  return res;
};
```
