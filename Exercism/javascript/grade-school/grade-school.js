export default class School {
    constructor() {
        this.personArr = [];
        this.mainArr = [];
        this.gradeArr = [];
    }
    add(name, grade) {
        this.personArr.push(name);
        this.gradeArr.push(grade);
    }
    roster() {
        let output = {};
        for (let i in this.gradeArr) {
            if (output[this.gradeArr[i]]) {
                output[this.gradeArr[i]].push(this.personArr[i]);
                output[this.gradeArr[i]].sort();
            } else {
                output[this.gradeArr[i]] = [this.personArr[i]];
            }
        } 
        return output;
    }
    grade(input) {
        const roster = this.roster();
        return (typeof input == 'undefined' || typeof roster[input] == 'undefined') ? []: roster[input];
    }
}