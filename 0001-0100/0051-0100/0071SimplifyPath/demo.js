/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArray = path.split("/");
    let stack = [];
    for (let e of pathArray) {
        if (e) {
            if (e == ".") {
                continue;
            }
            else if (e == "..") {
                if(stack.length != 0){
                    stack.pop();
                }
            }
            else {
                stack.push(e);
            }
        }
    }
    return '/' + stack.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/../../a"));
console.log(simplifyPath("/a/../../b/../c//.//"));