class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        aCode = ord('a')
        N = len(s)
        arrS = [0] * 26
        arrG = [0] * 26
        count = 0
        for (x, y) in zip(s, goal):
            arrS[ord(x) - aCode] += 1
            arrG[ord(y) - aCode] += 1
            if (x != y):
                count += 1 

        if max([abs(x - y) for (x, y) in zip(arrS,arrG)]) != 0:
            return False

        return count == 2 or (count == 0 and  max(arrS) >= 2)

print(Solution().buddyStrings("abcaa", "abcbb"))