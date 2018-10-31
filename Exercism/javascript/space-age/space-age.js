export class SpaceAge {
    constructor(age) {
        this.seconds = age;
    }

    onMercury() {
        return SecondsToYears(this.seconds, 0.2408467);
    }
    onVenus() {
        return SecondsToYears(this.seconds, 0.61519726);
    }
    onEarth() {
        return SecondsToYears(this.seconds);
    }
    onMars() {
        return SecondsToYears(this.seconds, 1.8808158);
    }
    onJupiter() {
        return SecondsToYears(this.seconds, 11.862615);
    }
    onSaturn() {
        return SecondsToYears(this.seconds, 29.447498);
    }
    onUranus() {
        return SecondsToYears(this.seconds, 84.016846);
    }
    onNeptune() {
        return SecondsToYears(this.seconds, 164.79132);
    }
}

const SecondsToYears = (sec, age) => {
    return (age) ? 
    Math.round(sec * 100 / 31557600 / age) / 100: 
    Math.round(sec * 100 / 31557600) / 100;
}