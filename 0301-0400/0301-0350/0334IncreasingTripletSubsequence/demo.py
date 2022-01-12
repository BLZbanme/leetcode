class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        N = len(nums)
        dp = [0] * N
        dp[0] = 1
        for i in range(1, N):
            dp[i] = dp[i - 1]
            for j in range(i - 1, -1, -1):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
                    if dp[i] >= 3:
                        return True
        return False

class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        N = len(nums)
        if N < 3:
            return False
        leftMin = [0] * N
        leftMin[0] = nums[0]
        for i in range(1, N):
            leftMin[i] = min(leftMin[i - 1], nums[i])
        rightMax = [0] * N
        rightMax[N - 1] = nums[N - 1]
        for i in range(N - 2, -1, -1):
            rightMax[i] = max(rightMax[i + 1], nums[i])
        for i in range(1, N - 1):
            if leftMin[i - 1] < nums[i] < rightMax[i + 1]:
                return True
        return False