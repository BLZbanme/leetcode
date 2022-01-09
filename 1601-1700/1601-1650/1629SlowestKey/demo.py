class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        N = len(releaseTimes)
        tmpVal = 0
        res = ''
        for i in range(N):
            if not i:
                tmp = releaseTimes[i]
            else:
                tmp = releaseTimes[i] - releaseTimes[i - 1]
            if tmpVal < tmp:
                tmpVal = tmp
                res = keysPressed[i]
            if tmpVal == tmp:
                res = max(res, keysPressed[i])
        return res