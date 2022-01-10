class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        N = len(num)
        self.count = 0 
        def dfs(index, preTwo = None, pre = None):
            for i in range(index, N):
                tmp = int(num[index: i + 1])
                if str(tmp) != num[index: i + 1]:
                    return False
                if preTwo is None:
                    self.count += 1
                    if dfs(i + 1, pre, tmp):
                        return True
                    self.count -= 1
                else:
                    if preTwo + pre < tmp:
                        return False
                    if preTwo + pre == tmp:
                        self.count += 1
                        if dfs(i + 1, pre, tmp):
                            return True
                        self.count -= 1
            return self.count >= 3
        return dfs(0)

print(Solution().isAdditiveNumber("199100199"))

print(Solution().isAdditiveNumber("10"))
print(Solution().isAdditiveNumber("112358"))

        