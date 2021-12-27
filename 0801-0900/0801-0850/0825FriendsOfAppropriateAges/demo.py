from typing import List
from collections import Counter
class Solution:
    def numFriendRequests(self, ages: List[int]) -> int:
        ages.sort(key=lambda a: -a)
        c = Counter(ages)
        dp = [0] * 121
        res = 0
        for i in range(1, 121):
            dp[i] = c[i] + dp[i - 1]
        
        for j in range(120, 14, -1):
            n = c.get(j, 0)
            if n:
                val = int(j / 2 + 8)
                res += n * (dp[j] - dp[val - 1] - 1)
        
        return res

print(Solution().numFriendRequests([16, 17, 18]))
print(Solution().numFriendRequests([16, 16]))

print(Solution().numFriendRequests([20,30,100,110,120]))
print(Solution().numFriendRequests([73,106,39,6,26,15,30,100,71,35,46,112,6,60,110]))
