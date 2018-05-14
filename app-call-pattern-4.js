// PATTERN 4: EXPORT AN ANONYMOUS OBJECT

var buz = require('./buz.js');  // เรียกแบบ ไม่มี .js ก็ได้นะ 
buz.log();
buz.hi("ji");


var buz2 = require('./buz').hi;
buz2("ji");