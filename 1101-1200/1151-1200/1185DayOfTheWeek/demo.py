class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
        days = 0
        days += 365 * (year - 1971) + (year - 1969) // 4
        days += sum(monthDays[:month - 1])
        if (not year % 400 or (not year % 4 and year % 100)) and month >= 3:
            days += 1
        days += day
        return week[(days + 3) % 7]