from typing import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        freqR = Counter(ransomNote)
        freqM = Counter(magazine)
        for key in freqR:
            if freqR[key] > freqM[key]:
                return False
        return True
        