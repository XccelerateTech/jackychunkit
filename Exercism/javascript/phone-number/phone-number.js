export default class Phonenumber {
    constructor(number) {
        this.phone = number;
    }
    number() {
        let input = '';
        this.phone.split('').forEach(e => {
            if (!isNaN(parseInt(e))) input += e;
        });
        if ((input.length == 10 && input[0] !== '1' && input[0] !== '0' && input [3] !== '1' && input[3] !== '0')||(input.length == 11 && input[0] == '1' && input[1] !== '0' && input[1] !== '1' && input[4] !== '0' && input[4] !== '1')) {
            if (input.length == 11) {
                input = input.substr(1);
            }
            return input;
        } else return null;
    }
}