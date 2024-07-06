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
let test_1=truncateSentence("Hello how are you Contestant",4)
let test_2=truncateSentence("What is the solution to this problem", 4)
let test_3=truncateSentence( "chopper is not a tanuki", 5)
console.log(test_1)
console.log(test_2)
console.log(test_3)