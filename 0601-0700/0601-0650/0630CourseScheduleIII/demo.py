from typing import List
import heapq
class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        courses.sort(key=lambda a: a[1])
        q = list()
        now = 0
        for duration, end in courses:
            if now + duration <= end:
                now += duration
                heapq.heappush(q, -duration)
            elif q and -q[0] > duration:
                now -= -q[0] - duration
                heapq.heappop(q)
                heapq.heappush(q, -duration)
        return len(q)

print(Solution().scheduleCourse([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]])) #3

print(Solution().scheduleCourse([[1,2]])) #1

print(Solution().scheduleCourse([[3,2],[4,3]])) #0