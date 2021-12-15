from typing import List
class Solution:
    def loudAndRich(self, richer: List[List[int]], quiet: List[int]) -> List[int]:
        N = len(quiet)
        graph = [[] for _ in range(N)]
        for start, end in richer:
            graph[end].append(start)

        answer = [-1] * N

        def dfs(x):
            if answer[x] != -1:
                return
            answer[x] = x
            for y in graph[x]:
                dfs(y)
                if quiet[answer[y]] <quiet[answer[x]]:
                    answer[x] = answer[y]
        
        for i in range(N):
            dfs(i)
        return answer

print(Solution().loudAndRich([[0, 1]], [0, 1]))#[0, 0]

print(Solution().loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]))
#[5,5,2,5,4,5,6,7]

print(Solution().loudAndRich([], [0]))#[0]


