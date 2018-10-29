const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }
    tick(seconds) {
        this.emit('tick', seconds)
    }
}


module.exports = Timer;