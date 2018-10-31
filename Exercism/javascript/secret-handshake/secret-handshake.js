export const secretHandshake = input => {
    if (typeof input !== 'number')
        throw new Error("Handshake must be a number");
    let output = [];
    input = input.toString(2);
    if (input.charAt(input.length - 1) == 1)
        output.push('wink');
    if (input.charAt(input.length - 2) == 1)
        output.push('double blink');
    if (input.charAt(input.length - 3) == 1)
        output.push('close your eyes');
    if (input.charAt(input.length - 4) == 1)
        output.push('jump');
    if (input.charAt(input.length - 5) == 1)
        output = output.reverse();
    return output;
}