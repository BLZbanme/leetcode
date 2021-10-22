# 1177. Can Make Palindrome from Substring

You are given a string `s` and array `queries` where `queries[i] = [lefti, righti, ki]`. We may rearrange the substring `s[lefti...righti]` for each query and then choose up to `ki` of them to replace with any lowercase English letter.

If the substring is possible to be a palindrome string after the operations above, the result of the query is `true`. Otherwise, the result is `false`.

Return a boolean array `answer` where `answer[i]` is the result of the `ith` query `queries[i]`.

Note that each letter is counted individually for replacement, so if, for example `s[lefti...righti] = "aaa"`, and `ki = 2`, we can only replace two of the letters. Also, note that no query modifies the initial string `s`.

 

**Example :**

```
Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = "d", is palidrome.
queries[1]: substring = "bc", is not palidrome.
queries[2]: substring = "abcd", is not palidrome after replacing only 1 character.
queries[3]: substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4]: substring = "abcda", could be changed to "abcba" which is palidrome.
```

**Example 2:**

```
Input: s = "lyb", queries = [[0,1,0],[2,2,1]]
Output: [false,true]
```

 

**Constraints:**

- `1 <= s.length, queries.length <= 105`
- `0 <= lefti <= righti < s.length`
- `0 <= ki <= s.length`
- `s` consists of lowercase English letters.



#### 2021.10.23

#### 	我的思路：

第一遍，理解错题意，以为字母顺序不能换，但我这个dp其实很厉害！

```python
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        N = len(s)
        dp = [[0] * N for x in range(N)]
        for i in range(N):
            if i + 1 < N:
                dp[i][i + 1] = (0 if s[i] == s[i + 1] else 1)
            for j in range(1, i + 1):
                if i + j >= N or i - j < 0:
                    break
                dp[i - j][i + j] = dp[i - j + 1][i + j - 1] + (0 if s[i - j] == s[i + j] else 1)
                if i + j >= N - 1:
                    break
                dp[i - j][i + 1 + j] = dp[i - j + 1][i + j] + (0 if s[i - j] == s[i + 1 + j] else 1)
        
        M = len(queries)
        result = [True] * M
        for index in range(M):
            [left, right, k] = queries[index]
            result[index] = True if dp[left][right] <= k else False

        return result
```

##### 理清题意后：

再次忘记前缀和，导致超时。但是顿悟奇数次数的项向下取整小于等于k来判断能否回文，值得记忆！

```python
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        N = len(s)
        dp = [[0] * N for x in range(N)]
        for i in range(N):
            oneMap = dict()
            twoMap = dict()
            oneMap[s[i]] = 1
            if i + 1 < N:
                twoMap[s[i]] = 1
                twoMap[s[i + 1]] = twoMap.get(s[i + 1], 0) + 1
                if s[i] != s[i + 1]:
                    dp[i][i + 1] = 1
            for j in range(1, i + 1):
                if i + j >= N or i - j < 0:
                    break
                dp[i - j][i + j] = dp[i - j + 1][i + j - 1]
                leftOne = oneMap.get(s[i - j], 0)
                leftDiff = (1 if leftOne % 2 == 0 else -1)
                oneMap[s[i - j]] = leftOne + 1

                rightOne = oneMap.get(s[i + j], 0)
                rightDiff = (1 if rightOne % 2 == 0 else -1)
                oneMap[s[i + j]] = rightOne + 1

                dp[i - j][i + j] += leftDiff + rightDiff
                
                if i + j >= N - 1:
                    break
                dp[i - j][i + 1 + j] = dp[i - j + 1][i + j]
                leftOne = twoMap.get(s[i - j], 0)
                leftDiff = (1 if leftOne % 2 == 0 else -1)
                twoMap[s[i - j]] = leftOne + 1

                rightOne = twoMap.get(s[i + j + 1], 0)
                rightDiff = (1 if rightOne % 2 == 0 else -1)
                twoMap[s[i + 1 + j]] = rightOne + 1

                dp[i - j][i + 1 + j] += leftDiff + rightDiff

        M = len(queries)
        result = [True] * M
        for index in range(M):
            [left, right, k] = queries[index]
            result[index] = True if dp[left][right] <= k * 2 else False

        return result
```

#### 别人的思路

使用前缀和来判断出现的次数

```python
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        N = len(s)
        dp = [[0] * 26 for x in range(N + 1)]
        for i in range(1, N + 1):
            dp[i] = dp[i - 1].copy()
            dp[i][ord(s[i - 1]) - ord('a')] += 1

        
        M = len(queries)
        result = [True]  *  M
        for index in range(M):
            [left, right, k] = queries[index]
            odd = 0
            for j in range(26):
                odd += (dp[right + 1][j] - dp[left][j]) % 2
            result[index] = True if odd < (k + 1) * 2 else False
        return result
```

