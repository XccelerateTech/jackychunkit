const output = (input) => {
    return Math.floor((input.reduce(reducer = (accumulator, currentValue) => {
       return accumulator + currentValue;
   }))/ input.length);
};
