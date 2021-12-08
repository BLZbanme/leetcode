from typing import List

class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        N = len(nums)
        arr = [0] * (N + 1)
        for i in range(N):
            arr[i + 1] += arr[i] + nums[i]
        dp = [[0] * N for _ in range(3)]
        dp[0][k - 1] = arr[k]
        for i in range(k, N - k + 1):
            dp[0][i] = max(dp[0][i - 1], arr[i + 1] - arr[i - k + 1])

        dp[1][2 * k - 1] = arr[2 * k]
        for i in range(2 * k, N - k + 1):
            dp[1][i] = max(dp[1][i - 1], dp[0][i - k] + arr[i + 1] - arr[i - k + 1])

        dp[2][3 * k - 1] = arr[3 * k]
        for i in range(3 * k, N):
            dp[2][i] = max(dp[2][i - 1], dp[1][i - k] + arr[i + 1] - arr[i - k + 1])

        maxVal = dp[2][N - 1]                    
        m = dp[2].index(maxVal)
        threeSum = maxVal - arr[m + 1] + arr[m - k + 1]
        j = dp[1].index(threeSum)
        i = dp[0].index(threeSum - arr[j + 1] + arr[j - k + 1])
        return [i - k + 1, j - k + 1, m - k + 1]

print(Solution().maxSumOfThreeSubarrays([7,13,20,19,19,2,10,1,1,19], 3))

print(Solution().maxSumOfThreeSubarrays([4,3,2,1], 1))
print(Solution().maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1], 2))
print(Solution().maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1], 2))
