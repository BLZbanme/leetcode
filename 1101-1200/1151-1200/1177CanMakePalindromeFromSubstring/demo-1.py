from typing import List

#没用前缀和，再次失败！
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

print(Solution().canMakePaliQueries("hunu",
[[1,1,1],[2,3,0],[3,3,1],[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]))
#[true,false,true,true,true,true,true,false,true,false,true,true,true]