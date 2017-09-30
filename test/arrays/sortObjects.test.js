var chai = require('chai');
var sortedArr = require('../../arrays/sortObjects.js');

var expect = chai.expect;
var assert = chai.assert;

xdescribe("Array Exercise - sortObjects()", function(){
  it('should return sorted array', function () {
    expect(sortedArr.length).to.eql(5);
    expect(sortedArr[0].title).to.eql('Fast and Furious');
    expect(sortedArr[1].title).to.eql('Hangover');
    expect(sortedArr[2].title).to.eql('Heat');
    expect(sortedArr[3].title).to.eql('Space Jam');
    expect(sortedArr[4].title).to.eql('Wedding Crashers');
  })
});
