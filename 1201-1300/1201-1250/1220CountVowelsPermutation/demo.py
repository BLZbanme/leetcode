


class Solution:
    def countVowelPermutation(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        a, e, i, o, u = 1, 1, 1, 1, 1
        for _ in range(n - 1):
            aPre, ePre, iPre, oPre, uPre = a, e, i, o, u
            a = (uPre + iPre + ePre) % MOD
            e = (aPre + iPre) % MOD
            i = (ePre + oPre) % MOD
            o = iPre % MOD
            u = (oPre + iPre) % MOD
        return (a + e + i + o + u) % MOD
print(Solution().countVowelPermutation(5))

