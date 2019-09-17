/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let e of nums) {
        if (set.has(e)) {
            return true;
        }
        set.add(e);
    }
    return false;
};

