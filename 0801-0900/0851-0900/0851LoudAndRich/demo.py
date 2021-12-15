from typing import List
class Solution:
    def loudAndRich(self, richer: List[List[int]], quiet: List[int]) -> List[int]:
        N = len(quiet)
        graph = [[] for _ in range(N)]
        for start, end in richer:
            graph[end].append(start)

        self.quiet = quiet  
        self.graph = graph
        self.answer = [0] * N
        self.visited = [0] * N

        for i in range(N):
            if self.visited[i]:
                continue
            self.dfs(i)
        
        return self.answer

    def dfs(self, srcIndex):
        self.visited[srcIndex] = 1
        minVal = self.quiet[srcIndex]
        minIndex = srcIndex
        list = self.graph[srcIndex]

        for item in list:
            if self.visited[item]:
                (curVal, curIndex) = (self.quiet[self.answer[item]], self.answer[item])
            else:
                (curVal, curIndex) = self.dfs(item)
            if curVal < minVal:
                minVal = curVal
                minIndex = curIndex
        self.answer[srcIndex] = minIndex
        return (minVal, minIndex)

print(Solution().loudAndRich([[0, 1]], [0, 1]))#[0, 0]

print(Solution().loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]))
#[5,5,2,5,4,5,6,7]

print(Solution().loudAndRich([], [0]))#[0]


