const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Triassic Recreation Ground", 20)
  })

  it('should have a name', function() {
      const actual = park.name
      assert.strictEqual(actual, "Triassic Recreation Ground");
  });

  it('should have a ticket price', function() {
      const actual = park.ticketPrice;
      assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function() {
      const actual = park.dinoCollection;
      assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
      park.addDino(triceratops = new Dinosaur('Triceratops', 'Herbivorous', 1000));
      const actual = park.numOfDinos();
      assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
      park.addDino(triceratops = new Dinosaur('Triceratops', 'Herbivorous', 1000));
      park.addDino(pterodactyl = new Dinosaur('Pterodactyl', 'Carnivorous', 500));
      park.addDino(diplodocus = new Dinosaur('Diplodocus', 'Herbivorous', 750));
      park.removeDinoBySpecies("Pterodactyl");
      const actual = park.numOfDinos();
      assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
      park.addDino(triceratops = new Dinosaur('Triceratops', 'Herbivorous',1000));
      park.addDino(pterodactyl = new Dinosaur('Pterodactyl', 'Carnivorous',500));
      park.addDino(diplodocus = new Dinosaur('Diplodocus', 'Herbivorous',750));
      let largestNum = park.mostVisitedDino(park.dinoCollection);
      const actual = park.mostVisitedDinoName(park.dinoCollection, largestNum);
      assert.strictEqual(actual, 'Triceratops')
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
