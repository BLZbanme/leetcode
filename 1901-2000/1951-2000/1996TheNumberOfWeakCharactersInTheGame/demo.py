class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        properties.sort(key = lambda x: (x[0], -x[1]))
        ans = 0
        st = []
        for _, def_ in properties:
            while st and st[-1] < def_:
                st.pop()
                ans += 1
            st.append(def_)
        return ans
        