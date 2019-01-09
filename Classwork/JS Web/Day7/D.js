class Monster {
  
    constructor(option){
      this.health = 100;
      this.name = option.name;
    }
    
    wound(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log('monster dead');
        }    
    } 
}

const Hero = () => {
    return Math.floor(Math.random() * (16)) + 5;
}
const damage = Hero();

var monster = new Monster('Deathwing');
monster.wound(Hero);