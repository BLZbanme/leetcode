class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        tmp = int(num ** 0.5)
        res = 0 
        if tmp ** 2 == num:
            res += tmp
        else:
            tmp += 1
        for i in range(2, tmp):
            if not num % i:
                res += i + (num / i)
        
        return res == num - 1
