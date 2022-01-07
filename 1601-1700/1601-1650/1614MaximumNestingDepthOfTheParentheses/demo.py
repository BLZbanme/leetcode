class Solution:
    def maxDepth(self, s: str) -> int:
        res = 0
        count = 0
        for ch in s:
            if ch == '(':
                count += 1
                res = max(res, count)
            elif ch == ')':
                count -= 1
        return res
