class Robot {
    constructor() {
        this.name = GenerateName();
    }
    reset() {
        this.name = GenerateName();
    }
}

//generating the namelist
var list = new Array;
var NameList = function () {
    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            for (var k = 0; k < 10; k++) {
                for (var l = 0; l < 10; l++) {
                    for (var m = 0; m < 10; m++) {
                        list.push(String.fromCharCode(65 + i) + String.fromCharCode(65 + j) + k + l + m);
                    }
                }
            }
        }
    }
}

GenerateName = () => {
    if (list.length == 0) {
      NameList();
      //shuffle the namelist
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
    }   return list.pop();
}

module.exports = Robot;