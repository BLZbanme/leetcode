from typing import List

# class Solution:
#     map = {
#             0: "Gold Medal",
#             1: "Silver Medal",
#             2: "Bronze Medal"
#         }
    
#     def findRelativeRanks(self, score: List[int]) -> List[str]:
#         N = len(score)
#         copyArr = [{'val': score[i], 'index': i} for i in range(N)]
#         copyArr.sort(key=lambda a: a['val'], reverse=True)

#         res = [None] * N
#         for i in range(N):
#             index = copyArr[i]['index']
#             res[index] = self.map[i] if i < 3 else str(i + 1)
#         return res

class Solution:
    map = {
            0: "Gold Medal",
            1: "Silver Medal",
            2: "Bronze Medal"
        }
    
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        N = len(score)
        copyArr = [(score[i], i) for i in range(N)]
        copyArr.sort(reverse=True)
        res = [None] * N
        for i in range(N):
            index = copyArr[i][1]
            res[index] = self.map[i] if i < 3 else str(i + 1)
        return res



print(Solution().findRelativeRanks([10,3,8,9,4]))
# print(Solution().findRelativeRanks([5,4,3,2,1]))