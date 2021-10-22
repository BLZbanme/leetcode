from typing import List

class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        N = len(s)
        dp = [[0] * 26 for x in range(N + 1)]
        for i in range(1, N + 1):
            dp[i] = dp[i - 1].copy()
            dp[i][ord(s[i - 1]) - ord('a')] += 1

        
        M = len(queries)
        result = [True]  *  M
        for index in range(M):
            [left, right, k] = queries[index]
            odd = 0
            for j in range(26):
                odd += (dp[right + 1][j] - dp[left][j]) % 2
            result[index] = True if odd < (k + 1) * 2 else False
        return result

print(Solution().canMakePaliQueries("abcda",
[[0,4,1]]))

print(Solution().canMakePaliQueries("hunu",
[[1,1,1],[2,3,0],[3,3,1],[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]))
#[true,false,true,true,true,true,true,false,true,false,true,true,true]
#[True, False, True, True, True, True, True, False, True, False, True, True, True]