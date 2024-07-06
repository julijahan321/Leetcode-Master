//problem name truncatesentence

var truncateSentence = function (s, k) {
    let space = " ";
    let count = 0;
    let spaceCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == space) {
            spaceCount += 1;
        }
        count += 1;
        if (spaceCount == k) {
            let outPut = s.slice(0, count - 1)
            return outPut
        }
    }
    return s;

}