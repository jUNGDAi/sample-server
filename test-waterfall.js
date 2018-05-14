const async = require("async");   /// const คือ ตัวแปรที่ไม่มีการเปลี่ยนค่า



////// นิยม ใช้ ตอน การเชื่อมต่อฐานข้อมูล ในการ execute statement
async.waterfall([
    ////// Default ว่าต้องมีแค่ parameter เดียว
    function (callback) {
        /**
         * logic
         */
        console.log("step 1")
        callback("Error Step 1", 'one', 'two');
    },
    function (arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log("step 2")
        callback(null, 'three');
    },
    function (arg1, callback) {
        // arg1 now equals 'three'
        console.log("step 3")
        callback(null, 'done');
    }
], function (err, result, data) {
    // result now equals 'done'
    console.log("final step")
    if (err) console.error(err);
    console.log(result);
});