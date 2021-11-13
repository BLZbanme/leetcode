class MapSum:

    def __init__(self):
        #前缀树，一个对象，里面包含若干个'a'-'z'属性和一个'val'属性 {}
        #{
        #    'a': dict(),
        #    ...
        #    'z': dict(),
        #    'val': number,
        # }
        self.trie = dict()
        #count作为个全局变量，记录每次找到前缀的和
        self.count = 0
        pass

    def insert(self, key: str, val: int) -> None:
        self.dfs(self.trie, key, 0, val)
        return

    #index 记录遍历到的字符下标位
    def dfs(self, map: dict, key, index, val):
        #该刷新值了
        if index == len(key):
            map['val'] = val
            return


        newMap = map.get(key[index], None)
        #当前层级还没有map时，生成map
        if not newMap:
            newMap = dict()
            map[key[index]] = newMap
        #继续遍历下一层
        self.dfs(newMap, key, index + 1, val)

    def sum(self, prefix: str) -> int:
        #每次查找清空count
        self.count = 0
        map = self.trie
        #遍历点prefix
        for s in prefix:
            map = map.get(s, None)
            #map为None说明查找的前缀没有，return 0
            if not map:
                return 0
        #遍历包含prefix的所有层级，并记录count
        self.sumDfs(map)
        return self.count

    def sumDfs(self, map: dict):
        for val in map.values():
            #val属于dict，是'a'-'z'等属性，继续走
            if isinstance(val, dict):
                self.sumDfs(val)
            #val不属于dict，说明就是val属性
            else:
                self.count += val
        return
            
        