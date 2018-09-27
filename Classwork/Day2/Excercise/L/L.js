
const repeatChar = (string,char) => {
    let repeatCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt[i]===char) {
            repeatCount ++;
        }
    }
    return repeatCount;
}