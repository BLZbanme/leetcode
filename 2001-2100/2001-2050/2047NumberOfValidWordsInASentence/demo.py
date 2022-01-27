class Solution:
    def countValidWords(self, sentence: str) -> int:
        arr = sentence.split(" ")
        count = 0
        for item in arr:
            if check(item):
                count += 1
        return count

def check(str):
    if not str:
        return False
    hasLine = False
    hasPoint = False
    for i, ch in enumerate(str):
        if ord("0") <= ord(ch) <= ord("9"):
            return False
        if ch == '-':
            if hasLine or i == 0 or i == len(str) - 1 or( not isChar(str[i - 1]) or  not isChar(str[i + 1])):
                return False
            hasLine = True
        if ch == "." or ch == "!" or ch == ",":
            if hasPoint or i != len(str) - 1:
                return False
            hasPoint = True
    return True

def isChar(str):
    return ord("a") <= ord(str) <= ord("z")