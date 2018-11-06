const Jedi = require('../starwar.js').Jedi;
const Sith = require('../starwar.js').Sith;
const duel = require('../starwar.js').duel;

describe('May the force be with you', () => {
    let anotherAnakin;
    let anotherObiwan;
    beforeEach(() => {
        anotherObiwan = new Jedi("Obiwan Kenobi", 70, 700);
        anotherAnakin = new Sith("Anakin Skywalker", 100, 1000);
        jasmine.clock().install();
        spyOn(anotherObiwan, 'attack').and.callThrough();
        spyOn(anotherAnakin, 'attack').and.callThrough();
        spyOn(anotherAnakin, 'injure').and.callThrough();
        spyOn(anotherObiwan, 'injure').and.callThrough();
        spyOn(anotherAnakin, 'dead').and.callThrough();
        spyOn(anotherObiwan, 'dead').and.callThrough();
    });
    afterEach(() => {
        jasmine.clock().uninstall();
    });
    it('Jedi have name', () => {
        expect(anotherAnakin.name).toBe("Anakin Skywalker");
        expect(anotherObiwan.name).toBe("Obiwan Kenobi");
    });
    it('Jedi is powerful', () => {
        expect(anotherAnakin.power).toBe(100);
        expect(anotherObiwan.power).toBe(70);
    });
    it('Jedi is healthy', () => {
        expect(anotherAnakin.health).toBe(1000);
        expect(anotherObiwan.health).toBe(700);
    });
    it('Jedi attacks on duel', () => {
        duel(anotherObiwan, anotherAnakin);
        expect(anotherObiwan.attack).toHaveBeenCalled();
        expect(anotherAnakin.attack).toHaveBeenCalled();
    });
    it('Jedi can attack and injure its opponents', () => {
        anotherAnakin.attack(anotherObiwan);
        anotherObiwan.attack(anotherAnakin);
        expect(anotherAnakin.injure).toHaveBeenCalled();
        expect(anotherObiwan.injure).toHaveBeenCalled();
    });
    it('Jedi is human, human has flesh, they can get injured', () => {
        duel(anotherObiwan, anotherAnakin);
        expect(anotherAnakin.health).toBeLessThan(1000);
        expect(anotherAnakin.health).toBeLessThan(700);
    });
    it('Jedi is human, human has life, they can die', () => {
        anotherAnakin.health = 0;
        anotherObiwan.health = 0;
        expect(anotherAnakin).toBeTruthy();
        expect(anotherObiwan).toBeTruthy();
    });
    it('Anakin always lose', () => {
        duel(anotherObiwan, anotherAnakin);
        expect(anotherObiwan.dead).not.toHaveBeenCalled();
        expect(anotherAnakin.dead).toHaveBeenCalled();
    });
    it('anakin should be revived', () => {
        duel(anotherObiwan, anotherAnakin);
        jasmine.clock().tick(5001);
        expect(anotherAnakin.health).toEqual(800);
        expect(anotherAnakin.power).toEqual(90);
    });
})