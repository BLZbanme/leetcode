"use strict";
function accountsMerge(accounts) {
    var emailToIndex = new Map();
    var emailToName = new Map();
    var emailsCount = 0;
    for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
        var account = accounts_1[_i];
        var name_1 = account[0];
        var size = account.length;
        for (var i = 1; i < size; i++) {
            var email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailsCount++);
                emailToName.set(email, name_1);
            }
        }
    }
    var uf = new UnionFindNow(emailsCount);
    for (var _a = 0, accounts_2 = accounts; _a < accounts_2.length; _a++) {
        var account = accounts_2[_a];
        var firstEmail = account[1];
        var firstIndex = emailToIndex.get(firstEmail);
        var size = account.length;
        for (var i = 2; i < size; i++) {
            var nextEmail = account[i];
            var nextIndex = emailToIndex.get(nextEmail);
            uf.union(firstIndex, nextIndex);
        }
    }
    var indexToEmails = new Map();
    for (var _b = 0, _c = emailToIndex.keys(); _b < _c.length; _b++) {
        var email = _c[_b];
        var index = uf.findRoot(emailToIndex.get(email));
        var account = indexToEmails.get(index) || [];
        account.push(email);
        indexToEmails.set(index, account);
    }
    var merged = [];
    for (var _d = 0, _e = indexToEmails.values(); _d < _e.length; _d++) {
        var emails = _e[_d];
        emails.sort();
        var name_2 = emailToName.get(emails[0]);
        var account = [];
        account.push(name_2);
        account.push.apply(account, emails);
        merged.push(account);
    }
    return merged;
}
;
var UnionFindNow = /** @class */ (function () {
    function UnionFindNow(n) {
        this.parent = Array(n).fill(-1);
    }
    UnionFindNow.prototype.findRoot = function (x) {
        if (this.parent[x] === -1)
            return x;
        return this.findRoot(this.parent[x]);
    };
    UnionFindNow.prototype.union = function (x, y) {
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        return true;
    };
    return UnionFindNow;
}());
