// PATTERN 3: EXPORT A NAMED FUNCTION

var fiz = require('./fiz.js').fiz; 
fiz();
fiz("v1");


var fiz2 = require('./fiz.js').fiz2;
fiz2("v2");

var fizz = require('./fiz.js');
fizz.fiz();
fizz.fiz2("vAll");