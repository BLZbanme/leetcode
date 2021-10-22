from typing import List

#理解错了题意，白给！
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

Solution().canMakePaliQueries("abcda", [[0, 3, 1]])