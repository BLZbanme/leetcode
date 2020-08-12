/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return;
    }
    
    const map = new Map();
    const set = new Set();
    const queue = [node];

    while (queue.length) {
        
        let cur = queue.shift();

        
        let newNode;
        if (!map.get(cur)) {
            newNode = new Node(cur.val);
            map.set(cur, newNode);
        }
        else {
            newNode = map.get(cur);
        }
        set.add(cur.val);

        for (let i = 0; i < cur.neighbors.length; i++) {
            if (!set.has(cur.neighbors[i].val)) {
                queue.push(cur.neighbors[i]);
                set.add(cur.neighbors[i].val);
            }
            let tmp;
            if (!map.get(cur.neighbors[i])) {
                tmp = new Node(cur.neighbors[i].val);
                map.set(cur.neighbors[i], tmp);
            }
            else {
                tmp = map.get(cur.neighbors[i]);
            }
            newNode.neighbors.push(tmp);
        }
    }

    return map.get(node);
};

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
a.neighbors.push(b);
a.neighbors.push(d);
b.neighbors.push(a);
b.neighbors.push(c);
c.neighbors.push(b);
c.neighbors.push(d);
d.neighbors.push(a);
d.neighbors.push(c);

console.log(cloneGraph(a));