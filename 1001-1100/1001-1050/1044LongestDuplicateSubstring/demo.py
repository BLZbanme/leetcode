class Solution:
    def longestDupSubstring(self, s: str) -> str:
        P = 1313131
        N = len(s)
        self.h = [0] * (N + 10)
        self.p = [0] * (N + 10)
        self.p[0] = 1
        for i in range(N):
            self.p[i + 1] = self.p[i] * P
            self.h[i + 1] = self.h[i] * P + (ord(s[i]) - ord('a'))

        res = ''

        lo, hi = 0, N
        while lo < hi:
            mid = lo + hi + 1 >> 1
            t = self.check(s, mid)
            if t:
                lo = mid
            else:
                hi = mid - 1
            res = t if len(t) > len(res) else res
        return res

    def check(self, s, length):
        N = len(s)
        theSet = set()
        i = 1
        while i + length <= N + 1:
            j = i + length - 1
            cur = self.h[j] - self.h[i - 1] * self.p[j - i + 1]
            if cur in theSet:
                return s[i - 1:j]
            theSet.add(cur)
            i += 1
        return ""