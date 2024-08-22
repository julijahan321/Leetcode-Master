//problem name shufflethearray

var shuffle = function (nums, n) {
    const blankArray = []
    for (let i = 0; i < n; i++) {
        for (let j = i + n; j < nums.length; j++) {
            blankArray.push(nums[i], nums[j])
            break;
        }
    }
    return blankArray
}