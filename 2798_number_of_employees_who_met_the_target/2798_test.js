//problem name numberofemployeeswhometthetarget

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            sum++;
        }
    }
    return sum;

};

let test_1=numberOfEmployeesWhoMetTarget([0,1,2,3,4],2)
let test_2=numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6)
console.log(test_1)
console.log(test_2)