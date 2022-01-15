class Solution:
    def totalMoney(self, n: int) -> int:
        k = n // 7
        r = n % 7
        return k * 28 + (2 * k + r + 1) * r // 2 + k * (k - 1) * 7 // 2


print(Solution().totalMoney(4))
print(Solution().totalMoney(10))
print(Solution().totalMoney(20))