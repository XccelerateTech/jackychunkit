export const isIsogram = input => {
    input = input.toLowerCase();
    for (let i = 1; i < input.length; i++) {
        if (input.charAt(0) == input.charAt(i) && input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) return false;
    }
    input = input.substring(1, input.length);
    return (input.length !== 0) ?
        isIsogram(input) :
        true;
}