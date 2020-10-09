var hasCycle = function(head) {
    let one = head;
    let two = head;
    while (two && two.next) {
        one = one.next;
        two = two.next.next;
        if (one == two) {
            return true;
        }
    }
    return false;
};