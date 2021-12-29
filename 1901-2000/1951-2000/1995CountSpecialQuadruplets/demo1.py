class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        N = len(nums)
        res = 0
        cnt = Counter()
        for c in range(N - 2, 1, -1):
            cnt[nums[c + 1]] += 1
            for a in range(c):
                for b in range(a + 1, c):
                    total = nums[a] + nums[b] + nums[c]
                    if total in cnt:
                        res += cnt[total]
        return res