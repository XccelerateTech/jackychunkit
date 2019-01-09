//bat  fly feed
//fish          swim lay eggs
//whale    feed swim
//bird fly           lay eggs



class fly {
    constructor(type) {
      this.name = type;
    }
      fly() {
          return this.name + ' can fly.';
      }
  }
  
  class swim {
    constructor(type) {
      this.name = type;
    }
      swim() {
          return this.name + ' can swim.'
      }
  }
  
  class feed {
    constructor(type) {
      this.name = type;
    }
      feed() {
          return this.name + ' feeds milk.'
      }
  }
  
  class lays {
    constructor(type) {
      this.name = type;
    }
      lays() {
          return this.name + ' lays eggs.'
      }
  }
  
  class Bat {
      constructor(type) {
          this.fly = new fly(type);
          this.feed = new feed(type);
      }
  }
  
  class Fish {
      constructor(type) {
          this.swim = new swim(type);
          this.feed = new feed(type);
      }
  }
  
  class Whale {
      constructor(type) {
          this.swim = new swim(type);
          this.feed = new swim(type);
      }
  }
  
  class Bird {
      constructor(type) {
          this.fly = new fly(type);
          this.feed = new feed(type);
      }
  }
  
  
  
  let bird = new Bird('bird')
  bird.fly.fly()
