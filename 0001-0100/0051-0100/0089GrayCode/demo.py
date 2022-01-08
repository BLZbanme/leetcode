class Solution:
    def grayCode(self, n: int) -> List[int]:
        res = [0]
        head = 1
        for _ in range(n):
            for j in range(len(res) - 1, -1, -1):
                res.append(head + res[j])
            head <<= 1
        return res