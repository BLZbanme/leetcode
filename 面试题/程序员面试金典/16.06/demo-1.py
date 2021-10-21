class Solution:
    def smallestDifference(self, a: List[int], b: List[int]) -> int:
        a.sort()
        b.sort()
        m = len(a)
        n = len(b)
        i, j, diff = 0, 0, 2147483647
        while i < m and j < n:
            diff = min(diff, abs(a[i] - b[j]))
            if a[i] < b[j]:
                i += 1
            else:
                j += 1
        return diff
