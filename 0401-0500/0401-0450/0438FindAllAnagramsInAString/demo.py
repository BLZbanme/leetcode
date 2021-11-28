from typing import List

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        result = []
        N = len(s)
        M = len(p)
        if N < M:
            return result

        map = [0] * 26
        allZero = [0] * 26
        aCode = ord('a')
        for c in p:
            map[ord(c) - aCode] += 1

        i = 0
        while i < M:
            map[ord(s[i]) - aCode] -= 1
            i += 1

        if map == allZero:
            result.append(0)
        while i < N:
            map[ord(s[i - M]) - aCode] += 1
            map[ord(s[i]) - aCode] -= 1
            i += 1
            if map == allZero:
                result.append(i - M)
                
        return result

def checkAllZero(list):
    return list == [0] * 26

Solution().findAnagrams("cbaebabacd", "abc")