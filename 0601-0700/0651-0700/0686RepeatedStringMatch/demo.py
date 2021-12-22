class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        N = len(a)
        M = len(b)
        k = M // N
        i = 0
        tmp = ''
        while i <= k + 1:
            tmp += a
            if tmp.find(b) != -1:
                return i + 1
            i += 1

        return -1

print(Solution().repeatedStringMatch("abc","cabcabca")) #4
print(Solution().repeatedStringMatch('abcd', 'cdabcdab')) #3
print(Solution().repeatedStringMatch('a', 'aa')) #2
print(Solution().repeatedStringMatch('a', 'a')) #1
print(Solution().repeatedStringMatch("abc", "wxyz")) #-1