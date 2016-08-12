'use strict';

var disemvowel = function(str){
  if (typeof str === 'number')
    return String(str);
  else
    return str.replace(/[aeiouy]/ig, '')
};

module.exports = disemvowel;
