import random

class Solution:

    def __init__(self, nums: List[int]):
        self.N = len(nums)
        self.inital = [x for x in nums]
        self.list = nums

    def reset(self) -> List[int]:
        return self.inital

    def shuffle(self) -> List[int]:
        i = random.randint(0, self.N - 1)
        j = random.randint(0, self.N - 1)
        if i == j:
            return self.list
        tmp = self.list[i]        
        self.list[i] = self.list[j]
        self.list[j] = tmp
        return self.list


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()