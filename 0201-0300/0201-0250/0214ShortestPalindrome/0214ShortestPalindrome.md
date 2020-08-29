# 214. Shortest Palindrome

Given a string ***s***, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

**Example 1:**

```
Input: "aacecaaa"
Output: "aaacecaaa"
```

**Example 2:**

```
Input: "abcd"
Output: "dcbabcd"
```

#### 2020.08.29

#### 	我的思路：

```javascript
function shortestPalindrome11(s: string): string {
    if (!s) {
        return '';
    }
    const N = s.length;
    let mid = (N - 1) >> 1;
    let thePoint = 0;
    let isOdd = true;
    for (let i = mid; i >= 0; i--) {
        let j = 0;
        for (; j <= i; j++) {
            if (s[i - j] !== s[i + j + 1]) {
                break;
            }
        }
        if (j === i + 1) {
            thePoint = i;
            isOdd = false;
            break;
        }

        j = 1;
        for (; j <= i; j++) {
            if (s[i - j] !== s[i + j]) {
                break;
            }
        }
        if (j === i + 1) {
            thePoint = i;
            break;
        }
    }

    let res = s;
    for (let i = thePoint * 2 + (isOdd ? 1 : 2); i < s.length; i++) {
        res = s[i] + res;
    }

    return res;
};
```

```typescript
function shortestPalindrome(s: string): string {
    const N = s.length;
    for (let i = N; i >= 0; i--) {
        const prefix = s.substring(0, i);
        if (isPalindrome(prefix)) {
            const add = s.substring(i).split('').reverse().join('');
            return add + s;
        }
    }
    return "";
}

function isPalindrome (s: string): boolean {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
```

