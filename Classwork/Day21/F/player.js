const EventEmitter = require('events');

class Player extends EventEmitter {
    constructor() {
        super()
    }

    game(type) {
        this.emit('input', type);
    }
}

module.exports = Player;
