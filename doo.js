// PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE

var Doo = function () { };
Doo.prototype.log = function () {
    console.log('doo!');
}
module.exports = Doo;
