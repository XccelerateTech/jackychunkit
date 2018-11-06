export default class Anagram {
    constructor(string) {
        this.letter = string
    }
    matches(lettersToMatch) {
        let output = [];
        lettersToMatch.forEach(e => {
            const original = e;
            let letter = this.letter.split('');
            letter[0] = letter[0].toLowerCase();
            e = e.split('');
            e[0] = e[0].toLowerCase();
            if (letter.sort().join() == e.sort().join()) {
                output.push(original)
            }
        });
        return output;
    }
}