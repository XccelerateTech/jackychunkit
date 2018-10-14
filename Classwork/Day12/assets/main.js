let currentGameState;
let turn = 0;
let cross = new Array;
let circle = new Array;
let aiState = 'asleep';
let randomId = new Number;
const allWinConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

$('table').on('click', 'td', function () {
    if (!($(this).children().hasClass('unclickable') || ($(this).hasClass('unclickable')))) {
        startGame();
        $(this).children('.' + activeTurn()).fadeIn()
        $(this).children().addClass('unclickable')
        turn--;
        $('#game_console').html(activeTurn() + '\'s turn')
        turn++;
        checkWin()
        turn++;
        if (aiState == 'awake' && currentGameState == 'started') {
            $('td').prop("disabled", true);
            $('#game_console').html('Loading...')
            $('td').css({ "cursor": "wait" });
            $('img').css({ "cursor": "wait" });
            $('html').css({ "cursor": "wait" });
            // callAiAction();
            setTimeout(callAiAction, 1000);
        }
    }
})

$('.reset').on('click', function () {
    $('img').removeClass('unclickable')
    $('td').removeClass('unclickable')
    $('#game_console').html('Welcome to the tic-tac-toe game!')
    $('img').fadeOut()
    $('button').fadeOut()
})
$('#pve').on('click', function () {
    aiState = 'awake'
})
$('#pvp').on('click', function () {
    aiState = 'asleep'
})

function startGame() {
    if (currentGameState == null) {
        $('#reset').fadeOut()
        currentGameState = 'started'
        turn = 1;
    }
}

function endGame() {
    $('td', 'table', 'tr').addClass('unclickable')
    circle = [];
    cross = [];
    aiState = 'asleep';
    currentGameState = null;
    $('button').fadeIn()
}

function activeTurn() {
    return (turn % 2 == 0) ? 'cross' : 'circle'
}

function checkWin() {
    if (turn % 2 == 1) {
        circle.push(parseInt(event.target.id))
    }
    else if (turn % 2 == 0 && aiState == 'asleep') {
        cross.push(parseInt(event.target.id))
    } else {
        cross.push(parseInt(randomId.charAt(1)))
    }

    allWinConditions.forEach(function (winConditions) {
        if (winConditions.every(function (val) {
            return circle.indexOf(val) >= 0;
        })) {
            $('#game_console').html('Circle has won this game!<br>Start a new game?')
            endGame();
        }
    })
    allWinConditions.forEach(function (winConditions) {
        if (winConditions.every(function (val) {
            return cross.indexOf(val) >= 0;
        })) {
            $('#game_console').html('Cross has won this game!<br>Start a new game?')
            endGame();
        }
    })
    if (turn == 9 && currentGameState == 'started') {
        $('#game_console').html('The game is a draw!<br>Start a new game?')
        endGame();
    }
}

function waitForFiveSeconds() {
    var startTime = new Date();
    while (new Date() - startTime < 5000) { }
}

function callAiAction() {
    randomId = '#' + (Math.floor(Math.random() * 9 + 1));
    while ($(randomId).children().hasClass('unclickable') || $(randomId).hasClass('unclickable')) {
        randomId = '#' + (Math.floor(Math.random() * 9 + 1));
    }
    $(randomId).children('.' + activeTurn()).fadeIn()
    $(randomId).children().addClass('unclickable')
    turn--;
    $('td').prop("disabled", false);
    $('#game_console').html(activeTurn() + '\'s turn')
    turn++;
    $('td').css({ "cursor": "pointer" });
    $('img').css({ "cursor": "no-drop" })
    $('html').css({ "cursor": "auto" });
    checkWin()
    turn++;
}