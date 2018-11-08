export default class Song {
    verse(from, to = from) {
        let swallowed = ``
        let seventh = `She swallowed the cow to catch the goat.\n`
        let sixth = `She swallowed the goat to catch the dog.\n`
        let fifth = `She swallowed the dog to catch the cat.\n`
        let forth = `She swallowed the cat to catch the bird.\n`
        let third = `She swallowed the bird to catch the spider that`
        let second = `It wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n`
        let first = `I don't know why she swallowed the fly. Perhaps she'll die.\n`
        let currentString = ``;
        let output = ``;
        while (from <= to) {
            if (from >= 1) {
                swallowed = `a fly`;
                currentString = first;
                if (from >= 2) {
                    swallowed = `a spider`;
                    currentString = second + currentString;
                    if (from >= 3) {
                        swallowed = `a bird`
                        currentString = third.replace(/^/g, `How absurd to swallow a bird!\n`) + currentString.replace(/^It/g, '')
                        if (from >= 4) {
                            swallowed = `a cat`
                            currentString = forth.replace(/^/g, `Imagine that, to swallow a cat!\n`) + currentString.replace(/^How absurd to swallow a bird!\n/g, '')
                            if (from >= 5) {
                                swallowed = `a dog`
                                currentString = fifth.replace(/^/g, `What a hog, to swallow a dog!\n`) + currentString.replace(/^Imagine that, to swallow a cat!\n/g, '')
                                if (from >= 6) {
                                    swallowed = `a goat`
                                    currentString = sixth.replace(/^/g, `Just opened her throat and swallowed a goat!\n`) + currentString.replace(/^What a hog, to swallow a dog!\n/g, '')
                                    if (from >= 7) {
                                        swallowed = `a cow`
                                        currentString = seventh.replace(/^/g, `I don't know how she swallowed a cow!\n`) + currentString.replace(/^Just opened her throat and swallowed a goat!\n/g, '')
                                        if (from === 8) {
                                            swallowed = `a horse`
                                            currentString = `She's dead, of course!\n`
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            from++;
            output = output + `I know an old lady who swallowed ${swallowed}.\n` + currentString + '\n';
        }
        return output.substring(0, output.length - 1)
    }
    verses(from, to) {
        return this.verse(from, to) + '\n';
    }
}