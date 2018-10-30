const processArray = (arr,callback) => {
    return arr.map(e => {
        return callback(e);
    });
};

var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});
// [ 8, 16, 4, 14, 10 ]
