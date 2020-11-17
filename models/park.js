const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinoCollection = []
};

Park.prototype.numOfDinos = function() {
    return this.dinoCollection.length
};

Park.prototype.addDino = function(dinoDeets) {
    this.dinoCollection.push(dinoDeets);
};

Park.prototype.removeDinoBySpecies = function(speciesOfDino) {
    const indexOfDino = this.dinoCollection.indexOf(speciesOfDino);
    this.dinoCollection.splice(indexOfDino, 1)
};

Park.prototype.mostVisitedDino = function(dinoCollection) {
    let largestNum = 0
    dinoCollection.forEach(dino => { if(dino.guestsAttractedPerDay > largestNum) { largestNum = dino.guestsAttractedPerDay } });
    return largestNum
};

Park.prototype.mostVisitedDinoName = function(dinoCollection, largestNum) {
    let dinoName = undefined
    dinoCollection.forEach(dino => { if(dino.guestsAttractedPerDay === largestNum) { dinoName = dino.species}});
    return dinoName
};




module.exports = Park;