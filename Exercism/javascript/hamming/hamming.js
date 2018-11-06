export const compute = (a, b) => {
    if (a.length !== b.length)
        throw new Error('left and right strands must be of equal length');
    let difference = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
            difference++;
        }
    } return difference;
}