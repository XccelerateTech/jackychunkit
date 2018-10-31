export default function reverseString(input) {
    let output = '';
    for(var i = 0; i < input.length + 1; i++) {
        output = output + input.charAt(input.length - i);
    } return output;
}