import heapq
class Solution:
    def eatenApples(self, apples: List[int], days: List[int]) -> int:
        ans = 0
        pq = []
        i = 0
        N = len(apples)
        while i < N:
            while pq and pq[0][0] <= i:
                heapq.heappop(pq)
            if apples[i]:
                heapq.heappush(pq, [i + days[i], apples[i]])
            if pq:
                pq[0][1] -= 1
                if pq[0][1] == 0:
                    heapq.heappop(pq)
                ans += 1
            i += 1
        while pq:
            while pq and pq[0][0] <= i:
                heapq.heappop(pq)
            if not pq:
                break
            p = heapq.heappop(pq)
            num = min(p[0] - i, p[1])
            ans += num
            i += num
        return ans