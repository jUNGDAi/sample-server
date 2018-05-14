
var fs = require("fs");
// ธรรมชาติของ callback function ตัว parameter ที่เราจะมี 2 ตัว ตัวแรกคือ error ตัวที่สองคือ data ที่ return
var call_back = function (err, data) {
    if (!err) {
        console.log(data);
    }
}

fs.readFile('message.text', 'utf8', call_back);

console.log("something else");
