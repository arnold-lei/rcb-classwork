'use strict';

var should = require('chai').should();


var disemvowel = require('./disemvowel');
var multiply = require('./multiply');

describe('Multiply', function () {
  it('should multiply properly when passed numbers', function () {
    multiply(2, 4).should.equal(8);
  });

  it('should throw when not passed numbers', function () {
    (function() { multiply(2, "4") }).should.throw(Error);
  });
});

describe('disemvowel', function(){
    it('Should remove all vowels from the string ', function(){
        disemvowel('Hi my name is Arnold').should.equal('H m nm s rnld');
    });
});
