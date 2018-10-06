function Gambler(luck,name) {
    this.cash = 1000;
    this.bet = 50; 
    this.winrate = luck;
    this.name = name;
}

var gamblerA = new Gambler(0.7,'A');
var gamblerB = new Gambler(0.9,'B');
var gamblerC = new Gambler(0.8,'C');
var gamblerD = new Gambler(0.7,'D');
var gamblerE = new Gambler(0.3,'E');
var gamblers = [gamblerA,gamblerB,gamblerC,gamblerD,gamblerE]

const casino = () => {
    let output = [];
    const order = ['first','second','third','forth','fifth']
    let losingOrder = 0;
    while (!(gamblers.every(bankrupt = (cashRemain) => {
        return cashRemain.cash <= 0;
    }))) {

      for (var onActiveTurn in gamblers) {
        if (gamblers[onActiveTurn].cash > 100000) {
            console.error ('A gambler is too lucky, he is never going to lose');
            for(var winners in gamblers) {
            output.push(gamblers[winners].name + ' is never going to lose.');
            }
            return output;
        } 
        gamblers[onActiveTurn].cash -= gamblers[onActiveTurn].bet;
        if (Math.random() + gamblers[onActiveTurn].winrate > 1) {
            gamblers[onActiveTurn].cash += (gamblers[onActiveTurn].bet * 2);
        }
        if (gamblers[onActiveTurn].cash <= 0) {
            output.push(gamblers[onActiveTurn].name + ' has lose ' + order[losingOrder]);
            losingOrder++;
            gamblers.splice(onActiveTurn, 1);
        }
    }
  } return output;
}

casino()