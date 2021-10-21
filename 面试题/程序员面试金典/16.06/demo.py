class Solution:
    def smallestDifference(self, a: List[int], b: List[int]) -> int:
        a.sort()
        b.sort()
        diff = 2147483647
        for aItem in a:
            index = binarySearch(b, aItem)
            if index < len(b):
                diff = min(abs(aItem - b[index]), diff)
            if index > 0:
                diff = min(abs(aItem - b[index - 1]), diff)
        return diff

def binarySearch(list: List[int], target: int) -> int:
    N = len(list)
    lo = 0
    hi = N - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if list[mid] < target:
            lo = mid + 1
        elif list[mid] > target:
            hi = mid - 1
        else:
            return mid
    return lo
