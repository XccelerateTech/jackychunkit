const Player = require('./player.js');
const Computer = require('./computer.js');
const player = new Player();
const computer = new Computer();
let playerInput = '';

player.on('input', function(type) {
    if (type !== 'rock' || type !== 'paper' || type !== 'scissors') {
    console.log('you played ' + type)
    playerInput = type
    computer.game()
    } else {
        console.log('You should be rock or paper or scissors only')
    }
})
computer.on('input',function(type) {
    console.log('computer plays ' + type)
    switch(type) {
        case 'paper':
        switch(playerInput) {
            case 'paper':
            console.log('draw!');
            break;
            case 'scissors':
            console.log('player wins');
            break;
            case 'rock':
            console.log('computer wins');
            break;
        }
        break;
        case 'scissors':
        switch(playerInput) {
            case 'paper':
            console.log('computer wins');
            break;
            case 'scissors':
            console.log('draw!');
            break;
            case 'rock':
            console.log('player wins');
            break;
        }
        break;
        case 'rock':
        switch(playerInput) {
            case 'paper':
            console.log('player wins');
            break;
            case 'scissors':
            console.log('computer wins');
            break;
            case 'rock':
            console.log('draw!');
            break;
        }
        break;
    }
})
player.game('rock')