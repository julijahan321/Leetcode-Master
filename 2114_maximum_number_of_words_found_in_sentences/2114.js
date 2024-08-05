//problem name maximumnumberofwordsfoundinsentences

var mostWordsFound = function (sentences) {
    let array = [];
    let output = 0;
    for (let i = 0; i < sentences.length; i++) {
        let sum = 1;
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] == " ")
                sum += 1;
        }
        array.push(sum)
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > output) {
            output = array[i]
        }
    }
    return output;
};
