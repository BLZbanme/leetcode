# 160. Intersection of Two Linked Lists

Given an input string, reverse the string word by word.

 

**Example 1:**

```
Input: "the sky is blue"
Output: "blue is sky the"
```

**Example 2:**

```
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

**Example 3:**

```
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

 

**Note:**

- A word is defined as a sequence of non-space characters.
- Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
- You need to reduce multiple spaces between two words to a single space in the reversed string.

 

**Follow up:**

For C programmers, try to solve it *in-place* in *O*(1) extra space.

##### 2019.08.30

##### 	我的思路：

​		直接按空白字符划分数组，然后去除空项

````javascript
var reverseWords = function(s) {
    let arr = s.split(" ").reverse();
    return arr.filter(e => e).join(" ");
};
````

​		小改进：利用正则效率高一些

```javascript
var reverseWords = function(s) {
    return s.split(/\s+/).filter(e => e).reverse().join(" ");
};
```

##### 别人的写法:

​		我觉得这种解题思路应该才是面试官想要看到的

1. 把整个字符串转成数组，并逆序
2. 把每个单词再转回来
3. 去空	

````javascript
var reverseWords = function(s) {
    if (!s) {
        return null;
    }

    let arr = s.split("");
    const N = s.length;
    reverse(arr, 0, N - 1);
    reverseAllWords(arr, N);
    return cleanSpaces(arr, N);
}

function cleanSpaces(array, len) {
    let i = 0;
    let j = 0;
    while (j < len) {
        while (j < len && array[j] === " ") {
            j++;
        }

        while (j < len && array[j] !== " ") {
            array[i++] = array[j++];
        }

        while (j < len && array[j] === " ") {
            j++;
        }

        if (j < len) {
            array[i++] =  " ";
        }
    }
    return array.slice(0, i).join("");
}

function reverseAllWords(array, len) {
    let i = 0;
    let j = 0;
    while (i < len) {
        while (i < j || (i < len && array[i] === " ")) {
            i++;
        }
        while (j < i || (j < len && array[j] !== " ")) {
            j++;
        }
        reverse(array, i, j - 1);
    }
}

function reverse(array, start, end) {
    while (start < end) {
        [array[start++], array[end--]] = [array[end], array[start]];
    }
}
````

