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
let test_1=countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color",  "silver")
let test_2=countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],  "type", "phone")
console.log(test_1)
console.log(test_2)