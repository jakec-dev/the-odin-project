const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let fibArray = [];
    for (let i = 0; i < parseInt(n); i++) {
        let secondLastVal = fibArray[i - 2] || 0;
        let lastVal = fibArray[i - 1] || 1;
        fibArray.push(lastVal + secondLastVal);
    };
    return fibArray[fibArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
