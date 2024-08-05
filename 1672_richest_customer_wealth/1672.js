//problem name richestcustomerwealth

var maximumWealth = function(accounts) {
    const sums = [];
    let output = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        sums.push(sum);
    }
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] > output) {
            output = sums[i];
        }
    }
    return output;
    };