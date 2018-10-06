function Player1(name) {
    this.name = name;
    this.health = 100;
    this.attack = function() {
        p2.health -= 10;

    }
}

function Player2(name) {
    this.name = name;
    this.health = 100;
    this.attack = function() {
        p1.health -= 10;
    }
}

var p1combo = 0;
var p2combo = 0;

Player1.prototype.combo = function() {
    p1combo++;
    p2combo = 0;
    if (p1combo == 3) {
      this.health += 5;
      p1combo = 0;
    }
}

Player2.prototype.combo = function() {
    p2combo++;
    p1combo = 0;
    if (p2combo == 3) {
      this.health += 5;
      p2combo = 0;
    }
} 

function attack() {
    while (!(p1.health <= 0 || p2.health <= 0)) {
      console.log('P1 has ' + p1.health + 'hp , P2 has ' + p2.health + 'hp')
        if( Math.random() < 0.5) {
            p1.attack();
            p1.combo();
        } else {
            p2.attack();
            p2.combo();
            
        } 
    } 
    if(p1.health <= 0) {
        console.log(p2.name + ' wins!')
    } else if (p2.health <= 0){
        console.log(p1.name + ' wins!')
    }
}

var p1 = new Player1('Alliance');
var p2 = new Player2('Horde');
attack();