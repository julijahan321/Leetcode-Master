//problem name laststoneweight

//problem name laststoneweight

var lastStoneWeight = function (stones) {
    if (stones.length == 1) {
        return stones[0];
    }
    for (let k = 0; k < stones.length; k++) {
        for (let i = 0; i < stones.length; i++) {
            for (let j = 0; j < stones.length; j++) {
                if (stones[j] > stones[j + 1]) {
                    const swap = stones[j];
                    stones[j] = stones[j + 1];
                    stones[j + 1] = swap;
                }
            }
        }

        if (stones[stones.length - 1] - (stones[stones.length - 2]) == 0) {
            stones.pop()
            stones.pop()
        }
        if (stones.length >= 2) {
            stones[stones.length - 2] = stones[stones.length - 1] - (stones[stones.length - 2]);
            stones.pop();
        }
        if (stones.length == 1) {
            return stones[0]
        }
        k=0;
    }

    return stones;
}