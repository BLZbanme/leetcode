class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        n2Str = nCount(n)
        tmp = 1
        while tmp <= 10 ** 9:
            if nCount(tmp) == n2Str:
                return True
            tmp <<= 1
        return False
            

def nCount(n):
    tmp = n
    arr = [0] * 10
    while tmp:
        arr[tmp % 10] += 1
        tmp //= 10
    return '-'.join(map(lambda x: str(x), arr))

print(Solution().reorderedPowerOf2(10))