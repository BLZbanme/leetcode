class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        map = {}
        stack = []
        for item in nums2:
            while stack and stack[-1] < item:
                map[stack.pop()] = item
            stack.append(item)
        
        return  [map.get(num, -1) for num in nums1]