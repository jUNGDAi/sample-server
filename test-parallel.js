/// ไม่ต้องรอกัน 

const parallel = require("async").parallel; 

parallel([
    function(callback) {
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {
        setTimeout(function() {
            console.log('three');
            callback("ERR-3", 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    //// ยังไงก็เข้า function นี้ และผลลัพธ์ จะเรียงกันมาเลย ตามลำดับ function แม้ 2 จะเสร็จก่อน 1 แต่ผลลัพธ์ที่มาในรูปแบบ array ก็จะเรียงกันมา 1,2
    if ( err ) console.error(err)
    console.dir(results);
});