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

    let test_1=maximumWealth([[1,2,3],[3,2,1]])
    let test_2=maximumWealth([[1,5],[7,3],[3,5]])

    console.log(test_1)
    console.log(test_2)
    
    