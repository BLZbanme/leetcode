from typing import List

class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        N = len(s)
        min, max = 0, N
        result = []
        for c in s:
            if c == 'D':
                result.append(max)
                max -= 1
            else:
                result.append(min)
                min += 1
        result.append(min)
        return result

print(Solution().diStringMatch('IDID'))
print(Solution().diStringMatch('III'))
print(Solution().diStringMatch('DDI'))