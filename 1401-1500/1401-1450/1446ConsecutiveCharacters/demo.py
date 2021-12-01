class Solution:
    def maxPower(self, s: str) -> int:
        N = len(s)
        i, j = 0, 0
        res = 0
        while i < N:
            while i < N and s[i] == s[j]:                
                i += 1
            res = max(res, i - j)
            j = i
        return res
            