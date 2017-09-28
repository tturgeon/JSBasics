/*global
describe, it
*/

var basics = require('../basics')
const chai = require('chai')
console.log('basics', basics)
var expect = chai.expect
describe('Basic JS Exercises', function () {

  describe('Object Exercise 1 - animal', function () {
    it('Should have the appropriate keys', function () {
      expect(basics.animal.species).to.not.eql(undefined)
      expect(basics.animal.name).to.not.eql(undefined)
      expect(basics.animal.age).to.not.eql(undefined)
      expect(basics.animal.gender).to.not.eql(undefined)
      expect(basics.animal.favoriteFood).to.not.eql(undefined)
    })
    it('Dhould have a speech method that returns a string', function () {
      expect(basics.animal.speech()).to.be.a('string')
    })
  })

  describe('Object Exercise 2 - findAge', function () {
    it('should return the age value', function () {
      var age = basics.findAge({age: 10})
      expect(age).to.eql(10)
    })
  })

  describe('Object Exercise 3 - getKeys', function () {
    it('should return an array of all of the keys', function () {
      var keys = basics.getKeys({ a: 10, b: 5, c: 6 })
      expect(keys).to.have.lengthOf(3)
    })
  })

  describe('Object Exercise 4 - changeName', function () {
    it('should change the name of an object', function () {
      var obj = {name: 'Tom'}
      basics.changeName(obj, 'Larry')
      expect(obj.name).to.eql('Larry')
    })
  })

  describe('Object Exercise 5 - speechMaker', function () {
    it('should return the result of a speech function', function () {
      var speech = basics.speechMaker({ speech: function () { return 'hello' } })
      expect(speech).to.eql('hello')
    })
  })

  describe('Object Exercise 6 - addKey', function () {
    it('should add a bedtime key to an object and assign it a value', function () {
      var obj = {}
      basics.addKey(obj)
      expect(obj.bedtime).to.not.eql(undefined)
    })
  })

  describe('Object Exercise 7 - keyLoop', function () {
    it("should report if there's a monkey key in the object", function () {
      var obj = { animal: "monkey" }
      expect(basics.keyLoop(obj)).to.eql("There's a monkey!")
    })
    it("should report if there's not a monkey key in the object", function () {
      var obj = { animal: "python" }
      expect(basics.keyLoop(obj)).to.eql("There's no monkey here!")
    })
  })

  describe('Intermediate Exercise 1 - cars', function () {
    it('should be an array of length 3', function () {
      expect(basics.cars.length).to.eql(3)
    })
    it('should have valid key value pairs for all 3 car objects',function(){
      expect(basics.cars[0].make).to.not.eql(undefined)
      expect(basics.cars[0].model).to.not.eql(undefined)
      expect(basics.cars[0].year).to.not.eql(undefined)
      expect(basics.cars[1].make).to.not.eql(undefined)
      expect(basics.cars[1].model).to.not.eql(undefined)
      expect(basics.cars[1].year).to.not.eql(undefined)
      expect(basics.cars[2].make).to.not.eql(undefined)
      expect(basics.cars[2].model).to.not.eql(undefined)
      expect(basics.cars[2].year).to.not.eql(undefined)
    })
  })

  describe('Intermediate Exercise 2 - findModels', function () {
      it('should be an array of length 3', function () {
        var arr = [{
            make: "Chevy",
            model: "Corvette",
            year: 2015
          },{
            make: "Honda",
            model: "Civic",
            year: 1980
          },{
            make: "Ford",
            model: "F-150",
            year: 2010
          }
        ];
        var newarr = basics.findModels(arr);
        console.log(newarr);
        expect(newarr.length).to.eql(3)
      })
      it('should return an array of the model values', function () {
        var arr = [{
            make: "Chevy",
            model: "Corvette",
            year: 2015
          },{
            make: "Honda",
            model: "Civic",
            year: 1980
          },{
            make: "Ford",
            model: "F-150",
            year: 2010
          }
        ];
        expect(basics.findModels(arr)[0]).to.eql("Corvette")
        expect(basics.findModels(arr)[1]).to.eql("Civic")
        expect(basics.findModels(arr)[2]).to.eql("F-150")

      })
    })
})
