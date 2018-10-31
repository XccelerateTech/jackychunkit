export const toRna = input => {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        switch (input.charAt(i)) {
            case '':
                break;
            case 'C': output += 'G';
                break;
            case 'G': output += 'C';
                break;
            case 'A': output += 'U';
                break;
            case 'T': output += 'A';
                break;
            default:
                throw new Error('Invalid input DNA.');
        }
    } return output;
}
