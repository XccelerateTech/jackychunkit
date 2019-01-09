const timer_module = require('./timer.js');
const timer = new timer_module();
let countdownRemain = 0;
let paused = false;

const start = seconds => {
    if (paused) {
        paused = false
    } else {
        countdownRemain = seconds;
        timer.tick()
    }
}

const pause = () => {
    !paused ?
        paused = true :
        paused = false;
}

const stop = () => {
    countdownRemain = -1;
}

timer.on('tick', () => {
    countdown()
    setInterval(countdown, 1000)
})

function countdown() {
    if (!paused) {
        if (countdownRemain >= 1) {
            console.log(countdownRemain);
            countdownRemain--;
        } else if (countdownRemain == 0) {
            console.log('kaboom');
            clearInterval(this);
        } else {
            clearInterval(this);
        }
    }
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop
}