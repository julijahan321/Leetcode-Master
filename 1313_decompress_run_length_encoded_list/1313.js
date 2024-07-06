//problem name decompressrunlengthencodedlist


var decompressRLElist = function (nums) {
    let outPut = [];
    for (let i = 0; i < 1000; i++) {
        for (let j = 1; j < 1000; j++) {
            if ( j <= nums[2 * i]) {
                outPut.push(nums[2 * i + 1])
            }
            
        }
    }
    return outPut;
};

