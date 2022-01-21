from collections import defaultdict, deque

class Solution:
    def minJumps(self, arr: List[int]) -> int:
        idxSameValue = defaultdict(list)
        for i, a in enumerate(arr):
            idxSameValue[a].append(i)
        visited = set()
        q = deque()
        q.append([0, 0])
        visited.add(0)
        while q:
            idx, step = q.popleft()
            if idx == len(arr) - 1:
                return step
            v = arr[idx]
            step += 1
            for i in idxSameValue[v]:
                if i not in visited:
                    visited.add(i)
                    q.append([i, step])
            del idxSameValue[v]
            if idx + 1 < len(arr) and (idx + 1) not in visited:
                visited.add(idx + 1)
                q.append([idx + 1, step])
            if idx - 1 >= 0 and (idx - 1) not in visited:
                visited.add(idx - 1)
                q.append([idx - 1, step])