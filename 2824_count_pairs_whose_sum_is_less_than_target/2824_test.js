//problem name countpairswhosesumislessthantarget

var countPairs = function (nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                sum++;
            }
        }
    }
    return sum;
};
let test_1=countPairs([-1,1,2,3,1], 2)
let test_2=countPairs([-6,2,5,-2,-7,-1,3],-2)
console.log(test_1);
console.log(test_2)