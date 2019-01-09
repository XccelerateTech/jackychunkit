class Person {
    constructor(info) {
        this.age = info.age;
        this.name = info.name;
    }

    info() {
        return (`The person is called ${this.name} and is ${this.age} years old`)
    }
}

class Student extends Person {
    constructor(info) {
        super(info);
        this.gpa = info.gpa;
    }

    info() {
        return (`The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`)
    }
}

const person = new Person( {age: 44, name: 'Tom' });
person.info() // The person is called Tom and is 44 years old

const student = new Student( {age: 44, name: "Tom", gpa: 4.0})
student.info();