from typing import List
class Solution:
    def validTicTacToe(self, board: List[str]) -> bool:
        oCount = 0
        xCount = 0
        for i in range(3):
            for j in range(3):
                if board[i][j] == 'O':
                    oCount += 1
                elif board[i][j] == 'X':
                    xCount += 1
        if not (oCount == xCount or oCount == xCount - 1):
            return False

        oList = 0
        xList = 0
        for i in range(3):
            if board[i] == 'O' * 3:
                oList += 1
            elif board[i] == 'X' * 3:
                xList += 1
            tp = (board[0][i], board[1][i], board[2][i])
            if tp == ('O', 'O', 'O'):
                oList += 1
            elif tp == ('X', 'X', 'X'):
                xList += 1
        
        left = (board[0][0], board[1][1], board[2][2])
        right = (board[0][2], board[1][1], board[2][0])
        if left == ('O', 'O', 'O'):
            oList += 1
        elif left == ('X', 'X', 'X'):
            xList += 1

        if right == ('O', 'O', 'O'):
            oList += 1
        elif right == ('X', 'X', 'X'):
            xList += 1

        if not oList and not xList:
            return True
        if oList > 1 or oList == xList:
            return False

        if xList:
            return xCount > oCount 
        if oList:
            return xCount == oCount
        
        return True

print(Solution().validTicTacToe(
["OOO"
,"XXO"
,"XXX"]))

print(Solution().validTicTacToe(["OXX",
 "XOX",
 "OXO"]))

print(Solution().validTicTacToe(["XXX",
 "XOO",
 "OO "]))
print(Solution().validTicTacToe(["XOX","O O","XOX"]))
print(Solution().validTicTacToe(["XXX","   ","OOO"]))

