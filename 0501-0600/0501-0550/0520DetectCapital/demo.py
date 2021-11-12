
Acode = ord('A')
Zcode = ord('Z')

class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if isUpperCode(word[0]):
            tmp = list(word)[1:]
            return (not filter(tmp, isUpperCode)) or (not filter(tmp, isLowwerCode))
        else:
            return not filter(word, isUpperCode)

def filter(list, func):
    return len([x for x in list if func(x)])

def isUpperCode(c):
    cCode = ord(c)
    return cCode >= Acode and cCode <= Zcode

def isLowwerCode(c):
    cCode = ord(c)
    return cCode > Zcode or cCode < Acode
                
print(Solution().detectCapitalUse("FlaG")) #False
print(Solution().detectCapitalUse("USA")) #True
