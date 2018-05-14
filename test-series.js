/// ใช้ PATTERN 3: EXPORT A NAMED FUNCTION

const series = require("async").series;         //// ทำเหมือน waterfall 1 -> 2 -> 3 

series([

    /// series จะมี Parameter callback อันเดียว
    function (callback) {
        // do some stuff ...
        console.log("step 1")
        callback(null, 'one');
    },
    function (callback) {
        // do some more stuff ...
        console.log("step 2")
        callback(null, 'two');
    },
    function (callback) {
        // do some stuff ...
        console.log("step 3")
        callback("ERR-3", 'three');

        ////// ถ้าพังตรงนี้ มันจะส่งค่าที่มีการทำไปแล้ว แต่อาจจะทำไม่สมบูรณ์ กลับไปให้ด้วย เพื่อ Debug ดู
    },
    function (callback) {
        // do some more stuff ...
        console.log("step 4")
        callback(null, 'four');
    }
],
    // optional callback
    function (err, results) {
        // results is now equal to ['one', 'two']
        if (err) console.error(err, results[results.length-1]);
        else console.log(results)
        
    }
);
