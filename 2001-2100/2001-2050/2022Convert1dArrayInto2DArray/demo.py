class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        N = len(original)
        if N != m * n:
            return []
        dp = [[0] * n for _ in range(m)]
        for i in range(N):
            dp[i // n][i % n] = original[i]
        return dp