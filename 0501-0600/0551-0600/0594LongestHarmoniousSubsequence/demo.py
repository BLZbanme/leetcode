class Solution:
    def findLHS(self, nums: List[int]) -> int:
        map = dict()
        for num in nums:
            map[num] = map.get(num, 0) + 1
        maxVal = 0
        for key in map:
            countNext = map.get(key + 1, 0)
            if countNext:
                maxVal = max(maxVal, countNext + map[key])
        return maxVal

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        maxVal = 0
        map = dict()
        for num in nums:
            map[num] = map.get(num, 0) + 1
            countNext = map.get(num + 1, 0)
            countPre = map.get(num - 1, 0)
            bigger = max(countNext, countPre)
            if bigger:
                maxVal = max(maxVal, map[num] + bigger)

        return maxVal