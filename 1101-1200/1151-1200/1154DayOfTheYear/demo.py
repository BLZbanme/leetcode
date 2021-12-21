class Solution:
    monthDay = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    def dayOfYear(self, date: str) -> int:
        [year, month, day] = date.split('-')
        year = int(year)
        month = int(month)
        day = int(day)
        res = self.monthDay[month - 1] + day
        if checkRun(year) and month > 2:
            res += 1
        return res
        
def checkRun(year):
    if not year % 4:
        if not year % 100:
            return not year % 400
        return True

print(Solution().dayOfYear("2004-03-01"))
print(Solution().dayOfYear("2000-03-01"))