class Solution:
    def originalDigits(self, s: str) -> str:
        c = Counter(s)

        map = [0] * 10

        map[0] = c['z']
        map[2] = c['w']
        map[4] = c['u']
        map[6] = c['x']
        map[8] = c['g']

        map[3] = c['h'] - map[8]
        map[5] = c['f'] - map[4]
        map[7] = c['s'] - map[6]

        map[1] = c['o'] - map[0] - map[2] - map[4]
        map[9] = c['i'] - map[5] - map[6] - map[8]

        return ''.join(str(x) * map[x] for x in range(10))


# class Solution:
#     def originalDigits(self, s: str) -> str:
#         map = dict()
#         digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
#         char2Digits = defaultdict(dict)
#         for i in range(10):
#             for j in digits[i]:
#                 char2Digits[i][j] = char2Digits[i].get(j, 0) + 1
        
#         for c in s:
#             map[c] = map.get(c, 0) + 1

#         tmp = len(s)
#         result = ''
#         for i in range(10):
#             while True:
#                 bool = false
#                 for j in digits[i]:
#                     if c


        
        

