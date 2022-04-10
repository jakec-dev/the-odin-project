const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(itemInArray => {
        let keepItem = true;
        valuesToRemove.forEach(value => {
            if (itemInArray === value) {
                keepItem = false;
            };
        });
        return keepItem;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
