class Robot {
    constructor() {
        this.name = GenerateName();
        this.temp = new Array;
    }
    
    reset() {
        var newName = GenerateName();
        if (this.temp.every(function(val){return val !== newName})) {
            this.name = newName;
            this.temp.push(this.name);
        } else {
            var newName = GenerateName();
            return;
        }
    }
    
}

GenerateName = () => {
    return String.fromCharCode( 65 + Math.floor((Math.random())*25)) + String.fromCharCode( 65 + Math.floor((Math.random())*25)) + Math.floor((Math.random())*10) + Math.floor((Math.random())*10) + Math.floor((Math.random())*10);
}

module.exports = Robot;