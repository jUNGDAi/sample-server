// /PATTERN 5: EXPORT A NAMED OBJECT


var Baz = function () { };
Baz.prototype.log = function () {
    console.log('baz!');
};
exports.Baz = new Baz();


// var Baz2 = function () { };
// Baz2.prototype.log = function () {
//     console.log('baz2!');
// }

// exports.Baz2 = new Baz2();
