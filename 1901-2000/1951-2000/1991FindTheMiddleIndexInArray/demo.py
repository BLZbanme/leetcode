class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        count = sum(nums)
        preCount = 0
        for i in range(len(nums)):
            if (preCount << 1) == count - nums[i]:
                return i
            preCount += nums[i]
        return -1