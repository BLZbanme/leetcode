International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: `"a"` maps to `".-"`, `"b"` maps to `"-..."`, `"c"` maps to `"-.-."`, and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

```
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

```
Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
```

**Note:**

- The length of `words` will be at most `100`.
- Each `words[i]` will have length in range `[1, 12]`.
- `words[i]` will only consist of lowercase letters.

##### 2019.06.06

##### 	我的思路：

​	用一个map存储'a'-'z'对应的莫斯密码。

​	对于words中的每个字符串生产对应得密码，放入一个set中，最后返回set的大小

```javascript
var uniqueMorseRepresentations = function(words) {
    const map = new Map(
        [
            ["a", ".-"],
            ["b", "-..."],
            ["c", "-.-."],
            ["d", "-.."],
            ["e", "."],
            ["f", "..-."],
            ["g", "--."],
            ["h", "...."],
            ["i", ".."],
            ["j", ".---"],
            ["k", "-.-"],
            ["l", ".-.."],
            ["m", "--"],
            ["n", "-."],
            ["o", "---"],
            ["p", ".--."],
            ["q", "--.-"],
            ["r", ".-."],
            ["s", "..."],
            ["t", "-"],
            ["u", "..-"],
            ["v", "...-"],
            ["w", ".--"],
            ["x", "-..-"],
            ["y", "-.--"],
            ["z", "--.."]
        ]
    );
    let set = new Set();
    let tmp;
    for(let i = 0; i < words.length; i++){
        tmp = '';
        for(let j = 0; j < words[i].length; j++){
            tmp += map.get(words[i][j]);
        }
        set.add(tmp);
    }
    return set.size;
};
```

##### 别人的思路：

##### 	优化：

​	用数组存储对应的莫斯密码。根据字符与'a'的编码差来得到数组下标。

```javascript
var uniqueMorseRepresentations = function(words) {
    const arr = [
        ".-","-...", "-.-.", "-..", ".", "..-.","--.", "....",
        "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
        "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
    ]
    let set = new Set();
    let tmp;
    for(let i = 0; i < words.length; i++){
        tmp = '';
        for(let j = 0; j < words[i].length; j++){
            tmp += arr[words[i][j].charCodeAt() - 'a'.charCodeAt()];
        }
        set.add(tmp);
    }
    return set.size;
};
```

