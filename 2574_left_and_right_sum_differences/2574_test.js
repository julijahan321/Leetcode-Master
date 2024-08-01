//problem name leftandrightsumdifferences

var leftRightDifference = function (num) {
    const LHS = [];
    const RHS = [];
    const outPut = []
    let sum = 0;
    for (let i = 0; i < num.length - 1; i++) {
        sum += num[i]
        LHS.push(sum)
    }
    sum = 0;
    LHS.splice(0, 0, 0)
    for (let i = num.length - 1; i >= 0; i--) {
        sum += num[i];
        RHS.push(sum)
    }
    RHS.reverse()
    RHS.splice(0, 1)
    RHS.splice(RHS.length, 0, 0)
    for (let i = 0; i < LHS.length; i++) {
        for (let j = 0; j < RHS.length; j++) {
            let sub = Math.abs(LHS[i] - RHS[i]);
            outPut.push(sub)
            break;
        }
    }
    return outPut;
}

let test_1=leftRightDifference([10,4,8,3])
let test_2=leftRightDifference([1])
console.log(test_1)
console.log(test_2)