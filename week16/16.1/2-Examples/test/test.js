'use strict';

var should = require('chai').should();


var disemvowel = require('../disemvowel');
var multiply = require('../multiply');
var calculator = require('../calculator');

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

describe('calculator test suite', function(){
    it('Should be a calculator function', function(){
        calculator(10, 22, 'add').should.equal(32);
    })
})
