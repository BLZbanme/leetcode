from typing import List
class Solution:
    CON = 1337

    def superPow(self, a: int, b: List[int]) -> int:
        res = 1
        for e in reversed(b):
            res = res * self.pow(a, e) % self.CON
            a = self.pow(a, 10)
        return res

    def pow(self, x, n):
        res = 1
        while n:
            if n & 1:
                res = res * x % self.CON
            x = x * x % self.CON
            n >>= 1
        return res

print(Solution().superPow(2, [3]))