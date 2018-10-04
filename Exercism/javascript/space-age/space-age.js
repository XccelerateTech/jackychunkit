var SpaceAge = function(input) {
    this.seconds = input;
}



SpaceAge.prototype.onMercury = function() {
    return SecondsToYears(this.seconds,0.2408467);
}
SpaceAge.prototype.onVenus = function() {
    return SecondsToYears(this.seconds,0.61519726);
}
SpaceAge.prototype.onEarth = function() {
    return SecondsToYears(this.seconds);
}
SpaceAge.prototype.onMars = function() {
    return SecondsToYears(this.seconds,1.8808158);
}
SpaceAge.prototype.onJupiter = function() {
    return SecondsToYears(this.seconds,11.862615);
}
SpaceAge.prototype.onSaturn = function() {
    return SecondsToYears(this.seconds,29.447498);
}
SpaceAge.prototype.onUranus = function() {
    return SecondsToYears(this.seconds,84.016846);
}
SpaceAge.prototype.onNeptune = function() {
    return SecondsToYears(this.seconds,164.79132);
}

function SecondsToYears(sec,SpaceAge) {
    return (SpaceAge) ? Math.round(sec * 100 / 31557600 / SpaceAge) / 100 : Math.round(sec * 100 / 31557600) / 100;
}

module.exports = SpaceAge;