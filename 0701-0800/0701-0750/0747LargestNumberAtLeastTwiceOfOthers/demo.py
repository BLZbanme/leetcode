from typing import List
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        first, second, index = 0, 0, 0
        for i, num in enumerate(nums) :
            if num >= first:
                second = first
                first = num
                index = i
            elif num > second:
                second = num
        return index if first >= second * 2 else -1

print(Solution().dominantIndex([3, 6, 1, 0]))