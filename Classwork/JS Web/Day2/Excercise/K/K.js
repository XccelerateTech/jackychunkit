let ones = "";
let tens = "";
let hundreds = "";
let thousands = "";
let tenthousnads = "";
let hundredthousands = "";
const decode = (i) => {
if (i < 100 || i > 999999) {
    return 'Input should be a number within 100 to 999999';
} else {
    if (i >= 1) {
        switch (parseInt(i % 10)) {
            case 6: 
            ones = 'a';
            break;
            case 1:
            ones = 'b';
            break;
            case 7:
            ones = 'd';
            break;
            case 4:
            ones = 'e';
            break;
            case 3:
            ones = 'i';
            break;
            case 2:
            ones = 'l';
            break;
            case 9:
            ones = 'm';
            break;
            case 8:
            ones = 'n';
            break;
            case 0:
            ones = 'o';
            break;
            case 5:
            ones = 't';
            break;
            default:
            ones = '';
            break;
        }
    }
    if (i >= 10) {
        switch (parseInt(i % 100 / 10)) {
            case 6: 
            tens = 'a';
            break;
            case 1:
            tens = 'b';
            break;
            case 7:
            tens = 'd';
            break;
            case 4:
            tens = 'e';
            break;
            case 3:
            tens = 'i';
            break;
            case 2:
            tens = 'l';
            break;
            case 9:
            tens = 'm';
            break;
            case 8:
            tens = 'n';
            break;
            case 0:
            tens = 'o';
            break;
            case 5:
            tens = 't';
            break;
            default:
            tens = '';
            break;
        }
    }
    if (i >= 100) {
        switch (parseInt(i % 1000 / 100)) {
            case 6: 
            hundreds = 'a';
            break;
            case 1:
            hundreds = 'b';
            break;
            case 7:
            hundreds = 'd';
            break;
            case 4:
            hundreds = 'e';
            break;
            case 3:
            hundreds = 'i';
            break;
            case 2:
            hundreds = 'l';
            break;
            case 9:
            hundreds = 'm';
            break;
            case 8:
            hundreds = 'n';
            break;
            case 0:
            hundreds = 'o';
            break;
            case 5:
            hundreds = 't';
            break;
            default:
            hundreds = '';
            break;
        }
    }
    if (i >= 1000) {
        switch (parseInt(i % 10000/1000)) {
            case 6: 
            thousands = 'a';
            break;
            case 1:
            thousands = 'b';
            break;
            case 7:
            thousands = 'd';
            break;
            case 4:
            thousands = 'e';
            break;
            case 3:
            thousands = 'i';
            break;
            case 2:
            thousands = 'l';
            break;
            case 9:
            thousands = 'm';
            break;
            case 8:
            thousands = 'n';
            break;
            case 0:
            thousands = 'o';
            break;
            case 5:
            thousands = 't';
            break;
            default:
            thousands = '';
            break;
        }
    }
 if (i >= 10000) {
        switch (parseInt(i % 100000/10000)) {
            case 6: 
            tenthousands = 'a';
            break;
            case 1:
            tenthousands = 'b';
            break;
            case 7:
            tenthousands = 'd';
            break;
            case 4:
            tenthousands = 'e';
            break;
            case 3:
            tenthousands = 'i';
            break;
            case 2:
            tenthousands = 'l';
            break;
            case 9:
            tenthousands = 'm';
            break;
            case 8:
            tenthousands = 'n';
            break;
            case 0:
            tenthousands = 'o';
            break;
            case 5:
            tenthousands = 't';
            break;
            default:
            tenthousands = '';
            break;
        }
    }
    if (i >= 100000) {
        switch (parseInt(i % 1000000/100000)) {
            case 6: 
            hundredthousands = 'a';
            break;
            case 1:
            hundredthousands = 'b';
            break;
            case 7:
            hundredthousands = 'd';
            break;
            case 4:
            hundredthousands = 'e';
            break;
            case 3:
            hundredthousands = 'i';
            break;
            case 2:
            hundredthousands = 'l';
            break;
            case 9:
            hundredthousands = 'm';
            break;
            case 8:
            hundredthousands = 'n';
            break;
            case 0:
            hundredthousands = 'o';
            break;
            case 5:
            hundredthousands = 't';
            break;
            default:
            hundredthousands = '';
            break;
        }
    }
    return (hundredthousands+tenthousands+thousands+hundreds+tens+ones);
}
}