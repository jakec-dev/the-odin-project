const reverseString = function(word) {
    const charArray = word.split('')
    let reversedArray = new Array()
    for (let i = charArray.length - 1; i >= 0; i--) {
        reversedArray.push(charArray[i])
    }
    return reversedArray.join('')
};

const palindromes = function (word) {
    const lettersOnly = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    const reversed = reverseString(lettersOnly);
    return lettersOnly === reversed;
};

// Do not edit below this line
module.exports = palindromes;
