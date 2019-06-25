#  49.Group Anagrams

Given an array of strings, group anagrams together.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note:**

- All inputs will be in lowercase.
- The order of your output does not matter.

##### 2019.06.25

##### 	我的思路：

​	思路，把字符串排字典序，字典序相同的就属于同一数组中。最后返回所有的这些数组。

​	 好久没写跟标准答案几乎一样的解了~，最高的答案最后一步声明个list，然后把map的values放到list里面，但是由于我是每次都直接把对应的数组对象放在结果list里面了，所以直接返回list就行

​	时间复杂度O(n * m)，n是因为遍历字符串数组所有字符串， m是字符串的长度。

#### 	注：

​	还有自助借助整型数组判断的方法，我个人感觉不好使，暂时先不写。

```javascript
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];
    for(let str of strs){
        let strSort = [...str].sort().join("");
        if(!map.has(strSort)){
            let arr = [str];
            map.set(strSort, arr);
            res.push(arr);
        }else{
            map.get(strSort).push(str);
        }
    }
    return res;
};
```

