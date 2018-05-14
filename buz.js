// PATTERN 4: EXPORT AN ANONYMOUS OBJECT

/// เพิ่ม method ได้เรื่อย ๆ เลย เป็นแบบ Object ตอนเรียกก็ไป dot dot เอา
var Buz = function () { };
Buz.prototype.log = function () {
    console.log('buz!');
};

Buz.prototype.hi = function ( msg ) {
    console.log('Hi = ' + msg)
}

module.exports = new Buz();
