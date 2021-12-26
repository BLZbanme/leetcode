from typing import List
class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        textArr = text.split(' ')
        i = 0
        N = len(textArr)
        res = []
        while i < N - 2:
            if textArr[i] == first and textArr[i + 1] == second:
                res.append(textArr[i + 2])
            i += 1
        return res

print(Solution().findOcurrences("alice is a good girl she is a good student", "a", "good"))