const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor() {
        super()
        this.type = ['rock', 'paper', 'scissors'];
    }

    game() {
        this.emit('input', this.type[(Math.floor(Math.random() * 3))]);
    }
}

module.exports = Computer;