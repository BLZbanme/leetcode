# 925. Long Pressed Name

Your friend is typing his `name` into a keyboard. Sometimes, when typing a character `c`, the key might get *long pressed*, and the character will be typed 1 or more times.

You examine the `typed` characters of the keyboard. Return `True` if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

**Example 1:**

```
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
```

**Example 2:**

```
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
```

**Example 3:**

```
Input: name = "leelee", typed = "lleeelee"
Output: true
```

**Example 4:**

```
Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.
```

 

**Constraints:**

- `1 <= name.length <= 1000`
- `1 <= typed.length <= 1000`
- The characters of `name` and `typed` are lowercase letters.



#### 2020.10.21

#### 	我的思路：

蠢方法

```javascript
function isLongPressedName(name: string, typed: string): boolean {
    const queue1: Array<obj> = []
    const queue2: Array<obj> = []
    helper(queue1, name)
    helper(queue2, typed)
    if (queue1.length != queue2.length) {
        return false;
    }
    for (let i = 0; i < queue1.length; i++) {
        if (queue1[i].val != queue2[i].val || queue1[i].num > queue2[i].num) {
            return false;
        }
    }
    return true;
};

class obj {
    public val: string
    public num: number

    constructor(val: string, num: number) {
        this.val = val;
        this.num = num;
    }
}

function helper(arr: Array<obj>, str: string) {
    for (let i = 0; i < str.length; i++) {
        if (arr.length && arr[arr.length - 1].val == str[i]) {
            arr[arr.length - 1].num++;
        }
        else {
            arr.push(new obj(str[i], 1))
        }
    }
}
```

#### 别人的思路：

双指针

```typescript
function isLongPressedName(name: string, typed: string): boolean {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        }
        else if (j > 0 && typed[j] == typed[j - 1]) {
            j++;
        }
        else {
            return false;
        }
    }
    return i === name.length;
}
```

