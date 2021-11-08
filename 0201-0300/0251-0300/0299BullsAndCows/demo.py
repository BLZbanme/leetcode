class Solution1:
    def getHint(self, secret: str, guess: str) -> str:
        N = len(secret)
        arrA = [0] * 10
        arrB = [0] * 10
        bullsCount = 0
        for index in range(N):
            if secret[index] != guess[index]:
                arrA[int(secret[index])] += 1
                arrB[int(guess[index])] += 1
            else:
                bullsCount += 1

        cowsCount = 0
        for index in range(10):
            cowsCount += min(arrA[index], arrB[index])

        return f'{bullsCount}A{cowsCount}B'

class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        arrA = [0] * 10
        arrB = [0] * 10
        bullsCount = 0
        for s, g in zip(secret, guess):
            if s != g:
                arrA[int(s)] += 1
                arrB[int(g)] += 1
            else:
                bullsCount += 1

        cowsCount = sum(min(a, b) for a, b in zip(arrA, arrB))

        return f'{bullsCount}A{cowsCount}B'


print(Solution().getHint("1807", "7810")) #1A3B
print(Solution().getHint("1123", "0111")) #1A1B
print(Solution().getHint("1", "0")) #0A0B
print(Solution().getHint("1", "1")) #1A0B