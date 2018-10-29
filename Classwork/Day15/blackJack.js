const deck = [
  ["Spade", "A"], ["Diamond", "A"],
  ["Spade", "2"], ["Diamond", "2"],
  ["Spade", "3"], ["Diamond", "3"],
  ["Spade", "4"], ["Diamond", "4"],
  ["Spade", "5"], ["Diamond", "5"],
  ["Spade", "6"], ["Diamond", "6"],
  ["Spade", "7"], ["Diamond", "7"],
  ["Spade", "8"], ["Diamond", "8"],
  ["Spade", "9"], ["Diamond", "9"],
  ["Spade", "10"], ["Diamond", "10"],
  ["Spade", "J"], ["Diamond", "J"],
  ["Spade", "Q"], ["Diamond", "Q"],
  ["Spade", "K"], ["Diamond", "K"],
  ["Club", "A"], ["Heart", "A"],
  ["Club", "2"], ["Heart", "2"],
  ["Club", "3"], ["Heart", "3"],
  ["Club", "4"], ["Heart", "4"],
  ["Club", "5"], ["Heart", "5"],
  ["Club", "6"], ["Heart", "6"],
  ["Club", "7"], ["Heart", "7"],
  ["Club", "8"], ["Heart", "8"],
  ["Club", "9"], ["Heart", "9"],
  ["Club", "10"], ["Heart", "10"],
  ["Club", "J"], ["Heart", "J"],
  ["Club", "Q"], ["Heart", "Q"],
  ["Club", "K"], ["Heart", "K"]
]

class Game {
  constructor() {
    this.deck = [];
    this.playerHand = [];
    this.dealerHand = [];
    this.turn = 0;
    this.dealerPoint = 0;
    this.playerPoint = 0;
    this.winner = null;
    this.turnPassed = 0;
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.deck = array.slice(0, 51);
  }

  sendCard() {
    //start game with 2 cards for player and computer
    this.playerHand.push(this.deck.pop())
    this.playerHand.push(this.deck.pop())
    this.showHand(this.playerHand)
    this.dealerHand.push(this.deck.pop())
    this.dealerHand.push(this.deck.pop())
    this.showHand(this.dealerHand)
    this.CalPoints()
  }

  drawCard() {
    //player draw card
    this.playerHand.push(this.deck.pop())
    this.showHand(this.playerHand)
    this.CalPoints()
    this.turnPassed = 0;
  }

  passTurn() {
    this.turnPassed++;
    if (this.turnPassed == 2) {
      if (this.dealerPoint >= this.playerPoint) {
        this.winner = 'dealer';
        this.EndGame()
      } else {
        this.winner = 'player';
        this.EndGame()
      }
    }
    this.CalPoints()
  }

  dealersTurn() {
    //computer's turn
    if (this.dealerPoint < 16) {
      this.dealerHand.push(this.deck.pop())
      this.showHand(this.dealerHand)
      this.CalPoints()
      this.turnPassed = 0;
    } else if (this.dealerPoint < 21 && (this.dealerHand.some(e => {
      return e[1] == 'A';
    }))) {
      this.dealerHand.push(this.deck.pop())
      this.showHand(this.dealerHand)
      this.CalPoints()
      this.turnPassed = 0;
    } else {
      this.passTurn()
    }
  }

  showHand(who) {
    let output = ''
    who.forEach(e => {
      let rank = '';
      if (e[1] == 1) {
        rank = 'A'
      } else {
        rank = e[1]
      }
      output = output + `${e[0]} ${rank}    `
    });
    (who == this.playerHand) ?
      $(`#playerHand`).html(output) :
      $(`#dealerHand`).html(output);
  }

  CalPoints() {
    const reducer = (acc, val) => {
      if (Array.isArray(acc)) {
        switch (acc[1]) {
          case 'A':
            acc = 11;
            break;
          case 'J':
          case 'Q':
          case 'K':
            acc = 10;
            break;
          default:
            acc = parseInt(acc[1], 0)
            break;
        }
      }
      switch (val[1]) {
        case 'A':
          val = 11;
          break;
        case 'J':
        case 'Q':
        case 'K':
          val = 10;
          break;
        default:
          val = parseInt(val[1], 0)
          break;
      }
      return acc + val;
    }
    this.dealerPoint = this.dealerHand.reduce(reducer);
    this.playerPoint = this.playerHand.reduce(reducer);
    if (this.dealerPoint == 21) {
      console.log('dealer wins')
      this.winner = 'dealer';
      this.EndGame()
    } else if (this.playerPoint == 21) {
      console.log('player wins')
      this.winner = 'player';
      this.EndGame()
    }

    //check dealer's hand
    if (this.dealerPoint > 21 && !(this.dealerHand.some(e => {
      return e[1] == 'A';
    }))) {
      console.log('player wins')
      this.winner = 'player';
      this.EndGame()
    } else if (this.dealerPoint > 21 && (this.dealerHand.some(e => {
      return e[1] == 'A';
    }))) {
      this.dealerHand.forEach(e => {
        if (e[1] == 'A') e[1] = 1;
      })
      this.dealerPoint -= 10;
    }

    //check player's hand
    if (this.playerPoint > 21 && !(this.playerHand.some(e => {
      return e[1] == 'A';
    }))) {
      console.log('dealer wins')
      this.winner = 'dealer';
      this.EndGame()
    } else if (this.playerPoint > 21 && (this.playerHand.some(e => {
      return e[1] == 'A';
    }))) {
      this.playerHand.forEach(e => {
        if (e[1] == 'A') e[1] = 1;
      })
      this.playerPoint -= 10;
    }
    $(`#dealerPoint`).html(this.dealerPoint);
    $(`#playerPoint`).html(this.playerPoint);
    this.turn++;
    if (this.turn % 2 == 0 && !this.winner) {
      this.dealersTurn()
    }
  }

  EndGame() {
    $(`#endGame`).html(`The winner is ${this.winner}, click above to start another game.`)
    $('#newGame').show()
    $('#draw,#hold').hide()
  }
}

var game = new Game();

function startGame() {
  $('#newGame').hide()
  $(`#endGame`).html(``)
  $('#draw,#hold').show()
  game = new Game()
  game.shuffle(deck)
  game.sendCard()
}
