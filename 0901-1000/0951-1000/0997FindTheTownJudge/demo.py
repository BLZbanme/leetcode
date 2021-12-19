from typing import List
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1 and not trust:
            return 1

        graph = [set() for _ in range(n + 1)]
        graph2 = [set() for _ in range(n + 1)]
        man = -1
        for x, y in trust:
            graph[y].add(x)
            graph2[x].add(y)
            if len(graph[y]) == n - 1:
                man = y
        if man == -1:
            return -1
        return man if not len(graph2[man]) else -1

print(Solution().findJudge(1, []))