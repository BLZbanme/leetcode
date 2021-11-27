# import random
# class Solution:

#     def __init__(self, m: int, n: int):
#         self.m = m
#         self.n = n
#         self.reset()                                     

#     def flip(self) -> List[int]:
#         tmp = random.randint(0, len(self.set) - 1)
#         value = self.set.pop(tmp)
#         return [value // self.n, value % self.n]

#     def reset(self) -> None:
#         self.set = [x for x in range(self.m * self.n)]
#         return

import random

class Solution:

    def __init__(self, m, n):
        self.m = m
        self.n = n
        self.total = m * n
        self.map = {}
    
    def flip(self):
        x = random.randint(0, self.total - 1)
        self.total -= 1
        idx = self.map.get(x, x)
        self.map[x] = self.map.get(self.total, self.total)
        return [idx // self.n, idx % self.n]

    def reset(self):
        self.total = self.m * self.n
        self.map.clear()