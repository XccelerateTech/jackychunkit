class school {
    constructor() {
        this.personArr = new Array;
        this.mainArr = new Array;
        this.gradeArr = new Array;
    }
    add(name, grade) {
        this.personArr.push(name);
        this.gradeArr.push(grade);
    }
    roster() {
        var output = new Object;
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
        var roster = this.roster();
        return (typeof input == 'undefined' || typeof roster[input] == 'undefined') ? []: roster[input];
    }
}

module.exports = school;