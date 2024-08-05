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