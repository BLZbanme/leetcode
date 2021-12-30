from typing import List
# class Solution:
#     def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
#         hand.sort()
#         maxVal = max(hand)
#         dp = [0] * (maxVal + 1)
#         for item in hand:
#             dp[item] += 1
#         for i in range(0, maxVal + 1):
#             if not dp[i]:
#                 continue
#             else:
#                 while dp[i]:
#                     if i + groupSize - 1 > maxVal:
#                         return False
#                     for j in range(groupSize):
#                         if not dp[i + j]:
#                             return False
#                         else:
#                             dp[i + j] -= 1
#         return True

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        hand.sort()
        maxVal = max(hand)
        cnt = Counter(hand)
        for item in hand:
            if cnt.get(item):
                while cnt.get(item):
                    if item + groupSize - 1 > maxVal:
                        return False
                    for j in range(groupSize):
                        if not cnt[item + j]:
                            return False
                        else:
                            cnt[item + j] -= 1
        return True

print(Solution().isNStraightHand([1,2,3,6,2,3,4,7,8], 3))
print(Solution().isNStraightHand([1,2,3,4,5], 4))