from heapq import heappop, heappush


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        M, N = len(nums1), len(nums2)
        res = []
        pq = [(nums1[i] + nums2[0], i, 0) for i in range(min(k, M))]
        while pq and len(res) < k:
            _, i, j = heappop(pq)
            res.append([nums1[i], nums2[j]])
            if j + 1 < N:
                heappush(pq, (nums1[i] + nums2[j + 1], i, j + 1))
        return res
