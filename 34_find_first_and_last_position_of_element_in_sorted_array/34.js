//problem name findfirstandlastpositionofelementinsortedarray

//this is my first medium solved


var searchRange = function (nums, target) {
    let outPut = [];
    let finalOutput = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            outPut.push(i)
        }
        
    }
    if (outPut.length == 0) {
        return [-1, -1]
    }
    if (outPut.length == 1) {
        finalOutput[0] = outPut[0]
        return [finalOutput[0], finalOutput[0]]

    }
    if(outPut.length>2){
        return [outPut[0],outPut[outPut.length-1]]
    }
    return outPut;
}