class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        res = 0
        N = len(nums)
        for i in range(N):
            for j in range(i + 1, N):
                for k in range(j + 1, N):
                    for l in range(k + 1, N):
                        if nums[i] + nums[j] + nums[k] == nums[l]:
                            res += 1
        return res