//problem name sumofvaluesatindiceswithksetbits

var sumIndicesWithKSetBits = function (nums, k) {
    const binary = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        binary[i] = i.toString(2);
    }
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < binary[i].length; j++) {
            if (binary[i][j] == 1) {
                count++;
            }
        }
        if (count == k) {
            sum += nums[i]
        }
        count = 0;
    }
    return sum;
};