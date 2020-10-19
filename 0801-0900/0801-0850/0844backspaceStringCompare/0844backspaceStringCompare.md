# 844. Backspace String Compare

Given two strings `S` and `T`, return if they are equal when both are typed into empty text editors. `#` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

**Example 2:**

```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

**Example 3:**

```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

**Example 4:**

```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

**Note**:

- `1 <= S.length <= 200`
- `1 <= T.length <= 200`
- `S` and `T` only contain lowercase letters and `'#'` characters.

**Follow up:**

- Can you solve it in `O(N)` time and `O(1)` space?



#### 2020.10.20

#### 	我的思路：

用栈

```javascript
var backspaceCompare = function(S, T) {
    const stack1 = [];
    const stack2 = [];
    let i = 0;
    let j = 0;
    const N1 = S.length;
    const N2 = T.length;
    while (i < N1 || j < N2) {
        if (i < N1) {
            if (S[i] != "#") {
                stack1.push(S[i]);
            }
            else {
                stack1.length && stack1.pop();
            }
        }
        if (j < N2) {
            if (T[j] != "#") {
                stack2.push(T[j]);
            }
            else {
                stack2.length && stack2.pop();
            }
        }
        i++;
        j++;
    }
    return stack1.join("") === stack2.join("")
};
```

#### 别人的思路：

逆序，不用栈！

```javascript
var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = 0;
    let skipT = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] == '#') {
                skipS++;
                i--;
            }
            else if (skipS > 0) {
                skipS--;
                i--;
            }
            else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] == '#') {
                skipT++;
                j--;
            }
            else if (skipT > 0) {
                skipT--;
                j--;
            }
            else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (S[i] != T[j]) {
                return false;
            }
        }
        else {
            if (i >= 0 || j >= 0) {
                return false;
            }
        }
        i--;
        j--;
    }
    return true;
}
```
