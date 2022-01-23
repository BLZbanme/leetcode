from collections import defaultdict
from heapq import heappop, heappush, heapreplace


class StockPrice:

    def __init__(self):
        self.now = 0
        self.max = []
        self.min = []
        self.map = defaultdict(int)
        self.maxCount = defaultdict(int)
        self.minCount = defaultdict(int)

    def update(self, timestamp: int, price: int) -> None:
        if timestamp >= self.now:
            self.now = timestamp
            self.price = price
        
        tmp = self.map.get(timestamp)
        if tmp:
            self.maxCount[tmp] += 1
            self.minCount[tmp] += 1
        self.map[timestamp] = price
        heappush(self.max, -price)
        heappush(self.min, price)
        

    def current(self) -> int:
        return self.price

    def maximum(self) -> int:
        while True:
            tmp = -self.max[0]
            if not self.maxCount[tmp]:
                return tmp
            else:
                heappop(self.max)
                self.maxCount[tmp] -= 1

    def minimum(self) -> int:
        while True:
            tmp = self.min[0]
            if not self.minCount[tmp]:
                return tmp
            else:
                heappop(self.min)
                self.minCount[tmp] -= 1
sp = StockPrice()
print(sp.update(1, 2))
print(sp.update(1, 1))
print(sp.maximum())
print(sp.update(1, 3))
print(sp.minimum())


# sp = StockPrice()
# print(sp.update(1, 10))
# print(sp.update(2, 5))
# print(sp.current())
# print(sp.maximum())
# print(sp.update(1, 3))
# print(sp.maximum())