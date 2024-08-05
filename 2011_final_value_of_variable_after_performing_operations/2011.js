//problem name finalvalueofvariableafterperformingoperations

var finalValueAfterOperations = function (operations) {
    let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        if ((operations[i] == "++X") || (operations[i] == "X++")) {
            operations[i] = 1;
        }
        else {
            operations[i] = -1;
        }
        sum = sum + operations[i]
    }
    return sum;
}
