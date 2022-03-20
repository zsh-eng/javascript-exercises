const removeFromArray = function(arr, ...args) {
    let outputArr = arr.filter((el) => !args.includes(el))
    return outputArr

};

console.log(removeFromArray([1,2,3], 3))

// Do not edit below this line
module.exports = removeFromArray;
