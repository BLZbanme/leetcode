Given an array `A` of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list **(including duplicates)**.  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

**Example 1:**

```
Input: ["bella","label","roller"]
Output: ["e","l","l"]
```

**Example 2:**

```
Input: ["cool","lock","cook"]
Output: ["c","o"]
```

**Note:**

1. `1 <= A.length <= 100`
2. `1 <= A[i].length <= 100`
3. `A[i][j]` is a lowercase letter

##### 2019.06.18

##### 	我的思路：

​	方法1：

​	把每个字符串中出现的每个字符数放入一个数组，再把数组放到一个list中。然后遍历list求每个字符出现的最小值

​	时间复杂度O(n)

```javascript
var commonChars = function(A) {
    let arrayList = [];
    for(let str of A){
        let arr = new Array(26).fill(0);
        for(let i = 0; i < str.length; i++){
            arr[str[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
        arrayList.push(arr);
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        let min = 100;
        for(let j = 0; j < arrayList.length; j++){
            if(arrayList[j][i] < min){
                min = arrayList[j][i];
            }
        }
        for(let k = 0; k < min; k++){
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return res;
};
```

​	方法1的另一种写法，直接在遍历每个字符串的时候比较，而不是最后一次比较

```javascript
var commonChars = function(A){
    let arr = new Array(26).fill(100);
    for(let str of A){
        let tmpArr = new Array(26).fill(0);
        str.split("").forEach((v) => {
            tmpArr[v.charCodeAt() - 'a'.charCodeAt()]++;
        })
        for(let i = 0; i < 26; i++){
            arr[i] = Math.min(arr[i], tmpArr[i]);
        }
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        for(let k = 0; k < arr[i]; k++){
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return res;
}
```

​	方法2：

​	直接用数组的过滤方法，为了判断重复的字符，把已经查到的重复字符赋值为非字符真值

```javascript
var commonChars = function(A){
    let res = A[0].split("");
    for(let i = 1; i < A.length; i++){
        let tmp = A[i].split("");
        res = res.filter(e => tmp.indexOf(e) > -1 ? tmp[tmp.indexOf(e)] = 1 : false);
    }
    return res;
}
```
