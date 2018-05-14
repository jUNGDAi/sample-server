// PATTERN 3: EXPORT A NAMED FUNCTION

// ข้อดีคือตั้งชื่อได้ มีหลาย fn ได้
exports.fiz = function () {
    console.log('fiz!');
};


exports.fiz2 = function (msg) {
    console.log("msg = " + msg);
};