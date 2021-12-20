from typing import List
class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        heaters.sort()
        N = len(heaters)
        res = 0
        for house in houses:
            index = binarySearch(heaters, house)
            if index < N and heaters[index] == house:
                cur = 0
            else:
                if index == N:
                    cur = abs(house - heaters[N - 1])
                elif index > 0 and index < N:
                    cur = min(abs(house - heaters[index]), abs(house - heaters[index - 1]))
                else:
                    cur = abs(house - heaters[0])
            res = max(res, cur)
        return res

def binarySearch(list, target):
    lo = 0
    hi = len(list) - 1
    while lo <= hi:
        mid = lo + ((hi - lo) >> 1)
        if list[mid] == target:
            return mid
        elif list[mid] > target:
            hi = mid - 1
        else:
            lo = mid + 1
    return lo

print(Solution().findRadius([1,2,3,4], [1,4]))