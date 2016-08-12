'use strict';


var calculator = function(num1,num2,operation){
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'mutiply':
      return num1 * num2;
    case 'divide':
      return num1 * num2;
    default:
      return null;
  }
};

module.exports = calculator;
