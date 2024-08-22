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

let test_1=shuffle([2,5,1,3,4,7],3)
let test_2=shuffle([1,2,3,4,4,3,2,1],4)
let test_3=shuffle([1,1,2,2],2)

console.log(test_1)
console.log(test_2)
console.log(test_3)