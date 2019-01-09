

// Used like so
const deck = [
  ["Spade","A"], ["Diamond","A"],
  ["Spade","2"], ["Diamond","2"],
  ["Spade","3"], ["Diamond","3"],
  ["Spade","4"], ["Diamond","4"],
  ["Spade","5"], ["Diamond","5"],
  ["Spade","6"], ["Diamond","6"],
  ["Spade","7"], ["Diamond","7"],
  ["Spade","8"], ["Diamond","8"],
  ["Spade","9"], ["Diamond","9"],
  ["Spade","10"], ["Diamond","10"],
  ["Spade","J"], ["Diamond","J"],
  ["Spade","Q"], ["Diamond","Q"],
  ["Spade","K"], ["Diamond","K"],
  ["Club","A"], ["Heart","A"],
  ["Club","2"], ["Heart","2"],
  ["Club","3"], ["Heart","3"],
  ["Club","4"], ["Heart","4"],
  ["Club","5"], ["Heart","5"],
  ["Club","6"], ["Heart","6"],
  ["Club","7"], ["Heart","7"],
  ["Club","8"], ["Heart","8"],
  ["Club","9"], ["Heart","9"],
  ["Club","10"], ["Heart","10"],
  ["Club","J"], ["Heart","J"],
  ["Club","Q"], ["Heart","Q"],
  ["Club","K"], ["Heart","K"]
]
function shuffle(array) {
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
var slicedArray = array.slice(0,5);
return slicedArray;
}

const Probit = (deck) => {
let pair = 0;
let tri = false;
let fullhouse = false;
const myHand = shuffle(deck);
if((myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[2][1] && myHand[2][1] == myHand[3][1]) ||
   (myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[2][1] && myHand[2][1] == myHand[4][1]) ||
   (myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[3][1] && myHand[3][1] == myHand[4][1]) ||
   (myHand[0][1] == myHand[2][1] && myHand[2][1] == myHand[3][1] && myHand[3][1] == myHand[4][1]) ||
   (myHand[1][1] == myHand[2][1] && myHand[2][1] == myHand[3][1] && myHand[3][1] == myHand[4][1])) {
    fullhouse = true;}
if(!fullhouse) {
  if((myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[2][1]) ||
     (myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[3][1]) ||
     (myHand[0][1] == myHand[1][1] && myHand[1][1] == myHand[4][1]) ||
     (myHand[0][1] == myHand[2][1] && myHand[2][1] == myHand[3][1]) ||
     (myHand[0][1] == myHand[2][1] && myHand[2][1] == myHand[4][1]) ||
     (myHand[0][1] == myHand[3][1] && myHand[3][1] == myHand[4][1]) ||
     (myHand[1][1] == myHand[2][1] && myHand[2][1] == myHand[3][1]) ||
     (myHand[1][1] == myHand[2][1] && myHand[2][1] == myHand[4][1]) ||
     (myHand[2][1] == myHand[3][1] && myHand[3][1] == myHand[4][1])) {
    tri = true;}
  } 
if((myHand[0][1] == myHand[1][1])||(myHand[0][1] == myHand[2][1])||(myHand[0][1] == myHand[3][1])||(myHand[0][1] == myHand[4][1])) {pair ++;}
if((myHand[1][1] == myHand[2][1])||(myHand[1][1] == myHand[3][1])||(myHand[1][1] == myHand[4][1])) {pair++;}
if((myHand[2][1] == myHand[3][1])||(myHand[2][1] == myHand[4][1])) {pair++;}
if((myHand[3][1] == myHand[4][1])) {pair++;}
if(pair > 1 && tri == true) {
  pair -= 2;
} else if (pair > 0 && fullhouse == true) {
  pair = 0;
}
if(fullhouse == true) {
  return 'The probability of drawing the next card forming a pair is 3/47, forming kind of three is 0, forming 2 pairs is 0'
} else if(tri == true && pair == 1) {
  return 'The probability of drawing the next card forming a pair is 0, forming kind of three is 2/47, forming 2 pairs is 0'
} else if(tri == true) {
  return 'The probability of drawing the next card forming a pair is 6/47, forming kind of three is 0, forming 2 pairs is 0'
} else if(pair == 2) {
  return 'The probability of drawing the next card forming a pair is 3/47, forming kind of three is 4/47, forming 2 pairs is 12/47'
} else if(pair == 1) {
  return 'The probability of drawing the next card forming a pair is 9/47. forming kind of three is 2/47, forming 2 pairs is 9/47'
} else {
  return 'The probability of drawning the next card forming a pair is 15/47, forming kind of three is 0, , forming 2 pairs is 0'  
}
} 


Probit(deck);