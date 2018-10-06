//bat  fly feed
//fish          swim lay eggs
//whale    feed swim
//bird fly           lay eggs



class fly {
    fly() {
        return this.name + ' can fly.';
    }
}

class swim {
    swim() {
        return this.name + ' can swim.'
    }
}

class bat extends fly {
    constructor() {
        super();
        this.name = 'bat'
    }
    feed() {
        return this.name + ' feeds milk;'
    }
}

class fish extends swim {
    constructor() {
        super();
        this.name = 'fish'
    }
    feed() {
        return this.name + ' lays eggs;'
    }
}

class whale extends swim {
    constructor() {
        super();
        this.name = 'whale'
    }
    feed() {
        return this.name + ' feeds milk;'
    }
}

class bird extends fly {
    constructor() {
        super();
        this.name = 'bird'
    }
    feed() {
        return this.name + ' lays eggs;'
    }
}