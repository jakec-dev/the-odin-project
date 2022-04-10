const reverseString = function(word) {
    const charArray = word.split('')
    let reversedArray = new Array()
    for (let i = charArray.length - 1; i >= 0; i--) {
        reversedArray.push(charArray[i])
    }
    return reversedArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
