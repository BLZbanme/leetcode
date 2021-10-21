# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def __init__(self):
        self.count = 0
        pass

    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.distance = distance
        list = self.dfs(root)
        list = [x for x in list if x <= distance]
        return self.count
    
    def dfs(self, treeNode: any):
        if not treeNode:
            return []

        if not treeNode.left and not treeNode.right:
            return [1]

        leftArr = self.dfs(treeNode.left)
        rightArr = self.dfs(treeNode.right)
        
        for leftItem in leftArr:
            for rightItem in rightArr:
                if leftItem + rightItem <= self.distance:
                    self.count += 1

        return [item + 1 for item in leftArr + rightArr]

