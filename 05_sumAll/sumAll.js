const sumAll = function(x, y) {
    if (x < 0 || y < 0 || !Number.isInteger(x + y)) {return "ERROR"}

    let [start, end] = (x < y) ? [x, y] : [y, x]

    let sum = 0
    for (i = start; i <= end; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
