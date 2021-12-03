from typing import List
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        fuArr = []
        zhArr = []
        minVal = 100
        for num in nums:
            if num > 0:
                zhArr.append(num)
                minVal = min(minVal, num)
            else:
                fuArr.append(num)
                minVal = min(minVal, -num)
        zhArr.sort()
        fuArr.sort()
        M = len(fuArr)
        if k > M:
            count = sum(zhArr) - sum(fuArr)
            diff = k - M
            if diff & 1:
                return count - minVal * 2
            else:
                return count
        else:
            count = sum(zhArr)
            for i in range(M):
                if i < k:
                    count -= fuArr[i]
                else:
                    count += fuArr[i]
            return count
print(Solution().largestSumAfterKNegations([2,-3,-1,5,-4], 2))