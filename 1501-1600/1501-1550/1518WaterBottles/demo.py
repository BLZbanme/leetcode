class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        count = 0
        tmp = numBottles
        remain = 0
        while tmp + remain >= numExchange:
            count += tmp
            tmp += remain
            remain = tmp % numExchange
            tmp //= numExchange

        return count + tmp

print(Solution().numWaterBottles(9, 3))
print(Solution().numWaterBottles(15, 4))