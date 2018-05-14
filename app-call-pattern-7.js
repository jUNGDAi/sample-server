// PATTERN 7: EXPORT A NAMED PROTOTYPE

var Qux = require('./qux.js').Qux; 
var qux = new Qux(); 
qux.log();
