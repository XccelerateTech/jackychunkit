/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    switch (true) {
        case /^(\s*|\0*)$/.test(message):
        return 'Fine. Be that way!';
        case /^[A-Z]+[^a-z]*\? *$/.test(message):
        return "Calm down, I know what I'm doing!";
        case /^.*\? *$/.test(message):
        return 'Sure.';
        case /^[^a-z]*[A-Z]*$/.test(message):
        return (/[A-Z]/.test(message)) ? "Whoa, chill out!" : "Whatever.";
        default:
        return 'Whatever.';
    }
}

