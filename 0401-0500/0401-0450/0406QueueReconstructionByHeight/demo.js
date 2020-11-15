function reconstructQueue(people) {
    people.sort(function (a, b) {
        return a[0] - b[0] || b[1] - a[1];
    });
    var N = people.length;
    var ans = Array(N).fill(0).map(function (e) { return []; });
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        var spaces = person[1] + 1;
        for (var i = 0; i < N; i++) {
            if (!ans[i].length) {
                --spaces;
                if (spaces == 0) {
                    ans[i] = person;
                    break;
                }
            }
        }
    }
    return ans;
}
;
console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
//[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
