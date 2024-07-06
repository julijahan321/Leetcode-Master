//problem name countitemsmatchingarule


var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (ruleKey == "type") {
                if (items[i][0] == ruleValue) {
                    count += 1;
                    break
                }
            }
            if (ruleKey == "color") {
                if (items[i][1] == ruleValue) {
                    count += 1;
                    break;
                }
            }
            if (ruleKey == "name") {
                if (items[i][2] == ruleValue) {
                    count += 1;
                    break;
                }
            }
        }
    }
    return count;

};