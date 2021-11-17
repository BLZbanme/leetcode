class Solution:
    def maxProduct(self, words: List[str]) -> int:
        maskMap = dict()
        if not words or not len(words):
            return 0
        N = len(words)
        valueList = [0] * N
        aCode = ord('a')
        for i in range(N):
            word = words[i]
            for s in word:
                valueList[i] |= 1 << (ord(s) - aCode)
            if (len(word) >= maskMap.get(valueList[i], 0)):
                maskMap[valueList[i]] = len(word)
        
        maxVal = 0
        for mask1 in maskMap:
            for mask2 in maskMap:
                if (mask1 & mask2 == 0) and maskMap[mask1] * maskMap[mask2] > maxVal:
                    maxVal = maskMap[mask1] * maskMap[mask2]

        return maxVal